/* ============================================================
   ACCESS CONTROL — Free vs Premium page gating
   Add to a gated page's <head>:
     <script src="access-control.js"></script>
     <script>RTJAccess.requirePremium('Kanji');</script>
   ============================================================ */
(function () {

  function getProfile() {
    try { return JSON.parse(localStorage.getItem('rtj_profile') || '{}'); } catch (_) { return {}; }
  }

  function getPlan() {
    return getProfile().plan || 'free';
  }

  function isPremium() {
    const profile = getProfile();
    if ((profile.plan || 'free') === 'free') return false;
    // Canceled but still within the paid period → still premium.
    if (profile.subscription_status === 'canceled') {
      if (!profile.premium_renew) return false;          // no renew date = treat as expired
      return new Date(profile.premium_renew) > new Date();
    }
    return true;
  }

  /* ── Cache the full server profile locally ── */
  function cacheProfile(serverProfile) {
    try {
      // Merge server data on top of local so we preserve any local-only fields.
      const local = getProfile();
      const merged = { ...local, ...serverProfile };
      localStorage.setItem('rtj_profile', JSON.stringify(merged));
    } catch (_) {}
  }

  /* ── Loading overlay — shown while we check the server ── */
  function buildLoader() {
    const el = document.createElement('div');
    el.id = '_rtj_loader';
    el.style.cssText = [
      'position:fixed;inset:0;z-index:99999;background:#08090f;',
      'display:flex;flex-direction:column;align-items:center;justify-content:center;',
      'font-family:Nunito,sans-serif;color:#fff;gap:16px;',
    ].join('');
    el.innerHTML = `
      <div style="font-size:2.2rem">🗾</div>
      <div style="font-size:1rem;color:#9aa3c0">Verifying your subscription…</div>
      <div style="width:180px;height:4px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden">
        <div style="height:100%;background:linear-gradient(90deg,#ffd700,#ffaa00);animation:_rtjprog 1.4s ease-in-out infinite"></div>
      </div>
      <style>@keyframes _rtjprog{0%{width:0%;margin-left:0}50%{width:80%;margin-left:0}100%{width:0%;margin-left:100%}}</style>
    `;
    return el;
  }

  /* ── Paywall overlay ── */
  function buildPaywall(featureName) {
    const el = document.createElement('div');
    el.id = '_rtj_paywall';
    el.style.cssText = [
      'position:fixed;inset:0;z-index:99999;background:#08090f;',
      'display:flex;align-items:center;justify-content:center;padding:24px;',
      'font-family:Nunito,sans-serif;',
    ].join('');
    el.innerHTML = `
      <div style="max-width:440px;text-align:center;background:rgba(255,255,255,0.04);
                  border:1px solid rgba(255,215,0,0.2);border-radius:28px;padding:48px 36px;
                  box-shadow:0 40px 80px rgba(0,0,0,0.6),0 0 60px rgba(255,215,0,0.06);">
        <div style="font-size:3.5rem;margin-bottom:16px">🔒</div>
        <div style="font-family:Bangers,cursive;font-size:2rem;letter-spacing:2px;
                    background:linear-gradient(135deg,#fff,#ffd700);
                    -webkit-background-clip:text;-webkit-text-fill-color:transparent;
                    margin-bottom:10px">PREMIUM FEATURE</div>
        <p style="color:#d0d4e8;font-size:0.95rem;line-height:1.6;margin-bottom:28px">
          <strong style="color:#ffd700">${featureName}</strong> is part of the Premium plan.
          Upgrade to unlock it — plus full Kanji, Vocabulary, Culture Hub, all 5 story chapters, and more.
        </p>
        <button onclick="window.location.href='payment.html'"
          style="width:100%;padding:16px;margin-bottom:12px;
                 background:linear-gradient(135deg,#ffd700,#ffaa00);color:#000;
                 font-family:Bangers,cursive;font-size:1.3rem;letter-spacing:1px;
                 border:none;border-radius:14px;cursor:pointer;box-shadow:0 4px 0 #a07000">
          👑 Upgrade to Premium
        </button>
        <button onclick="_rtjForceCheck()"
          style="width:100%;padding:13px;margin-bottom:10px;
                 background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.25);
                 color:#ffd700;font-family:Nunito,sans-serif;font-weight:900;
                 font-size:0.85rem;border-radius:12px;cursor:pointer">
          🔄 Already Premium? Restore Access
        </button>
        <button onclick="window.location.href='home.html'"
          style="width:100%;padding:13px;background:rgba(255,255,255,0.06);
                 border:1px solid rgba(255,255,255,0.1);color:#7a8099;
                 font-family:Nunito,sans-serif;font-weight:800;font-size:0.85rem;
                 border-radius:12px;cursor:pointer">
          ← Back to Home
        </button>
        <p id="_rtj_restore_msg" style="color:#9aa3c0;font-size:0.78rem;margin-top:14px;min-height:1.2em"></p>
      </div>
    `;
    return el;
  }

  /* ── Force-check button handler ── */
  window._rtjForceCheck = async function () {
    const msg = document.getElementById('_rtj_restore_msg');
    if (msg) msg.textContent = 'Checking your account…';
    try {
      await ensureAuth();
      const profile = await window.RTJAuth.getProfile();
      if (!profile) {
        if (msg) msg.textContent = 'Not signed in — please sign in first.';
        setTimeout(() => { window.location.href = 'auth.html?next=' + encodeURIComponent(window.location.pathname + window.location.search); }, 1500);
        return;
      }
      cacheProfile(profile);
      const ok = (profile.plan || 'free') !== 'free' &&
        !(profile.subscription_status === 'canceled' && profile.premium_renew && new Date(profile.premium_renew) <= new Date());
      if (ok) {
        if (msg) msg.textContent = '✅ Premium confirmed! Loading…';
        setTimeout(() => window.location.reload(), 800);
      } else {
        if (msg) msg.textContent = `Account plan: ${profile.plan || 'free'}. No active subscription found.`;
      }
    } catch (e) {
      if (msg) msg.textContent = 'Error: ' + (e.message || 'Try again.');
    }
  };

  /* ── Supabase auth helpers ── */
  function ensureAuth() {
    return new Promise((resolve) => {
      if (window.RTJAuth) return resolve();
      // Avoid adding the script twice.
      if (!document.querySelector('script[src*="supabase-client"]')) {
        const sc = document.createElement('script');
        sc.src = 'supabase-client.js';
        document.head.appendChild(sc);
      }
      window.addEventListener('rtjauth:ready', resolve, { once: true });
    });
  }

  async function fetchServerProfile() {
    try {
      await ensureAuth();
      return await window.RTJAuth.getProfile(); // null when signed out
    } catch (_) { return null; }
  }

  /* ── Main reconcile: compare local cache vs Supabase ── */
  async function reconcile(loaderEl, featureName) {
    const profile = await fetchServerProfile();

    // Not signed in → can't verify. Show paywall (don't loop).
    if (!profile) {
      if (loaderEl) loaderEl.remove();
      document.documentElement.style.visibility = 'visible';
      document.body.appendChild(buildPaywall(featureName));
      return;
    }

    // Update full local cache from server.
    cacheProfile(profile);

    const serverPremium =
      (profile.plan || 'free') !== 'free' &&
      !(profile.subscription_status === 'canceled' && profile.premium_renew && new Date(profile.premium_renew) <= new Date());

    if (serverPremium) {
      // Server confirms Premium → remove loader/paywall, show page.
      if (loaderEl) loaderEl.remove();
      document.documentElement.style.visibility = 'visible';
    } else {
      // Server confirms Free → show paywall.
      if (loaderEl) loaderEl.remove();
      document.documentElement.style.visibility = 'visible';
      document.body.appendChild(buildPaywall(featureName));
    }
  }

  window.RTJAccess = {
    getPlan,
    isPremium,

    /**
     * requirePremium(featureName)
     *
     * Strategy:
     *  - If localStorage says premium  → show page immediately, verify in bg.
     *  - If localStorage says free     → show "Verifying…" loader, check server
     *                                    FIRST, then show page OR paywall.
     * This prevents Premium users from ever seeing the paywall due to a stale cache.
     */
    requirePremium(featureName) {
      const name = featureName || 'This feature';

      if (isPremium()) {
        // ── Fast path: cache says premium — show page right away ──
        // Verify in background; if server disagrees, update cache (no reload
        // needed since the page is already showing correctly for "premium off").
        fetchServerProfile().then(profile => {
          if (profile) cacheProfile(profile);
        });
        return true;
      }

      // ── Slow path: cache says free — hide page and ask the server ──
      document.documentElement.style.visibility = 'hidden';

      const showLoader = () => {
        document.documentElement.style.visibility = 'visible';
        const loader = buildLoader();
        document.body.appendChild(loader);
        // 8-second safety timeout: if server never responds, show paywall.
        const timeout = setTimeout(() => {
          loader.remove();
          document.body.appendChild(buildPaywall(name));
        }, 8000);
        reconcile(loader, name).then(() => clearTimeout(timeout));
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showLoader, { once: true });
      } else {
        showLoader();
      }

      return false;
    },
  };
})();
