/* ============================================================
   GOJUON WIDGET — 50音表フローティングボタン
   どのページにも <script src="gojuon-widget.js"></script> で追加可能
   ============================================================ */
(function() {
  const ROWS = [
    { romaji: ['a','i','u','e','o'],       kana: ['あ','い','う','え','お'] },
    { romaji: ['ka','ki','ku','ke','ko'],   kana: ['か','き','く','け','こ'] },
    { romaji: ['sa','shi','su','se','so'],  kana: ['さ','し','す','せ','そ'] },
    { romaji: ['ta','chi','tsu','te','to'], kana: ['た','ち','つ','て','と'] },
    { romaji: ['na','ni','nu','ne','no'],   kana: ['な','に','ぬ','ね','の'] },
    { romaji: ['ha','hi','fu','he','ho'],   kana: ['は','ひ','ふ','へ','ほ'] },
    { romaji: ['ma','mi','mu','me','mo'],   kana: ['ま','み','む','め','も'] },
    { romaji: ['ya','—','yu','—','yo'],     kana: ['や','　','ゆ','　','よ'] },
    { romaji: ['ra','ri','ru','re','ro'],   kana: ['ら','り','る','れ','ろ'] },
    { romaji: ['wa','—','—','—','wo'],      kana: ['わ','　','　','　','を'] },
    { romaji: ['n','—','—','—','—'],        kana: ['ん','　','　','　','　'] },
  ];

  const COL_HEADERS = ['A','I','U','E','O'];

  // ── CSS ──
  const style = document.createElement('style');
  style.textContent = `
    #rtj-gojuon-btn {
      position: fixed; bottom: 80px; right: 16px; z-index: 9990;
      width: 52px; height: 52px; border-radius: 50%;
      background: linear-gradient(135deg, #ffd700, #ff6b2b);
      border: none; cursor: pointer; font-size: 1.4rem;
      box-shadow: 0 4px 20px rgba(255,215,0,0.4);
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex; align-items: center; justify-content: center;
      color: #000; font-weight: 900;
    }
    #rtj-gojuon-btn:hover { transform: scale(1.12); box-shadow: 0 6px 28px rgba(255,215,0,0.6); }

    #rtj-gojuon-overlay {
      display: none; position: fixed; inset: 0; z-index: 9991;
      background: rgba(0,0,0,0.75); backdrop-filter: blur(6px);
      align-items: center; justify-content: center;
    }
    #rtj-gojuon-overlay.open { display: flex; }

    #rtj-gojuon-modal {
      background: #0d1117; border: 1px solid rgba(255,215,0,0.25);
      border-radius: 20px; padding: 24px 20px 20px;
      width: min(96vw, 480px); max-height: 90vh; overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(255,215,0,0.07);
      animation: gojuonIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }
    @keyframes gojuonIn { from { transform: scale(0.85); opacity: 0; } to { transform: scale(1); opacity: 1; } }

    #rtj-gojuon-modal h2 {
      font-family: 'Bangers', cursive, sans-serif;
      font-size: 1.6rem; letter-spacing: 3px;
      background: linear-gradient(90deg,#ffd700,#ff6b2b);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      text-align: center; margin-bottom: 4px;
    }
    #rtj-gojuon-modal .gj-sub {
      text-align: center; font-size: 0.78rem; color: #7a8099;
      margin-bottom: 16px;
    }

    .gj-table { width: 100%; border-collapse: collapse; }
    .gj-table th {
      font-size: 0.62rem; font-weight: 900; letter-spacing: 1px;
      color: #ffd700; padding: 4px 2px; text-align: center;
      border-bottom: 1px solid rgba(255,215,0,0.15);
    }
    .gj-cell {
      text-align: center; padding: 5px 3px; cursor: pointer;
      border-radius: 8px; transition: background 0.15s, transform 0.1s;
      user-select: none;
    }
    .gj-cell:hover { background: rgba(255,215,0,0.12); transform: scale(1.08); }
    .gj-cell:active { transform: scale(0.95); }
    .gj-cell.empty { cursor: default; opacity: 0; }
    .gj-kana { font-size: 1.25rem; line-height: 1; color: #ffffff; display: block; }
    .gj-romaji { font-size: 0.6rem; color: #ffd700; font-weight: 900; letter-spacing: 0.5px; margin-top: 2px; display: block; }

    .gj-close-btn {
      display: block; margin: 14px auto 0;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      color: #fff; padding: 8px 24px; border-radius: 20px;
      font-size: 0.82rem; font-weight: 800; cursor: pointer; transition: all 0.2s;
    }
    .gj-close-btn:hover { background: rgba(255,255,255,0.12); }

    .gj-voice-badge {
      position: fixed; bottom: 140px; right: 16px; z-index: 9995;
      background: rgba(13,17,23,0.95); border: 1px solid rgba(255,215,0,0.3);
      border-radius: 20px; padding: 6px 14px;
      font-size: 0.75rem; font-weight: 800; color: #ffd700;
      opacity: 0; transform: translateY(8px);
      transition: all 0.3s; pointer-events: none;
    }
    .gj-voice-badge.show { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(style);

  // ── HTML ──
  const overlay = document.createElement('div');
  overlay.id = 'rtj-gojuon-overlay';

  const modal = document.createElement('div');
  modal.id = 'rtj-gojuon-modal';

  let tableHtml = `<h2>ひらがな 50音表</h2>
  <p class="gj-sub">クリックで発音 / Click to hear pronunciation</p>
  <table class="gj-table"><thead><tr><th></th>`;
  COL_HEADERS.forEach(h => { tableHtml += `<th>${h}</th>`; });
  tableHtml += '</tr></thead><tbody>';

  ROWS.forEach((row, ri) => {
    tableHtml += '<tr>';
    // Row label (first kana of row)
    const rowLabel = ['あ','か','さ','た','な','は','ま','や','ら','わ','ん'][ri];
    tableHtml += `<th style="color:#7a8099;font-size:0.65rem">${rowLabel}行</th>`;
    for (let ci = 0; ci < 5; ci++) {
      const kana = row.kana[ci].trim();
      const rom = row.romaji[ci];
      if (!kana || rom === '—') {
        tableHtml += `<td class="gj-cell empty"><span class="gj-kana">　</span></td>`;
      } else {
        tableHtml += `<td class="gj-cell" onclick="rtjPlayKana('${kana}','${rom}')">
          <span class="gj-kana">${kana}</span>
          <span class="gj-romaji">${rom}</span>
        </td>`;
      }
    }
    tableHtml += '</tr>';
  });
  tableHtml += '</tbody></table>';
  tableHtml += '<button class="gj-close-btn" onclick="rtjCloseGojuon()">✕ 閉じる / Close</button>';

  modal.innerHTML = tableHtml;
  overlay.appendChild(modal);

  const fab = document.createElement('button');
  fab.id = 'rtj-gojuon-btn';
  fab.title = '50音表を開く';
  fab.innerHTML = 'あ';
  fab.onclick = () => overlay.classList.add('open');

  overlay.onclick = (e) => { if (e.target === overlay) overlay.classList.remove('open'); };

  const badge = document.createElement('div');
  badge.className = 'gj-voice-badge';
  badge.id = 'rtj-voice-badge';

  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(fab);
    document.body.appendChild(overlay);
    document.body.appendChild(badge);
  });

  if (document.readyState !== 'loading') {
    document.body.appendChild(fab);
    document.body.appendChild(overlay);
    document.body.appendChild(badge);
  }

  // ── TTS helpers ──
  let cachedVoices = [];
  let badgeTimer = null;

  function loadVoices() {
    const v = speechSynthesis.getVoices().filter(v => v.lang.startsWith('ja'));
    if (v.length) cachedVoices = v;
  }
  loadVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  function getVoice() {
    loadVoices();
    if (!cachedVoices.length) return null;
    // Try to pick male vs female randomly
    const female = cachedVoices.filter(v => /kyoko|female|woman|haruka|mizuki/i.test(v.name));
    const male   = cachedVoices.filter(v => /otoya|male|man|ichiro|takumi/i.test(v.name));
    const pool = Math.random() < 0.5
      ? (female.length ? female : cachedVoices)
      : (male.length   ? male   : cachedVoices);
    return pool[Math.floor(Math.random() * pool.length)];
  }

  let lastUtterance = null; // module-level reference — Chrome silently drops utterances that get GC'd

  function showDebugBadge(msg, isError) {
    const badge = document.getElementById('rtj-voice-badge');
    if (!badge) return;
    badge.textContent = msg;
    badge.style.color = isError ? '#ff3a5c' : '#ffd700';
    badge.style.borderColor = isError ? 'rgba(255,58,92,0.5)' : 'rgba(255,215,0,0.3)';
    badge.classList.add('show');
    clearTimeout(badgeTimer);
    badgeTimer = setTimeout(() => badge.classList.remove('show'), 4000);
  }

  window.rtjPlayKana = function(kana, romaji) {
    if (!('speechSynthesis' in window)) {
      showDebugBadge('❌ No speechSynthesis API', true);
      return;
    }
    speechSynthesis.cancel();
    // Chrome bug: speak() called in the same tick as cancel() is often silently dropped.
    // A short delay lets the cancel actually flush before we queue the next utterance.
    setTimeout(() => {
      const utt = new SpeechSynthesisUtterance(kana);
      utt.lang = 'ja-JP';
      utt.rate = 0.85;
      utt.pitch = 1.0;
      const v = getVoice();
      const allVoices = speechSynthesis.getVoices();
      console.log('[RTJ TTS] total voices:', allVoices.length, '| ja voices:', cachedVoices.length, '| picked:', v ? v.name : '(browser default)');

      if (v) utt.voice = v;

      utt.onstart = () => {
        console.log('[RTJ TTS] onstart fired — audio should be playing now');
        showDebugBadge(v ? `🔊 ${v.name}` : '🔊 Playing (default voice)', false);
      };
      utt.onerror = (e) => {
        console.error('[RTJ TTS] onerror:', e.error);
        showDebugBadge(`❌ TTS error: ${e.error}`, true);
      };
      utt.onend = () => console.log('[RTJ TTS] onend fired');

      if (allVoices.length === 0) {
        showDebugBadge('❌ Browser has 0 voices loaded', true);
      } else if (cachedVoices.length === 0) {
        showDebugBadge(`⚠️ No 日本語 voice found (${allVoices.length} total) — trying default`, true);
      }

      lastUtterance = utt;
      speechSynthesis.speak(utt);
      // Some Chrome builds need a kick — speak() can silently no-op without it.
      if (speechSynthesis.paused) speechSynthesis.resume();

      // If neither onstart nor onerror fires within 1s, speak() was silently swallowed.
      setTimeout(() => {
        if (!speechSynthesis.speaking && !speechSynthesis.pending) {
          console.warn('[RTJ TTS] speak() produced no audio and no error — likely a stuck speechSynthesis queue. Try reloading the tab.');
        }
      }, 1000);
    }, 60);
  };

  window.rtjCloseGojuon = function() {
    document.getElementById('rtj-gojuon-overlay').classList.remove('open');
  };

  // Allow other pages to call rtjPlayText(text) for general TTS with random voice
  window.rtjPlayText = function(text, lang) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    setTimeout(() => {
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = lang || 'ja-JP';
      utt.rate = 0.9;
      const v = getVoice();
      if (v) utt.voice = v;
      lastUtterance = utt;
      speechSynthesis.speak(utt);
      if (speechSynthesis.paused) speechSynthesis.resume();
    }, 60);
  };
})();
