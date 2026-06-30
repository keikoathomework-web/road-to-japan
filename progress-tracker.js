/* ============================================================
   PROGRESS TRACKER — shared real progress storage
   Used by hiragana.html / katakana.html / kanji.html / vocabulary.html
   to persist per-character mastery, and by profile.html / home.html
   to read it back for real (not mock) stats.
   ============================================================ */
(function () {
  const KANA_KEY = 'rtj_kana_progress'; // { hiragana: {char:{status,correct,wrong}}, katakana: {...}, ... }
  const PROFILE_KEY = 'rtj_profile';

  function loadProfile() {
    return JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}');
  }
  function saveProfile(p) {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(p));
  }

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
    },

    /** Count how many characters are mastered/learning/new for a category. */
    getStats(category, totalChars) {
      const data = this.load(category);
      const values = Object.values(data);
      const mastered = values.filter(s => s.status === 'mastered').length;
      const learning = values.filter(s => s.status === 'learning').length;
      return {
        mastered, learning,
        new: totalChars - mastered - learning,
        total: totalChars,
        pct: totalChars ? Math.round((mastered / totalChars) * 100) : 0,
      };
    },

    /**
     * Award real XP: updates today's daily total, lifetime total, and the
     * streak/studyDays fields that profile.html's calendar reads — all in
     * one place so every lesson page stays consistent.
     */
    addXP(amount) {
      const profile = loadProfile();
      profile.xp = (profile.xp || 0) + amount;

      const todayStr = new Date().toISOString().split('T')[0];
      profile.dailyXP = profile.dailyXP || {};
      profile.dailyXP[todayStr] = (profile.dailyXP[todayStr] || 0) + amount;

      if (profile.lastStudy !== todayStr) {
        const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
        const yStr = yesterday.toISOString().split('T')[0];
        if (profile.lastStudy === yStr) profile.streak = (profile.streak || 0) + 1;
        else profile.streak = 1;
        profile.lastStudy = todayStr;
        profile.studyDays = profile.studyDays || [];
        if (!profile.studyDays.includes(todayStr)) profile.studyDays.push(todayStr);
        if (profile.streak > (profile.bestStreak || 0)) profile.bestStreak = profile.streak;
      }

      saveProfile(profile);
      return profile.xp;
    },
  };
})();
