/* Road to Japan — Main App Logic */

const APP = {
  state: {
    lang: 'en',
    playerName: 'Kai',
    xp: 0,
    level: 1,
    mochiCoins: 100,
    streak: 0,
    streakDays: [],
    plan: 'free', // free | standard | premium
    progress: {
      hiragana: [],
      katakana: [],
      kanji_g1: [],
      greetings: [],
      story_chapter: 0,
      story_scene: 0,
      culturesRead: [],
      questsDone: []
    },
    badges: [],
    currentScreen: 'splash',
    lessonState: null
  },

  chars: {
    kai: '🧑',
    sakura: '👧',
    mochi: '🍡',
    taro: '🧔',
    captain: '👴',
    yuki: '👩',
    narrator: '📜'
  },

  xpForLevel(lvl) { return lvl * 200; },
  totalXpForLevel(lvl) {
    let total = 0;
    for (let i = 1; i < lvl; i++) total += this.xpForLevel(i);
    return total;
  },

  getLevelTitle(lvl) {
    if (lvl <= 5) return 'Beginner Sailor';
    if (lvl <= 10) return 'Young Adventurer';
    if (lvl <= 15) return 'Ocean Traveler';
    if (lvl <= 20) return 'Japan Seeker';
    if (lvl <= 30) return 'Samurai Student';
    return 'Grand Master';
  },

  save() {
    try { localStorage.setItem('rtj_state', JSON.stringify(this.state)); } catch(e) {}
  },

  load() {
    try {
      const saved = localStorage.getItem('rtj_state');
      if (saved) this.state = { ...this.state, ...JSON.parse(saved) };
    } catch(e) {}
  },

  t(key) {
    const lang = this.state.lang;
    const translations = {
      en: {
        good_morning: 'Good morning',
        good_afternoon: 'Good afternoon',
        good_evening: 'Good evening',
        daily_quests: 'Daily Quests',
        story: 'Story',
        learn: 'Learn',
        culture: 'Culture',
        profile: 'Profile',
        hiragana: 'Hiragana',
        katakana: 'Katakana',
        kanji: 'Kanji',
        greetings: 'Greetings',
        tap_to_reveal: 'Tap to reveal',
        your_answer: 'What does this say?',
        correct: 'Correct!',
        wrong: 'Not quite...',
        lesson_complete: 'Lesson Complete!',
        streak_days: 'day streak',
        xp_earned: 'XP earned',
        continue: 'Continue',
        level_up: 'LEVEL UP!'
      },
      es: {
        good_morning: 'Buenos días',
        good_afternoon: 'Buenas tardes',
        good_evening: 'Buenas noches',
        daily_quests: 'Misiones Diarias',
        story: 'Historia',
        learn: 'Aprender',
        culture: 'Cultura',
        profile: 'Perfil',
        hiragana: 'Hiragana',
        katakana: 'Katakana',
        kanji: 'Kanji',
        greetings: 'Saludos',
        tap_to_reveal: 'Toca para revelar',
        your_answer: '¿Qué dice esto?',
        correct: '¡Correcto!',
        wrong: 'No exactamente...',
        lesson_complete: '¡Lección Completa!',
        streak_days: 'días seguidos',
        xp_earned: 'XP ganado',
        continue: 'Continuar',
        level_up: '¡SUBISTE DE NIVEL!'
      }
    };
    return (translations[lang] || translations.en)[key] || key;
  },

  addXP(amount, el) {
    const old = this.state.xp;
    this.state.xp += amount;
    const oldLevel = this.state.level;
    while (this.state.xp >= this.totalXpForLevel(this.state.level + 1)) {
      this.state.level++;
    }
    if (this.state.level > oldLevel) {
      this.showToast(`${this.t('level_up')} Lv.${this.state.level}! 🎉`);
      this.spawnSakura();
    }
    this.state.mochiCoins += Math.floor(amount / 5);
    this.save();
    if (el) this.spawnXPPopup(amount, el);
    this.updateXPBar();
  },

  updateXPBar() {
    const el = document.getElementById('xp-fill');
    const lv = document.getElementById('xp-level');
    const coins = document.getElementById('mochi-coins');
    if (!el) return;
    const lvl = this.state.level;
    const lvlXpStart = this.totalXpForLevel(lvl);
    const lvlXpEnd = this.totalXpForLevel(lvl + 1);
    const pct = ((this.state.xp - lvlXpStart) / (lvlXpEnd - lvlXpStart)) * 100;
    el.style.width = Math.min(pct, 100) + '%';
    if (lv) lv.textContent = `Lv.${lvl}`;
    if (coins) coins.textContent = this.state.mochiCoins;
    const xpLabel = document.getElementById('xp-label');
    if (xpLabel) xpLabel.textContent = `${this.state.xp - lvlXpStart} / ${lvlXpEnd - lvlXpStart} XP`;
  },

  spawnXPPopup(amount, anchor) {
    const div = document.createElement('div');
    div.className = 'xp-popup';
    div.textContent = `+${amount} XP`;
    const rect = anchor.getBoundingClientRect();
    div.style.left = (rect.left + rect.width / 2 - 30) + 'px';
    div.style.top = rect.top + 'px';
    div.style.position = 'fixed';
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 1300);
  },

  spawnSakura() {
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        const p = document.createElement('div');
        p.className = 'sakura-petal';
        p.textContent = ['🌸','🌺','🌻','✿'][Math.floor(Math.random()*4)];
        p.style.left = Math.random() * 100 + 'vw';
        p.style.animationDuration = (2.5 + Math.random() * 2) + 's';
        p.style.fontSize = (12 + Math.random() * 8) + 'px';
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 5000);
      }, i * 100);
    }
  },

  showToast(msg, duration = 2500) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.style.display = 'block';
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => { t.style.display = 'none'; }, duration);
  },

  gotoScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById('screen-' + id);
    if (target) {
      target.classList.add('active');
      target.scrollTop = 0;
    }
    this.state.currentScreen = id;
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.toggle('active', n.dataset.screen === id);
    });
    this.onScreenEnter(id);
  },

  onScreenEnter(id) {
    if (id === 'home') this.renderHome();
    if (id === 'learn') this.renderLearn();
    if (id === 'culture') this.renderCulture('history');
    if (id === 'profile') this.renderProfile();
    if (id === 'story') this.renderStoryMenu();
  },

  /* ==================== HOME ==================== */
  renderHome() {
    const el = document.getElementById('home-player-name');
    if (el) el.textContent = this.state.playerName;

    const greet = document.getElementById('home-greeting');
    if (greet) {
      const h = new Date().getHours();
      greet.textContent = h < 12 ? this.t('good_morning') : h < 17 ? this.t('good_afternoon') : this.t('good_evening');
    }

    this.updateXPBar();

    // Streak
    const sc = document.getElementById('streak-count');
    if (sc) sc.textContent = this.state.streak;

    // Daily quests
    this.renderDailyQuests();

    // Story progress
    const chNum = document.getElementById('story-ch-num');
    const chTitle = document.getElementById('story-ch-title');
    const chJP = document.getElementById('story-ch-jp');
    const chProg = document.getElementById('story-ch-progress');
    const chapters = RTJ_DATA.story;
    const chKeys = Object.keys(chapters);
    const curChIdx = Math.min(this.state.progress.story_chapter, chKeys.length - 1);
    const curCh = chapters[chKeys[curChIdx]];
    if (chNum) chNum.textContent = `Chapter ${curChIdx + 1}`;
    if (chTitle) chTitle.textContent = curCh.title;
    if (chJP) chJP.textContent = curCh.titleJP;
    const scenes = curCh.scenes;
    const sceneIdx = this.state.progress.story_scene || 0;
    if (chProg) chProg.style.width = Math.round((sceneIdx / scenes.length) * 100) + '%';
  },

  renderDailyQuests() {
    const container = document.getElementById('daily-quests');
    if (!container) return;
    const done = this.state.progress.questsDone;
    const quests = [
      {id:'q1', icon:'あ', name:'Practice Hiragana', detail:'Complete 1 hiragana lesson', xp:30, screen:'lesson-hiragana'},
      {id:'q2', icon:'🏯', name:'Read culture entry', detail:'Read any culture card', xp:20, screen:'culture'},
      {id:'q3', icon:'📖', name:'Learn a greeting', detail:'Complete greetings lesson', xp:25, screen:'lesson-greetings'}
    ];
    container.innerHTML = quests.map(q => {
      const isDone = done.includes(q.id);
      return `<div class="quest-card ${isDone ? 'completed' : ''}" onclick="APP.startQuestAction('${q.id}','${q.screen}')">
        <div class="quest-icon">${q.icon}</div>
        <div class="quest-info">
          <div class="quest-name">${q.name}</div>
          <div class="quest-detail">${q.detail}</div>
        </div>
        ${isDone ? '<div class="quest-check">✓</div>' : `<div class="quest-xp">+${q.xp} XP</div>`}
      </div>`;
    }).join('');
  },

  startQuestAction(questId, screen) {
    if (screen.startsWith('lesson-')) {
      const type = screen.replace('lesson-', '');
      this.startLesson(type, questId);
    } else {
      this.gotoScreen(screen);
    }
  },

  /* ==================== LEARN ==================== */
  renderLearn() {
    const grid = document.getElementById('module-grid');
    if (!grid) return;
    const plan = this.state.plan;
    const modules = [
      { id:'hiragana', icon:'あ', name:'Hiragana', detail:'46 characters', tier:'free',
        progress: this.state.progress.hiragana.length, total: RTJ_DATA.hiragana.length,
        color:'#EF4444' },
      { id:'katakana', icon:'ア', name:'Katakana', detail:'46 characters', tier:'free',
        progress: this.state.progress.katakana.length, total: RTJ_DATA.katakana.slice(0,25).length,
        color:'#3B82F6' },
      { id:'greetings', icon:'👋', name:'Greetings', detail:'Essential phrases', tier:'free',
        progress: this.state.progress.greetings.length, total: RTJ_DATA.greetings.length,
        color:'#10B981' },
      { id:'kanji_g1', icon:'一', name:'Kanji Grade 1', detail:'80 kanji', tier:'standard',
        progress: this.state.progress.kanji_g1.length, total: RTJ_DATA.kanjiGrade1.length,
        color:'#F59E0B' },
      { id:'katakana_words', icon:'🎌', name:'Katakana Words', detail:'Loanwords & anime', tier:'standard',
        progress: 0, total: RTJ_DATA.katakanaWords.length,
        color:'#8B5CF6' },
      { id:'jlpt_n5', icon:'📚', name:'JLPT N5', detail:'Vocabulary & grammar', tier:'premium',
        progress: 0, total: RTJ_DATA.jlpt.n5vocab.length,
        color:'#EC4899' }
    ];

    grid.innerHTML = modules.map(m => {
      const isLocked = (m.tier === 'standard' && plan === 'free') ||
                       (m.tier === 'premium' && plan !== 'premium');
      const pct = m.total > 0 ? Math.round((m.progress / m.total) * 100) : 0;
      const tierLabel = m.tier === 'free' ? 'FREE' : m.tier === 'standard' ? '$15' : '$30';
      const tierClass = `tier-${m.tier}`;
      const gradeReady = !isLocked && pct >= 80 && m.progress > 0;
      const mistakeCount = JSON.parse(localStorage.getItem(`rtj_mistakes_${m.id}`) || '[]').length;
      return `<div class="module-card ${isLocked ? 'locked' : ''} ${gradeReady ? 'grade-ready' : ''}" onclick="${isLocked ? `APP.showUpgrade('${m.tier}')` : `APP.startLesson('${m.id}')`}">
        ${isLocked ? '<div class="lock-badge">🔒</div>' : ''}
        ${gradeReady ? '<div class="grade-up-badge">EXAM READY</div>' : ''}
        <div class="module-icon" style="color:${m.color}">${m.icon}</div>
        <div class="module-name">${m.name}</div>
        <div class="module-detail">${m.detail}</div>
        <div class="module-progress"><div class="module-progress-fill" style="width:${pct}%;background:${m.color}"></div></div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px">
          <span class="tier-badge ${tierClass}">${tierLabel}</span>
          <span style="font-size:11px;color:rgba(255,255,255,0.4)">${pct}%</span>
        </div>
        ${gradeReady ? `<button class="grade-up-btn" onclick="event.stopPropagation();APP.startGradeUp('${m.id}')">🎓 Grade Up!</button>` : ''}
        ${mistakeCount > 0 && !isLocked ? `<div class="review-badge" onclick="event.stopPropagation();APP.startReviewFor('${m.id}')">🔄 ${mistakeCount} to review</div>` : ''}
      </div>`;
    }).join('');
  },

  /* ==================== LESSON ==================== */
  startLesson(type, questId = null) {
    let items = [];
    let mode = 'flashcard'; // flashcard | quiz

    if (type === 'hiragana') {
      items = RTJ_DATA.hiragana.slice(0, 10).map(h => ({
        front: h.char, frontLabel: '', back: h.romaji, hint: h.mnemonic,
        type: 'hiragana', id: h.romaji
      }));
    } else if (type === 'katakana') {
      items = RTJ_DATA.katakana.slice(0, 10).map(k => ({
        front: k.char, back: k.romaji, hint: '',
        type: 'katakana', id: k.romaji + '_k'
      }));
    } else if (type === 'kanji_g1') {
      items = RTJ_DATA.kanjiGrade1.slice(0, 8).map(k => ({
        front: k.kanji, back: k.meaning,
        hint: `${k.onyomi || '—'} / ${k.kunyomi || '—'}`,
        type: 'kanji', id: k.kanji
      }));
    } else if (type === 'greetings') {
      items = RTJ_DATA.greetings.slice(0, 8).map(g => ({
        front: g.japanese, back: g.romaji,
        hint: this.state.lang === 'es' ? g.spanish : g.english,
        type: 'greetings', id: g.romaji
      }));
    } else if (type === 'katakana_words') {
      items = RTJ_DATA.katakanaWords.slice(0, 8).map(w => ({
        front: w.word, back: w.romaji, hint: w.meaning,
        type: 'katakana_words', id: w.romaji + '_w'
      }));
    } else if (type === 'jlpt_n5') {
      items = RTJ_DATA.jlpt.n5vocab.slice(0, 8).map(v => ({
        front: v.word, back: v.reading,
        hint: `${v.meaning} — ${v.example}`,
        type: 'jlpt_n5', id: v.word
      }));
    }

    // Mix: 5 flashcards then 5 quizzes
    const flashItems = items.slice(0, 5);
    const quizItems = items.slice(0, 5); // use same items for quiz

    this.state.lessonState = {
      type, questId,
      allItems: items,
      flashItems, quizItems,
      phase: 'flash', // flash | quiz | result
      flashIdx: 0,
      quizIdx: 0,
      correct: 0,
      wrong: 0,
      revealed: false
    };

    this.gotoScreen('lesson');
    this.renderLesson();
  },

  renderLesson() {
    const ls = this.state.lessonState;
    if (!ls) return;

    const content = document.getElementById('lesson-content');
    if (!content) return;

    const total = ls.flashItems.length + ls.quizItems.length;

    if (ls.phase === 'flash') {
      const item = ls.flashItems[ls.flashIdx];
      const current = ls.flashIdx + 1;
      this.updateLessonBar(current, total + ls.quizItems.length);

      content.innerHTML = `
        <div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center">
          ${this.t('tap_to_reveal')} — Card ${current}/${ls.flashItems.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="APP.revealCard()">
          <div class="card-char">${item.front}</div>
          <div class="card-romaji">${item.back}</div>
          <div class="card-mnemonic">${item.hint || ''}</div>
          <div class="card-tap-hint">${this.t('tap_to_reveal')}</div>
        </div>
        <div id="flash-btns" style="display:none;width:100%;max-width:340px;display:none;gap:12px;flex-direction:column">
          <button class="btn-primary w-full" onclick="APP.nextFlash(true)">Got it! ✓</button>
          <button class="btn-ghost w-full" onclick="APP.nextFlash(false)">Study again 🔄</button>
        </div>
      `;
      ls.revealed = false;

    } else if (ls.phase === 'quiz') {
      const item = ls.quizItems[ls.quizIdx];
      const current = ls.flashItems.length + ls.quizIdx + 1;
      this.updateLessonBar(current, total + ls.quizItems.length);

      // Generate wrong answers from same dataset
      const allItems = ls.allItems;
      const wrongs = allItems.filter(i => i.id !== item.id)
        .sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [item, ...wrongs].sort(() => Math.random() - 0.5);

      content.innerHTML = `
        <div class="quiz-question">${this.t('your_answer')}</div>
        <div class="quiz-char">${item.front}</div>
        <div class="quiz-options" id="quiz-opts">
          ${options.map(o => `
            <button class="quiz-option" onclick="APP.answerQuiz('${o.id}','${item.id}',this)">
              ${o.back}
            </button>
          `).join('')}
        </div>
        <div id="mochi-react" style="height:60px"></div>
      `;

    } else if (ls.phase === 'result') {
      const accuracy = Math.round((ls.correct / ls.quizItems.length) * 100);
      const xpEarned = ls.correct * 10 + (accuracy === 100 ? 50 : 0);
      this.updateLessonBar(total + ls.quizItems.length, total + ls.quizItems.length);

      content.innerHTML = `
        <div class="lesson-result">
          <div class="result-icon">${accuracy >= 80 ? '🎉' : accuracy >= 50 ? '😊' : '😅'}</div>
          <div class="result-title">${this.t('lesson_complete')}</div>
          <div class="result-stats">
            <div class="result-stat">
              <div class="result-stat-num" style="color:var(--success)">${ls.correct}</div>
              <div class="result-stat-label">Correct</div>
            </div>
            <div class="result-stat">
              <div class="result-stat-num" style="color:var(--danger)">${ls.wrong}</div>
              <div class="result-stat-label">Wrong</div>
            </div>
            <div class="result-stat">
              <div class="result-stat-num" style="color:var(--gold)">${accuracy}%</div>
              <div class="result-stat-label">Accuracy</div>
            </div>
          </div>
          <div class="result-xp">+${xpEarned} ${this.t('xp_earned')} 🌟</div>
          <div style="margin-top:8px;font-size:28px">もちもち！🍡</div>
          ${ls.mistakes && ls.mistakes.length > 0 ? `
          <button class="btn-ghost" style="margin-top:8px;width:240px;border-color:rgba(239,68,68,0.4);color:#FCA5A5" onclick="APP.startReview()">
            🔄 Review ${ls.mistakes.length} Mistake${ls.mistakes.length > 1 ? 's' : ''}
          </button>` : ''}
          <button class="btn-primary" style="margin-top:8px;width:240px" onclick="APP.finishLesson(${xpEarned})">
            ${this.t('continue')} →
          </button>
        </div>
      `;

      this.addXP(xpEarned, content);

      // Save mistakes to localStorage for review banner
      if (ls.mistakes && ls.mistakes.length > 0) {
        const key = `rtj_mistakes_${ls.type}`;
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        ls.mistakes.forEach(m => { if (!existing.find(e => e.id === m.id)) existing.push(m); });
        localStorage.setItem(key, JSON.stringify(existing));
      }

      if (ls.questId) {
        if (!this.state.progress.questsDone.includes(ls.questId)) {
          this.state.progress.questsDone.push(ls.questId);
        }
      }
      this.checkBadges();
      this.save();
    }
  },

  updateLessonBar(current, total) {
    const bar = document.getElementById('lesson-progress-fill');
    const count = document.getElementById('lesson-count');
    if (bar) bar.style.width = Math.round((current / total) * 100) + '%';
    if (count) count.textContent = `${current}/${total}`;
  },

  revealCard() {
    const card = document.getElementById('flashcard');
    if (!card || this.state.lessonState.revealed) return;
    card.classList.add('revealed');
    this.state.lessonState.revealed = true;
    const btns = document.getElementById('flash-btns');
    if (btns) btns.style.display = 'flex';
  },

  nextFlash(knew) {
    const ls = this.state.lessonState;
    if (knew) this.addXP(5);
    ls.flashIdx++;
    if (ls.flashIdx >= ls.flashItems.length) {
      ls.phase = 'quiz';
    }
    this.renderLesson();
  },

  answerQuiz(answerId, correctId, btn) {
    const ls = this.state.lessonState;
    const opts = document.querySelectorAll('.quiz-option');
    opts.forEach(o => o.classList.add('disabled'));

    const isCorrect = answerId === correctId;
    btn.classList.add(isCorrect ? 'correct' : 'wrong');

    if (!isCorrect) {
      opts.forEach(o => {
        if (o.textContent.trim() === ls.quizItems[ls.quizIdx].back) o.classList.add('correct');
      });
    }

    const react = document.getElementById('mochi-react');
    if (react) {
      react.innerHTML = `<div class="mochi-reaction">${isCorrect ? '🍡✨' : '🍡💦'}</div>
        <div style="text-align:center;font-size:13px;color:rgba(255,255,255,0.6);margin-top:4px">
          ${isCorrect ? 'もちもち！ Correct!' : 'もち... Try again!'}
        </div>`;
    }

    if (isCorrect) {
      ls.correct++;
      this.addXP(10);
    } else {
      ls.wrong++;
      const wrongItem = ls.quizItems[ls.quizIdx];
      if (!ls.mistakes) ls.mistakes = [];
      if (!ls.mistakes.find(m => m.id === wrongItem.id)) ls.mistakes.push(wrongItem);
    }

    ls.quizIdx++;
    setTimeout(() => {
      if (ls.quizIdx >= ls.quizItems.length) {
        ls.phase = 'result';
      }
      this.renderLesson();
    }, 1200);
  },

  startReviewFor(type) {
    const items = JSON.parse(localStorage.getItem(`rtj_mistakes_${type}`) || '[]');
    if (items.length === 0) { this.showToast('No mistakes to review! 🎉'); return; }
    localStorage.removeItem(`rtj_mistakes_${type}`);
    this.state.lessonState = {
      type, questId: null,
      allItems: items, flashItems: items, quizItems: items,
      phase: 'flash', flashIdx: 0, quizIdx: 0,
      correct: 0, wrong: 0, revealed: false,
      isReview: true, mistakes: []
    };
    this.showToast(`📚 Reviewing ${items.length} mistake${items.length > 1 ? 's' : ''}!`);
    this.gotoScreen('lesson');
    this.renderLesson();
  },

  startReview() {
    const ls = this.state.lessonState;
    if (!ls || !ls.mistakes || ls.mistakes.length === 0) return;
    const items = ls.mistakes;
    this.state.lessonState = {
      type: ls.type, questId: null,
      allItems: items,
      flashItems: items,
      quizItems: items,
      phase: 'flash', flashIdx: 0, quizIdx: 0,
      correct: 0, wrong: 0, revealed: false,
      isReview: true, mistakes: []
    };
    this.gotoScreen('lesson');
    this.renderLesson();
  },

  startGradeUp(type) {
    let items = [];
    if (type === 'hiragana') items = RTJ_DATA.hiragana.map(h => ({ front:h.char, back:h.romaji, hint:h.mnemonic, type:'hiragana', id:h.romaji }));
    else if (type === 'katakana') items = RTJ_DATA.katakana.map(k => ({ front:k.char, back:k.romaji, hint:'', type:'katakana', id:k.romaji+'_k' }));
    else if (type === 'greetings') items = RTJ_DATA.greetings.map(g => ({ front:g.japanese, back:g.romaji, hint:g.english, type:'greetings', id:g.romaji }));
    else if (type === 'kanji_g1') items = RTJ_DATA.kanjiGrade1.map(k => ({ front:k.kanji, back:k.meaning, hint:'', type:'kanji', id:k.kanji }));

    const sample = items.sort(() => Math.random() - 0.5).slice(0, 12);
    this.state.lessonState = {
      type, questId: null,
      allItems: sample, flashItems: [], quizItems: sample,
      phase: 'quiz', flashIdx: 0, quizIdx: 0,
      correct: 0, wrong: 0, revealed: false,
      isGradeUp: true, mistakes: []
    };
    this.showToast('🎓 Grade Up Exam — No hints! Good luck!', 3000);
    this.gotoScreen('lesson');
    this.renderLesson();
  },

  finishLesson(xp) {
    const ls = this.state.lessonState;
    // Save progress
    if (ls.type === 'hiragana') {
      ls.allItems.forEach(i => {
        if (!this.state.progress.hiragana.includes(i.id))
          this.state.progress.hiragana.push(i.id);
      });
    } else if (ls.type === 'katakana') {
      ls.allItems.forEach(i => {
        if (!this.state.progress.katakana.includes(i.id))
          this.state.progress.katakana.push(i.id);
      });
    } else if (ls.type === 'kanji_g1') {
      ls.allItems.forEach(i => {
        if (!this.state.progress.kanji_g1.includes(i.id))
          this.state.progress.kanji_g1.push(i.id);
      });
    } else if (ls.type === 'greetings') {
      ls.allItems.forEach(i => {
        if (!this.state.progress.greetings.includes(i.id))
          this.state.progress.greetings.push(i.id);
      });
    }
    this.save();
    this.gotoScreen('home');
  },

  /* ==================== STORY ==================== */
  renderStoryMenu() {
    const container = document.getElementById('story-chapter-list');
    if (!container) return;

    const chapters = [
      { key:'chapter1', title:'The Port of Departure', jp:'出発の港', tier:'free', num:1 },
      { key:'chapter2', title:'Storm at Sea', jp:'嵐の海', tier:'free', num:2 },
      { key:'chapter3', title:'Katakana Island', jp:'カタカナ島', tier:'standard', num:3 },
      { key:'chapter4', title:'Landing in Tokyo', jp:'東京上陸', tier:'standard', num:4 },
      { key:'chapter5', title:'Mystery of the Ancient City', jp:'古都の謎', tier:'standard', num:5 },
      { key:'chapter6', title:'Trial of Mt. Fuji', jp:'富士山の試練', tier:'standard', num:6 },
      { key:'chapter7', title:'Festival Night', jp:'祭りの夜', tier:'standard', num:7 },
      { key:'chapter8', title:'The Library Sage', jp:'図書館の賢者', tier:'premium', num:8 },
      { key:'chapter9', title:'Final Battle', jp:'最終決戦', tier:'premium', num:9 },
      { key:'chapter10', title:'The Grand Scroll', jp:'大和の書', tier:'premium', num:10 }
    ];

    const plan = this.state.plan;
    const unlockedCh = this.state.progress.story_chapter;

    container.innerHTML = chapters.map((ch, idx) => {
      const tierLocked = (ch.tier === 'standard' && plan === 'free') ||
                         (ch.tier === 'premium' && plan !== 'premium');
      const progLocked = idx > unlockedCh && !tierLocked;
      const locked = tierLocked;
      const hasData = RTJ_DATA.story[ch.key];

      let status = '→';
      if (locked) status = '🔒';
      else if (idx < unlockedCh) status = '✓';
      else if (idx === unlockedCh) status = '▶';

      return `<div class="chapter-card ${locked ? 'locked' : ''}" onclick="${locked ? `APP.showUpgrade('${ch.tier}')` : hasData ? `APP.startStory('${ch.key}')` : `APP.showToast('Coming soon! 🚀')`}">
        <div class="chapter-num">${ch.num}</div>
        <div class="chapter-info">
          <div class="chapter-title">${ch.title}</div>
          <div class="chapter-subtitle">${ch.jp}${ch.tier !== 'free' ? ` · ${ch.tier === 'standard' ? '$15' : '$30'}` : ''}</div>
        </div>
        <div class="chapter-status">${status}</div>
      </div>`;
    }).join('');
  },

  startStory(chapterKey) {
    const chapter = RTJ_DATA.story[chapterKey];
    if (!chapter) { this.showToast('Coming soon! 🚀'); return; }

    this.state.lessonState = { storyChapter: chapterKey, sceneIdx: 0 };

    const screen = document.getElementById('screen-story');
    screen.innerHTML = `
      <div class="story-scene" id="story-scene" onclick="APP.nextStoryScene()">
        <div class="story-bg port" id="story-bg"></div>
        <div class="story-overlay"></div>
        <div class="story-chars-area" id="story-chars"></div>
        <div class="story-dialog">
          <div class="story-speaker" id="story-speaker"></div>
          <div class="story-text" id="story-text"></div>
          <div class="story-tap-hint">Tap to continue →</div>
        </div>
        <div style="position:absolute;top:16px;left:16px;z-index:10">
          <button style="background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.2);color:white;border-radius:8px;padding:8px 12px;cursor:pointer;font-size:13px" onclick="event.stopPropagation();APP.exitStory()">✕ Exit</button>
        </div>
      </div>
    `;

    screen.classList.add('active');
    this.renderStoryScene(chapterKey, 0);
  },

  renderStoryScene(chKey, idx) {
    const chapter = RTJ_DATA.story[chKey];
    if (!chapter) return;
    const scene = chapter.scenes[idx];
    if (!scene) {
      this.finishStory(chKey);
      return;
    }

    const bg = document.getElementById('story-bg');
    const chars = document.getElementById('story-chars');
    const speaker = document.getElementById('story-speaker');
    const text = document.getElementById('story-text');

    if (bg) {
      bg.className = `story-bg ${scene.bg || 'port'}`;
    }

    const charEmojis = {
      kai: '🧑', sakura: '👧', mochi: '🍡', taro: '🧔',
      captain: '👴', yuki: '👩', narrator: '📜'
    };

    if (chars && scene.speaker !== 'Narrator') {
      const activeChar = scene.portrait;
      const sceneChars = ['kai', 'sakura', 'mochi'];
      if (!sceneChars.includes(activeChar) && activeChar !== 'none') sceneChars.unshift(activeChar);
      chars.innerHTML = sceneChars.slice(0, 3).map(c => {
        const isDim = c !== activeChar;
        return `<div class="story-char ${isDim ? 'dim' : ''}">${charEmojis[c] || '❓'}</div>`;
      }).join('');
    } else if (chars) {
      chars.innerHTML = '';
    }

    if (speaker) speaker.textContent = scene.speaker;
    if (text) {
      const t = this.state.lang === 'es' ? (scene.text_es || scene.text_en) : scene.text_en;
      text.textContent = '';
      let i = 0;
      clearInterval(this._typeTimer);
      this._typeTimer = setInterval(() => {
        text.textContent += t[i++];
        if (i >= t.length) clearInterval(this._typeTimer);
      }, 28);
    }
  },

  nextStoryScene() {
    const ls = this.state.lessonState;
    if (!ls || !ls.storyChapter) return;
    clearInterval(this._typeTimer);
    const chapter = RTJ_DATA.story[ls.storyChapter];
    ls.sceneIdx++;
    if (ls.sceneIdx >= chapter.scenes.length) {
      this.finishStory(ls.storyChapter);
    } else {
      this.renderStoryScene(ls.storyChapter, ls.sceneIdx);
    }
  },

  finishStory(chKey) {
    const chapterKeys = Object.keys(RTJ_DATA.story);
    const idx = chapterKeys.indexOf(chKey);
    if (idx >= this.state.progress.story_chapter) {
      this.state.progress.story_chapter = idx + 1;
    }
    this.addXP(100);
    this.save();
    if (chKey === 'chapter1') this.earnBadge('story_ch1');
    this.exitStory();
    this.showToast('Chapter complete! +100 XP 🎉');
  },

  exitStory() {
    clearInterval(this._typeTimer);
    this.gotoScreen('story');
  },

  /* ==================== CULTURE ==================== */
  renderCulture(tab) {
    const content = document.getElementById('culture-content');
    if (!content) return;

    // Update tabs
    document.querySelectorAll('.culture-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === tab);
    });

    const plan = this.state.plan;

    if (tab === 'history') {
      content.innerHTML = RTJ_DATA.culture.history.map(h => `
        <div class="timeline-item">
          <div class="timeline-dot">${h.icon}</div>
          <div class="timeline-body">
            <div class="timeline-period">${h.period}</div>
            <div class="timeline-name">${h.name}</div>
            <div class="timeline-years">${h.years}</div>
            <div class="timeline-desc">${h.desc}</div>
          </div>
        </div>
      `).join('');

    } else if (tab === 'landmarks') {
      content.innerHTML = RTJ_DATA.culture.landmarks.map(l => {
        const locked = l.tier === 'paid' && plan === 'free';
        return `<div class="culture-card ${locked ? 'locked' : ''}" onclick="${locked ? "APP.showUpgrade('standard')" : `APP.openCultureCard('${l.romaji}')`}">
          <div class="culture-emoji">${l.emoji}</div>
          <div class="culture-info">
            <div class="culture-name">${l.name}</div>
            <div class="culture-name-sub">${l.romaji} · ${l.location}</div>
            <div class="culture-desc">${locked ? '🔒 Unlock with Standard plan' : l.desc}</div>
          </div>
        </div>`;
      }).join('');

    } else if (tab === 'music') {
      content.innerHTML = RTJ_DATA.culture.music.map((m, i) => {
        const locked = m.tier === 'paid' && plan === 'free';
        return `<div class="culture-card ${locked ? 'locked' : ''}" onclick="${locked ? "APP.showUpgrade('standard')" : ''}">
          <div class="culture-emoji">🎵</div>
          <div class="culture-info">
            <div class="culture-name">${m.title}</div>
            <div class="culture-name-sub">${m.artist} · ${m.year} · ${m.genre}</div>
            <div class="culture-desc">${locked ? '🔒 Unlock with Standard plan' : m.desc}</div>
          </div>
        </div>`;
      }).join('');

    } else if (tab === 'manga') {
      content.innerHTML = RTJ_DATA.culture.manga.map(m => {
        const locked = m.tier === 'paid' && plan === 'free';
        return `<div class="culture-card ${locked ? 'locked' : ''}" onclick="${locked ? "APP.showUpgrade('standard')" : ''}">
          <div class="culture-emoji">📖</div>
          <div class="culture-info">
            <div class="culture-name">${m.title} <span style="font-size:12px;color:rgba(255,255,255,0.5)">(${m.romaji})</span></div>
            <div class="culture-name-sub">${m.author} · ${m.year} · ${m.genre}</div>
            <div class="culture-desc">${locked ? '🔒 Unlock with Standard plan' : m.desc}</div>
          </div>
        </div>`;
      }).join('');

    } else if (tab === 'people') {
      content.innerHTML = RTJ_DATA.culture.celebrities.map(c => {
        const locked = c.tier === 'paid' && plan === 'free';
        return `<div class="culture-card ${locked ? 'locked' : ''}" onclick="${locked ? "APP.showUpgrade('standard')" : ''}">
          <div class="culture-emoji">⭐</div>
          <div class="culture-info">
            <div class="culture-name">${c.name}</div>
            <div class="culture-name-sub">${c.romaji} · ${c.field}</div>
            <div class="culture-desc">${locked ? '🔒 Unlock with Standard plan' : c.desc}</div>
          </div>
        </div>`;
      }).join('');
    }

    // Track reading
    if (!this.state.progress.culturesRead.includes(tab)) {
      this.state.progress.culturesRead.push(tab);
      this.addXP(10);
    }
    if (this.state.progress.culturesRead.length >= 3) this.earnBadge('culture_explorer');
    this.save();
  },

  openCultureCard(name) {
    this.addXP(5);
    this.save();
  },

  /* ==================== PROFILE ==================== */
  renderProfile() {
    const nameEl = document.getElementById('profile-name');
    const levelEl = document.getElementById('profile-level');
    const titleEl = document.getElementById('profile-title');
    if (nameEl) nameEl.textContent = this.state.playerName;
    if (levelEl) levelEl.textContent = `Level ${this.state.level}`;
    if (titleEl) titleEl.textContent = this.getLevelTitle(this.state.level);

    const statsEl = document.getElementById('profile-stats');
    if (statsEl) {
      statsEl.innerHTML = `
        <div class="stat-box"><div class="stat-num">${this.state.xp}</div><div class="stat-label">Total XP</div></div>
        <div class="stat-box"><div class="stat-num">${this.state.streak}</div><div class="stat-label">Day Streak</div></div>
        <div class="stat-box"><div class="stat-num">${this.state.mochiCoins}</div><div class="stat-label">Mochi 🍡</div></div>
        <div class="stat-box"><div class="stat-num">${this.state.progress.hiragana.length}</div><div class="stat-label">Hiragana</div></div>
        <div class="stat-box"><div class="stat-num">${this.state.progress.katakana.length}</div><div class="stat-label">Katakana</div></div>
        <div class="stat-box"><div class="stat-num">${this.state.progress.kanji_g1.length}</div><div class="stat-label">Kanji</div></div>
      `;
    }

    // Progress rings
    const ringsEl = document.getElementById('profile-rings');
    if (ringsEl) {
      const rings = [
        { label:'Hiragana', pct: Math.round((this.state.progress.hiragana.length / RTJ_DATA.hiragana.length) * 100), color:'#EF4444' },
        { label:'Katakana', pct: Math.round((this.state.progress.katakana.length / (RTJ_DATA.katakana.slice(0,25).length)) * 100), color:'#3B82F6' },
        { label:'Greetings', pct: Math.round((this.state.progress.greetings.length / RTJ_DATA.greetings.length) * 100), color:'#10B981' },
        { label:'Kanji G1', pct: Math.round((this.state.progress.kanji_g1.length / RTJ_DATA.kanjiGrade1.length) * 100), color:'#F59E0B' },
        { label:'Story', pct: Math.round((this.state.progress.story_chapter / 9) * 100), color:'#8B5CF6' },
        { label:'Badges', pct: Math.round((this.state.badges.length / RTJ_DATA.badges.length) * 100), color:'#EC4899' },
      ];
      const r = 28, c = 36;
      const circ = 2 * Math.PI * r;
      ringsEl.innerHTML = rings.map(ring => {
        const p = Math.min(ring.pct, 100);
        const offset = circ - (p / 100) * circ;
        return `<div class="ring-item">
          <svg class="ring-svg" viewBox="0 0 72 72">
            <circle class="ring-track" cx="${c}" cy="${c}" r="${r}"/>
            <circle class="ring-fill" cx="${c}" cy="${c}" r="${r}" stroke="${ring.color}"
              stroke-dasharray="${circ}" stroke-dashoffset="${offset}"/>
            <text x="${c}" y="${c+1}" text-anchor="middle" dominant-baseline="middle"
              font-size="13" font-weight="800" fill="white">${p}%</text>
          </svg>
          <div class="ring-label">${ring.label}</div>
        </div>`;
      }).join('');
    }

    const badgesEl = document.getElementById('profile-badges');
    if (badgesEl) {
      badgesEl.innerHTML = RTJ_DATA.badges.map(b => {
        const earned = this.state.badges.includes(b.id);
        return `<div class="badge-item ${earned ? 'earned' : ''}">
          <div class="badge-icon">${earned ? b.icon : '🔘'}</div>
          <div class="badge-name">${b.nameJP}</div>
        </div>`;
      }).join('');
    }
  },

  /* ==================== BADGES ==================== */
  earnBadge(id) {
    if (this.state.badges.includes(id)) return;
    this.state.badges.push(id);
    const badge = RTJ_DATA.badges.find(b => b.id === id);
    if (badge) this.showToast(`Badge unlocked: ${badge.icon} ${badge.name}!`, 3000);
    this.addXP(50);
    this.save();
  },

  checkBadges() {
    const p = this.state.progress;
    if (p.hiragana.length >= RTJ_DATA.hiragana.length) this.earnBadge('hiragana_master');
    if (p.katakana.length >= RTJ_DATA.katakana.length) this.earnBadge('katakana_master');
    if (p.kanji_g1.length >= RTJ_DATA.kanjiGrade1.length) this.earnBadge('kanji_grade1');
    if (p.culturesRead.length >= 10) this.earnBadge('culture_explorer');
    if ((p.hiragana.length + p.katakana.length + p.kanji_g1.length + p.greetings.length) > 0)
      this.earnBadge('first_lesson');
    if (this.state.streak >= 7) this.earnBadge('streak_7');
    if (this.state.streak >= 30) this.earnBadge('streak_30');
  },

  /* ==================== UPGRADE ==================== */
  showUpgrade(tier) {
    const modal = document.getElementById('upgrade-modal');
    if (modal) {
      modal.classList.add('open');
    }
  },

  closeUpgrade() {
    const modal = document.getElementById('upgrade-modal');
    if (modal) modal.classList.remove('open');
  },

  selectPlan(plan) {
    if (plan === 'free') {
      this.state.plan = 'free';
      this.showToast('You are on the Free plan.');
      if (typeof gtag !== 'undefined') gtag('event', 'free_signup', { event_category: 'registration' });
    } else if (plan === 'standard') {
      this.state.plan = 'standard';
      this.showToast('Standard plan activated! +100 XP 🎉');
      this.addXP(100);
      this.spawnSakura();
      if (typeof gtag !== 'undefined') gtag('event', 'upgrade', { event_category: 'purchase', event_label: 'standard' });
    } else if (plan === 'premium') {
      this.state.plan = 'premium';
      this.showToast('Premium plan activated! +200 XP 🎉');
      this.addXP(200);
      this.spawnSakura();
      if (typeof gtag !== 'undefined') gtag('event', 'upgrade', { event_category: 'purchase', event_label: 'premium' });
    }
    this.save();
    this.closeUpgrade();
    this.renderLearn();
  },

  /* ==================== STREAK ==================== */
  checkStreak() {
    const today = new Date().toDateString();
    const lastDate = localStorage.getItem('rtj_lastDate');
    if (lastDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (lastDate === yesterday.toDateString()) {
      this.state.streak++;
    } else if (lastDate !== today) {
      this.state.streak = 1;
    }

    localStorage.setItem('rtj_lastDate', today);
    this.save();
    this.checkBadges();
  },

  /* ==================== INIT ==================== */
  init() {
    this.load();
    this.checkStreak();

    // Generate splash stars
    const starsEl = document.getElementById('splash-stars');
    if (starsEl) {
      for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = (1 + Math.random() * 2) + 's';
        starsEl.appendChild(star);
      }
    }

    // Decide starting screen
    const isNew = !localStorage.getItem('rtj_state');
    if (isNew) {
      this.gotoScreen('splash');
    } else {
      this.gotoScreen('home');
    }

    // Nav
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        this.gotoScreen(btn.dataset.screen);
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => APP.init());
