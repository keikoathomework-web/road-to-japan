/* ============================================================
   ACCESS CONTROL — Free vs Premium page gating
   Add to a gated page's <head>:
     <script src="access-control.js"></script>
     <script>RTJAccess.requirePremium('Kanji');</script>
   Call requirePremium() as early as possible (right after the script
   tag, before the rest of <head>) so the hide-on-load has no flash.
   ============================================================ */
(function () {
  function getProfile() {
    return JSON.parse(localStorage.getItem('rtj_profile') || '{}');
  }

  function getPlan() {
    return getProfile().plan || 'free';
  }

  function isPremium() {
    return getPlan() !== 'free';
  }

  function buildPaywall(featureName) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      visibility: visible; position: fixed; inset: 0; z-index: 99999;
      background: #08090f; display: flex; align-items: center; justify-content: center;
      padding: 24px; font-family: 'Nunito', sans-serif;
    `;
    overlay.innerHTML = `
      <div style="max-width:440px; text-align:center; background:rgba(255,255,255,0.04); border:1px solid rgba(255,215,0,0.2); border-radius:28px; padding:48px 36px; box-shadow:0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(255,215,0,0.06);">
        <div style="font-size:3.5rem; margin-bottom:16px;">🔒</div>
        <div style="font-family:'Bangers',cursive; font-size:2rem; letter-spacing:2px; background:linear-gradient(135deg,#fff,#ffd700); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:10px;">
          PREMIUM FEATURE
        </div>
        <p style="color:#d0d4e8; font-size:0.95rem; line-height:1.6; margin-bottom:28px;">
          <strong style="color:#ffd700">${featureName}</strong> is part of the Premium plan.
          Upgrade to unlock it — plus full Kanji, Vocabulary, Culture Hub, all 5 story chapters, and more.
        </p>
        <button onclick="window.location.href='payment.html'" style="width:100%; padding:16px; margin-bottom:12px; background:linear-gradient(135deg,#ffd700,#ffaa00); color:#000; font-family:'Bangers',cursive; font-size:1.3rem; letter-spacing:1px; border:none; border-radius:14px; cursor:pointer; box-shadow:0 4px 0 #a07000;">
          👑 Upgrade to Premium
        </button>
        <button onclick="window.location.href='home.html'" style="width:100%; padding:13px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#7a8099; font-family:'Nunito',sans-serif; font-weight:800; font-size:0.85rem; border-radius:12px; cursor:pointer;">
          ← Back to Home
        </button>
      </div>
    `;
    return overlay;
  }

  /* ── Server-side reconciliation ──
     localStorage gives an INSTANT decision (no flash), but it is only a
     cache and can be tampered with. Supabase `profiles.plan` — kept current
     by the paddle-webhook Edge Function — is the source of truth. After the
     instant decision we verify against the server (for signed-in users) and,
     if the cache disagrees, update it and reload once so the correct state
     shows. Reload only happens on a genuine mismatch, so there is no loop. */
  function ensureAuthThen(cb) {
    if (window.RTJAuth) return cb();
    const hasClient = [...document.scripts].some(s => (s.src || '').includes('supabase-client'));
    if (!hasClient) {
      const sc = document.createElement('script');
      sc.src = 'supabase-client.js';
      document.head.appendChild(sc);
    }
    window.addEventListener('rtjauth:ready', cb, { once: true });
  }

  async function serverPlan() {
    try {
      const profile = await window.RTJAuth.getProfile(); // null when signed out
      return profile ? (profile.plan || 'free') : null;
    } catch (_) { return null; }
  }

  function cachePlan(plan) {
    try {
      const s = JSON.parse(localStorage.getItem('rtj_profile') || '{}');
      s.plan = plan;
      localStorage.setItem('rtj_profile', JSON.stringify(s));
    } catch (_) {}
  }

  function reconcile(localPremium) {
    ensureAuthThen(async () => {
      const plan = await serverPlan();
      if (plan == null) return;                 // signed out → keep cache behavior
      const serverPremium = plan !== 'free';
      if (serverPremium === localPremium) { cachePlan(plan); return; }
      // Cache and server disagree → fix the cache, then reload once to
      // render the correct gated/ungated view.
      cachePlan(plan);
      window.location.reload();
    });
  }

  window.RTJAccess = {
    getPlan,
    isPremium,
    serverPlan,

    /** Returns true (and lets the page render) if the user has a paid plan.
     *  Otherwise hides the page content and shows an upgrade paywall.
     *  Either way it then verifies against Supabase and self-corrects. */
    requirePremium(featureName) {
      const localPremium = isPremium();

      if (!localPremium) {
        // Hide the real page instantly so there's no flash of gated content.
        document.documentElement.style.visibility = 'hidden';
        const show = () => {
          document.documentElement.style.visibility = 'visible';
          document.body.appendChild(buildPaywall(featureName || 'This feature'));
        };
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', show);
        } else {
          show();
        }
      }

      reconcile(localPremium);
      return localPremium;
    },
  };
})();
