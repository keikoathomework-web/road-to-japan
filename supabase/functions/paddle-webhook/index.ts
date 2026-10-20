// ============================================================
//  PADDLE WEBHOOK — Road to Japan  (Paddle Billing)
//  Source of truth for a user's Premium entitlement.
//  Receives subscription / transaction events from Paddle and
//  syncs profiles.plan (+ billing fields) in Supabase.
//
//  Deploy:
//    supabase functions deploy paddle-webhook --no-verify-jwt
//  Required secrets (supabase secrets set ...):
//    PADDLE_WEBHOOK_SECRET      (pdl_ntfset_...  — from Paddle → Notifications)
//    SUPABASE_URL
//    SUPABASE_SERVICE_ROLE_KEY  (bypasses RLS — server-only, never in the client)
//
//  In Paddle Dashboard → Developer Tools → Notifications, add a
//  destination pointing at:
//    https://<project-ref>.functions.supabase.co/paddle-webhook
//  and subscribe to: subscription.* and transaction.completed /
//  transaction.payment_failed
// ============================================================
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const PADDLE_WEBHOOK_SECRET = Deno.env.get('PADDLE_WEBHOOK_SECRET')!;

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

/* ── Verify the Paddle-Signature header (HMAC-SHA256) ──
   Header format:  ts=1700000000;h1=<hex-digest>
   Signed payload: `${ts}:${rawBody}`                       */
async function verifySignature(rawBody: string, header: string | null): Promise<boolean> {
  if (!header || !PADDLE_WEBHOOK_SECRET) return false;

  const parts = Object.fromEntries(
    header.split(';').map((kv) => kv.split('=').map((s) => s.trim())),
  ) as Record<string, string>;
  const ts = parts['ts'];
  const h1 = parts['h1'];
  if (!ts || !h1) return false;

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(PADDLE_WEBHOOK_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign(
    'HMAC',
    key,
    new TextEncoder().encode(`${ts}:${rawBody}`),
  );
  const expected = [...new Uint8Array(sig)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  // constant-time-ish compare
  if (expected.length !== h1.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ h1.charCodeAt(i);
  return diff === 0;
}

/* ── Find the Supabase user this event belongs to ── */
async function resolveUserId(data: any): Promise<string | null> {
  // 1. Preferred: custom_data.user_id we attached at checkout.
  const fromCustom = data?.custom_data?.user_id;
  if (fromCustom) return fromCustom;

  // 2. Fallback: match a previously-stored Paddle subscription / customer id.
  const subId = data?.id?.startsWith?.('sub_') ? data.id : data?.subscription_id;
  if (subId) {
    const { data: row } = await supabase
      .from('profiles').select('id').eq('paddle_subscription_id', subId).maybeSingle();
    if (row?.id) return row.id;
  }
  const custId = data?.customer_id;
  if (custId) {
    const { data: row } = await supabase
      .from('profiles').select('id').eq('paddle_customer_id', custId).maybeSingle();
    if (row?.id) return row.id;
  }
  return null;
}

function mapCycle(data: any): string | null {
  const interval = data?.billing_cycle?.interval || data?.items?.[0]?.price?.billing_cycle?.interval;
  if (interval === 'year') return 'annual';
  if (interval === 'month') return 'monthly';
  return data?.custom_data?.plan === 'annual' ? 'annual' : (data?.custom_data?.plan ? 'monthly' : null);
}

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const rawBody = await req.text();
  const ok = await verifySignature(rawBody, req.headers.get('Paddle-Signature'));
  if (!ok) {
    console.warn('[paddle-webhook] invalid signature');
    return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 401 });
  }

  let event: any;
  try { event = JSON.parse(rawBody); } catch { return new Response('Bad JSON', { status: 400 }); }

  const type: string = event?.event_type || '';
  const data = event?.data || {};

  try {
    const userId = await resolveUserId(data);
    if (!userId) {
      console.warn('[paddle-webhook] no user match for', type, data?.id);
      // 200 so Paddle doesn't retry forever on events we can't map.
      return new Response(JSON.stringify({ ok: true, ignored: 'no user match' }), { status: 200 });
    }

    const now = new Date().toISOString();
    let update: Record<string, unknown> | null = null;

    switch (type) {
      case 'subscription.created':
      case 'subscription.activated':
      case 'subscription.updated':
      case 'subscription.resumed': {
        const status = data?.status; // active / trialing / past_due / paused / canceled
        if (status === 'active' || status === 'trialing') {
          update = {
            plan: 'premium',
            subscription_status: status,
            paddle_subscription_id: data?.id ?? null,
            paddle_customer_id: data?.customer_id ?? null,
            billing_cycle: mapCycle(data),
            premium_start: data?.started_at ?? data?.first_billed_at ?? now,
            premium_renew: data?.current_billing_period?.ends_at ?? null,
          };
        } else if (status === 'past_due') {
          // Dunning: keep Premium access during Paddle's automatic retries,
          // but flag the account so we can prompt the user to update payment.
          update = { subscription_status: 'past_due', premium_renew: data?.current_billing_period?.ends_at ?? null };
        } else if (status === 'paused' || status === 'canceled') {
          update = {
            plan: 'free',
            subscription_status: status,
            paddle_subscription_id: null,
            premium_renew: null,
          };
        }
        break;
      }

      case 'subscription.canceled': {
        // Keep premium access until the end of the paid period.
        // When premium_renew passes, access-control.js reconciles against
        // the server and the user sees the paywall on next visit.
        const renewsAt = data?.scheduled_change?.effective_at
          ?? data?.current_billing_period?.ends_at
          ?? null;
        update = {
          plan: 'premium',          // still paid through period end
          subscription_status: 'canceled',
          paddle_subscription_id: data?.id ?? null,
          premium_renew: renewsAt,  // null → treated as expired already
        };
        break;
      }

      case 'subscription.past_due': {
        update = { subscription_status: 'past_due' };
        break;
      }

      case 'transaction.completed': {
        // A successful (renewal) payment — refresh the renewal date & clear dunning.
        update = {
          plan: 'premium',
          subscription_status: 'active',
          premium_renew: data?.billing_period?.ends_at ?? undefined,
        };
        break;
      }

      case 'transaction.payment_failed': {
        update = { subscription_status: 'past_due' };
        break;
      }

      default:
        return new Response(JSON.stringify({ ok: true, ignored: type }), { status: 200 });
    }

    if (update) {
      // Drop undefined keys so we never overwrite good data with nothing.
      Object.keys(update).forEach((k) => update![k] === undefined && delete update![k]);
      update.updated_at = now;
      const { error } = await supabase.from('profiles').update(update).eq('id', userId);
      if (error) throw error;
      console.log('[paddle-webhook]', type, '→', userId, JSON.stringify(update));
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[paddle-webhook] error:', err);
    // 500 → Paddle will retry with backoff.
    return new Response(JSON.stringify({ error: 'Processing error' }), { status: 500 });
  }
});
