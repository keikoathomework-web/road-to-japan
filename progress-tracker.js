/* ============================================================
   PROGRESS TRACKER — shared real progress storage
   Used by hiragana.html / katakana.html / kanji.html / vocabulary.html
   to persist per-character mastery, and by profile.html / home.html
   to read it back for real (not mock) stats.

   Storage strategy:
     - Always read/write localStorage (instant, works offline)
     - If user is signed in, also sync to Supabase user_progress table
     - On first sign-in, migrate existing localStorage data to Supabase
   ============================================================ */
(function () {
  const KANA_KEY    = 'rtj_kana_progress';
  const PROFILE_KEY = 'rtj_profile';

  /* ── localStorage helpers ── */
  function loadProfile() {
    return JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}');
  }
  function saveProfile(p) {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(p));
  }

  /* ── Supabase helpers (only called when RTJAuth is ready & user is signed in) ── */
  async function getSupabaseClient() {
    if (!window.RTJAuth || !window.RTJAuth.client) return null;
    const session = await window.RTJAuth.getSession();
    if (!session) return null;
    return { client: window.RTJAuth.client, userId: session.user.id };
  }

  async function syncToSupabase() {
    const sb = await getSupabaseClient();
    if (!sb) return;

    const profile  = loadProfile();
    const kana     = JSON.parse(localStorage.getItem(KANA_KEY) || '{}');

    const payload = {
      user_id:      sb.userId,
      kana_progress: kana,
      xp:           profile.xp          || 0,
      streak:       profile.streak       || 0,
      best_streak:  profile.bestStreak   || 0,
      last_study:   profile.lastStudy    || null,
      study_days:   profile.studyDays    || [],
      daily_xp:     profile.dailyXP      || {},
      updated_at:   new Date().toISOString(),
    };

    const { error } = await sb.client
      .from('user_progress')
      .upsert(payload, { onConflict: 'user_id' });

    if (error) console.error('[RTJProgress] Supabase sync error:', error);
  }

  async function loadFromSupabase() {
    const sb = await getSupabaseClient();
    if (!sb) return false;

    const { data, error } = await sb.client
      .from('user_progress')
      .select('*')
      .eq('user_id', sb.userId)
      .single();

    if (error || !data) return false;

    /* Write remote data into localStorage so the rest of the app just works */
    localStorage.setItem(KANA_KEY, JSON.stringify(data.kana_progress || {}));
    saveProfile({
      xp:         data.xp,
      streak:     data.streak,
      bestStreak: data.best_streak,
      lastStudy:  data.last_study,
      studyDays:  data.study_days  || [],
      dailyXP:    data.daily_xp    || {},
    });
    return true;
  }

  /* ── Level-up system ── */
  const XP_PER_LEVEL = 300;
  function getLevel(xp) { return Math.floor(xp / XP_PER_LEVEL) + 1; }

  function checkLevelUp(prevXP, newXP) {
    const prevLevel = getLevel(prevXP);
    const newLevel  = getLevel(newXP);
    if (newLevel > prevLevel) showLevelUpToast(newLevel);
  }

  function showLevelUpToast(level) {
    const badge = { 1:'🌱', 2:'⚔️', 3:'🔥', 4:'🏆', 5:'👑', 6:'💎', 7:'🌟', 8:'🚀', 9:'🦋', 10:'🎌' };
    const icon  = badge[Math.min(level, 10)] || '⭐';
    const msg   = ${icon} Level Up! You reached Level !;

    // Try to use an existing toast element on the page, or create a floating one
    let toast = document.getElementById('rtjLevelToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'rtjLevelToast';
      toast.style.cssText = [
        'position:fixed','bottom:90px','left:50%','transform:translateX(-50%) translateY(40px)',
        'background:linear-gradient(135deg,#0057A8,#FF6B9D)','color:#fff',
        'font-weight:700','font-size:1rem','padding:14px 28px','border-radius:50px',
        'box-shadow:0 4px 20px rgba(0,0,0,0.3)','z-index:9999',
        'opacity:0','transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        'pointer-events:none','text-align:center'
      ].join(';');
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(40px)';
    }, 3500);

    // Dispatch event so other scripts can react
    window.dispatchEvent(new CustomEvent('rtj:levelup', { detail: { level } }));
  }

  /* ── Public API ── */
  window.RTJProgress = {

    /** Load saved per-character state for a category (e.g. 'hiragana'). */
    load(category) {
      const all = JSON.parse(localStorage.getItem(KANA_KEY) || '{}');
      return all[category] || {};
    },

    /** Persist the full per-character state object for a category. */
    save(category, data) {
      const all = JSON.parse(localStorage.getItem(KANA_KEY) || '{}');
      all[category] = data;
      localStorage.setItem(KANA_KEY, JSON.stringify(all));
      syncToSupabase();
    },

    /** Count how many characters are mastered/learning/new for a category. */
    getStats(category, totalChars) {
      const data   = this.load(category);
      const values = Object.values(data);
      const mastered = values.filter(s => s.status === 'mastered').length;
      const learning = values.filter(s => s.status === 'learning').length;
      return {
        mastered, learning,
        new:   totalChars - mastered - learning,
        total: totalChars,
        pct:   totalChars ? Math.round((mastered / totalChars) * 100) : 0,
      };
    },

    /**
     * Award real XP: updates today's daily total, lifetime total, and the
     * streak/studyDays fields that profile.html's calendar reads.
     */
    addXP(amount) {
      const profile   = loadProfile();
      const prevXP    = profile.xp || 0;
      profile.xp      = prevXP + amount;

      const todayStr  = new Date().toISOString().split('T')[0];
      profile.dailyXP = profile.dailyXP || {};
      profile.dailyXP[todayStr] = (profile.dailyXP[todayStr] || 0) + amount;

      if (profile.lastStudy !== todayStr) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yStr = yesterday.toISOString().split('T')[0];
        if (profile.lastStudy === yStr) profile.streak = (profile.streak || 0) + 1;
        else profile.streak = 1;
        profile.lastStudy  = todayStr;
        profile.studyDays  = profile.studyDays || [];
        if (!profile.studyDays.includes(todayStr)) profile.studyDays.push(todayStr);
        if (profile.streak > (profile.bestStreak || 0)) profile.bestStreak = profile.streak;
      }

      saveProfile(profile);
      syncToSupabase();
      checkLevelUp(prevXP, profile.xp);
      return profile.xp;
    },

    /**
     * Call this once after the user signs in (or on page load if already signed in).
     * Pulls remote data into localStorage so the page shows up-to-date stats.
     * If no remote data exists yet, pushes current localStorage data to Supabase.
     */
    async syncOnLogin() {
      const pulled = await loadFromSupabase();
      if (!pulled) {
        /* First time signing in — migrate local data to Supabase */
        await syncToSupabase();
      }
    },
  };
})();
