/**
 * Road to Japan — i18n Translation System
 * Languages: EN (English), ES (Español), FR (Français), DE (Deutsch), KO (한국어)
 * Scope: UI text only. Japanese learning content stays in English (shared base language).
 *
 * Usage:
 *   Add data-i18n="key" to any HTML element.
 *   Call RTJLang.apply() after DOM load to replace text.
 *   Call RTJLang.set('es') to switch language.
 */

const RTJLang = (() => {

  // ── TRANSLATION STRINGS ──────────────────────────────────────────────────
  const T = {

    // ── ENGLISH ──
    en: {
      // Meta
      lang_name: 'English',
      lang_flag: '🇺🇸',

      // Nav / Global
      nav_home:       'Home',
      nav_lessons:    'Lessons',
      nav_profile:    'Profile',
      nav_upgrade:    'Upgrade',
      nav_back:       '← Back',
      nav_map:        'Japan Map',
      btn_start:      'Start',
      btn_continue:   'Continue',
      btn_next:       'Next →',
      btn_prev:       '← Back',
      btn_listen:     '🔊 Listen',
      btn_learn:      '+ Learn',
      btn_learned:    '✅ Learned!',
      btn_try_again:  '🔄 Try Again',
      btn_see_results:'See Results 🏆',
      btn_generate:   '✨ Generate!',
      btn_download:   '⬇ Download',
      btn_share:      '📤 Share',

      // Language Selector (pre-registration screen)
      lang_select_title:  'Choose Your Language',
      lang_select_sub:    'Select the language you\'d like to learn Japanese in. You can change this before subscribing.',
      lang_select_note:   '🔒 After subscribing, your language will be locked to your chosen option.',
      lang_select_btn:    'Start Learning →',
      lang_locked_msg:    'Language is locked to your subscription plan.',

      // Home page
      home_hero_title:    'ROAD TO JAPAN',
      home_hero_sub:      'Learn Japanese the fun way — anime, games, and real conversations. Start your adventure today! 🌸',
      home_start_free:    'Start for Free',
      home_go_premium:    'Go Premium ⭐',
      home_modules_title: 'YOUR LESSONS',
      home_journey_title: '12-MONTH JOURNEY',
      home_journey_sub:   'Your full roadmap to Japanese — Month 2 / 12 in progress! 🔥',
      home_journey_view:  'View Map →',

      // Module names
      mod_hiragana:   'Hiragana',
      mod_katakana:   'Katakana',
      mod_kanji:      'Kanji',
      mod_vocab:      'Vocabulary',
      mod_grammar:    'Grammar',
      mod_phrases:    'Phrases',
      mod_stories:    'Stories',
      mod_map:        'Japan Map',
      mod_culture:    'Culture Hub',
      mod_progress:   '12-Month Journey',

      // Progress page
      prog_title:       '12-MONTH JAPANESE JOURNEY',
      prog_sub:         'From zero to conversational — your complete roadmap 🗾',
      prog_completed:   'Completed',
      prog_current:     'In Progress',
      prog_months_left: 'Months Left',
      prog_total_xp:    'Total XP',
      prog_locked:      '🔒 Locked',
      prog_coming_soon: 'Coming Soon',
      prog_unlock_msg:  'Complete previous months to unlock',

      // Profile page
      prof_title:       'MY PROFILE',
      prof_streak:      'Day Streak 🔥',
      prof_best_streak: 'Best Streak',
      prof_total_days:  'Days Studied',
      prof_account:     'Account Info',
      prof_name:        'Name',
      prof_email:       'Email',
      prof_plan:        'Plan',
      prof_plan_free:   'Free Plan',
      prof_plan_premium:'Premium',
      prof_plan_annual: 'Annual Premium',
      prof_sub_start:   'Subscription Start',
      prof_sub_renew:   'Next Renewal',
      prof_days_left:   'days remaining',
      prof_edit_btn:    'Edit Profile',
      prof_skills:      'Language Skills',
      prof_achievements:'Achievements',
      prof_settings:    'Settings',
      prof_notifications:'Notifications',
      prof_sound:       'Sound Effects',
      prof_danger:      'Danger Zone',
      prof_cancel_sub:  'Cancel Subscription',
      prof_sign_out:    'Sign Out',
      prof_delete:      'Delete Account',
      prof_weekly_xp:   'Weekly XP',

      // Payment page
      pay_title:        'CHOOSE YOUR PLAN',
      pay_sub:          'Unlock your full Japanese learning journey',
      pay_free_name:    'Free Plan',
      pay_free_desc:    'Get started with the basics',
      pay_month_name:   'Premium Monthly',
      pay_month_desc:   'Full access, cancel anytime',
      pay_annual_name:  'Annual Premium',
      pay_annual_desc:  'Best value — save 34%!',
      pay_per_month:    '/ month',
      pay_per_year:     '/ year',
      pay_billed:       'Billed annually',
      pay_save:         'SAVE 34%',
      pay_popular:      'MOST POPULAR',
      pay_order_title:  'Order Summary',
      pay_total:        'Total',
      pay_free_includes:'Free plan includes:',
      pay_prem_includes:'Premium includes everything in Free, plus:',
      pay_btn_free:     '🌱 Continue with Free Plan',
      pay_btn_premium:  '🔒 Start Premium',
      pay_btn_annual:   '🔒 Start Annual Plan',
      pay_secure:       '🔒 Secure checkout powered by Square',
      pay_guarantee:    '30-day money-back guarantee',
      pay_cancel_any:   'Cancel anytime',

      // Grammar page
      gram_title:       'GRAMMAR PARTICLES',
      gram_sub:         'Master the building blocks of Japanese sentences',
      gram_rules:       'Rules',
      gram_examples:    'Example Sentences',
      gram_quiz_title:  'Quick Quiz',
      gram_quiz_correct:'Correct! 🎉',
      gram_quiz_wrong:  'Not quite — try again!',
      gram_next_lesson: 'Next Lesson →',
      gram_prev_lesson: '← Previous',
      gram_xp_gained:   'XP Gained',

      // Phrases page
      phrases_title:    'SPEAK JAPANESE TODAY!',
      phrases_sub:      'Learn the most important everyday phrases',
      phrases_browse:   '📋 Browse',
      phrases_flash:    '🃏 Flashcards',
      phrases_dialogue: '🎭 Dialogue',
      phrases_learned:  'Learned',
      phrases_total:    'Total Phrases',
      phrases_must:     '⭐ Must Know',
      phrases_common:   '💡 Common',
      phrases_usage:    'Usage tip',
      flash_tap:        '👆 Tap to flip',
      flash_hint_front: 'TAP TO REVEAL',
      flash_hint_back:  'MEANING',
      flash_hard:       'Hard',
      flash_ok:         'Got It',
      flash_easy:       'Easy!',
      flash_done_title: 'ALL DONE!',
      flash_done_sub:   'Great work! Keep it up! 🌸',
      flash_again:      '🔄 Go Again',
      dlg_practice:     '🧠 Practice — Fill in the correct phrase!',

      // Culture page
      culture_title:    'DISCOVER JAPAN\'S SOUL',
      culture_sub:      'Dive into anime, ramen, sakura, samurai, and everything that makes Japan fascinating!',
      culture_quiz:     'CULTURE QUIZ',
      culture_quiz_sub: 'Test what you learned! Win XP! 🏆',
      culture_start_q:  'Start Quiz →',
      culture_back:     'Back to Culture Hub 🎌',

      // Japan Map page
      map_title:        'JAPAN TOURIST MAP',
      map_sub:          'Click a location to explore! 25 famous destinations 🗾',
      map_visited:      'Visited',
      map_total_spots:  'Total Spots',
      map_visit_btn:    '✅ Mark as Visited',
      map_vocab_title:  'Key Vocabulary',
      map_fun_fact:     '💡 Fun Fact',

      // Certificate page
      cert_title:       'YOU DID IT!',
      cert_sub:         'One year. One language. One dream. おめでとうございます！',
      cert_personalize: '📝 PERSONALIZE YOUR CERTIFICATE',
      cert_name_ph:     'Enter your name here...',
      cert_generate:    '✨ Generate!',
      cert_days:        'Days Studied',
      cert_months:      'Months Complete',
      cert_words:       'Words Learned',
      cert_total_xp:    'Total XP',
      cert_achieve:     'ACHIEVEMENTS UNLOCKED',
      cert_share_title: 'SHARE YOUR SUCCESS! 🌟',
      cert_share_sub:   'Let the world know you completed your Japanese learning journey!',
      cert_download:    '⬇ Download Certificate',
      cert_post_x:      '𝕏 Post on X',
      cert_copy:        '📋 Copy Message',
      cert_next_title:  'WHAT\'S NEXT? 🚀',

      // General UI
      loading:          'Loading...',
      correct:          'Correct! 🎉',
      wrong:            'Not quite!',
      score:            'Score',
      xp_today:         'XP Today',
      well_done:        'Well Done!',
      keep_going:       'Keep Going!',
      days:             'days',
      months:           'months',
      free:             'Free',
      premium:          'Premium',
      annual:           'Annual',
    },

    // ── SPANISH ──
    es: {
      lang_name: 'Español',
      lang_flag: '🇪🇸',

      nav_home:       'Inicio',
      nav_lessons:    'Lecciones',
      nav_profile:    'Perfil',
      nav_upgrade:    'Mejorar Plan',
      nav_back:       '← Volver',
      nav_map:        'Mapa de Japón',
      btn_start:      'Empezar',
      btn_continue:   'Continuar',
      btn_next:       'Siguiente →',
      btn_prev:       '← Anterior',
      btn_listen:     '🔊 Escuchar',
      btn_learn:      '+ Aprender',
      btn_learned:    '✅ ¡Aprendido!',
      btn_try_again:  '🔄 Intentar de nuevo',
      btn_see_results:'Ver Resultados 🏆',
      btn_generate:   '✨ ¡Generar!',
      btn_download:   '⬇ Descargar',
      btn_share:      '📤 Compartir',

      lang_select_title:  'Elige Tu Idioma',
      lang_select_sub:    'Selecciona el idioma en el que deseas aprender japonés. Puedes cambiarlo antes de suscribirte.',
      lang_select_note:   '🔒 Después de suscribirte, tu idioma quedará bloqueado según tu plan.',
      lang_select_btn:    'Empezar a Aprender →',
      lang_locked_msg:    'El idioma está bloqueado según tu plan de suscripción.',

      home_hero_title:    'CAMINO A JAPÓN',
      home_hero_sub:      '¡Aprende japonés de manera divertida — anime, juegos y conversaciones reales. Empieza tu aventura hoy! 🌸',
      home_start_free:    'Empezar Gratis',
      home_go_premium:    'Ir a Premium ⭐',
      home_modules_title: 'TUS LECCIONES',
      home_journey_title: 'VIAJE DE 12 MESES',
      home_journey_sub:   'Tu hoja de ruta completa al japonés — ¡Mes 2 / 12 en progreso! 🔥',
      home_journey_view:  'Ver Mapa →',

      mod_hiragana:   'Hiragana',
      mod_katakana:   'Katakana',
      mod_kanji:      'Kanji',
      mod_vocab:      'Vocabulario',
      mod_grammar:    'Gramática',
      mod_phrases:    'Frases',
      mod_stories:    'Historias',
      mod_map:        'Mapa de Japón',
      mod_culture:    'Centro Cultural',
      mod_progress:   'Viaje de 12 Meses',

      prog_title:       'VIAJE DE 12 MESES AL JAPONÉS',
      prog_sub:         'De cero a conversacional — tu hoja de ruta completa 🗾',
      prog_completed:   'Completado',
      prog_current:     'En Progreso',
      prog_months_left: 'Meses Restantes',
      prog_total_xp:    'XP Total',
      prog_locked:      '🔒 Bloqueado',
      prog_coming_soon: 'Próximamente',
      prog_unlock_msg:  'Completa los meses anteriores para desbloquear',

      prof_title:       'MI PERFIL',
      prof_streak:      'Días Seguidos 🔥',
      prof_best_streak: 'Mejor Racha',
      prof_total_days:  'Días Estudiados',
      prof_account:     'Info de Cuenta',
      prof_name:        'Nombre',
      prof_email:       'Correo',
      prof_plan:        'Plan',
      prof_plan_free:   'Plan Gratuito',
      prof_plan_premium:'Premium',
      prof_plan_annual: 'Premium Anual',
      prof_sub_start:   'Inicio de Suscripción',
      prof_sub_renew:   'Próxima Renovación',
      prof_days_left:   'días restantes',
      prof_edit_btn:    'Editar Perfil',
      prof_skills:      'Habilidades en Idioma',
      prof_achievements:'Logros',
      prof_settings:    'Configuración',
      prof_notifications:'Notificaciones',
      prof_sound:       'Efectos de Sonido',
      prof_danger:      'Zona Peligrosa',
      prof_cancel_sub:  'Cancelar Suscripción',
      prof_sign_out:    'Cerrar Sesión',
      prof_delete:      'Eliminar Cuenta',
      prof_weekly_xp:   'XP Semanal',

      pay_title:        'ELIGE TU PLAN',
      pay_sub:          'Desbloquea tu camino completo al aprendizaje del japonés',
      pay_free_name:    'Plan Gratuito',
      pay_free_desc:    'Empieza con lo básico',
      pay_month_name:   'Premium Mensual',
      pay_month_desc:   'Acceso completo, cancela cuando quieras',
      pay_annual_name:  'Premium Anual',
      pay_annual_desc:  '¡Mejor valor — ahorra 34%!',
      pay_per_month:    '/ mes',
      pay_per_year:     '/ año',
      pay_billed:       'Facturado anualmente',
      pay_save:         'AHORRA 34%',
      pay_popular:      'MÁS POPULAR',
      pay_order_title:  'Resumen del Pedido',
      pay_total:        'Total',
      pay_free_includes:'El plan gratuito incluye:',
      pay_prem_includes:'Premium incluye todo lo del plan gratuito, más:',
      pay_btn_free:     '🌱 Continuar con Plan Gratuito',
      pay_btn_premium:  '🔒 Iniciar Premium',
      pay_btn_annual:   '🔒 Iniciar Plan Anual',
      pay_secure:       '🔒 Pago seguro con Square',
      pay_guarantee:    'Garantía de devolución de 30 días',
      pay_cancel_any:   'Cancela cuando quieras',

      gram_title:       'PARTÍCULAS GRAMATICALES',
      gram_sub:         'Domina los bloques fundamentales de las oraciones japonesas',
      gram_rules:       'Reglas',
      gram_examples:    'Oraciones de Ejemplo',
      gram_quiz_title:  'Prueba Rápida',
      gram_quiz_correct:'¡Correcto! 🎉',
      gram_quiz_wrong:  '¡Casi! — ¡Inténtalo de nuevo!',
      gram_next_lesson: 'Siguiente Lección →',
      gram_prev_lesson: '← Anterior',
      gram_xp_gained:   'XP Ganados',

      phrases_title:    '¡HABLA JAPONÉS HOY!',
      phrases_sub:      'Aprende las frases cotidianas más importantes',
      phrases_browse:   '📋 Explorar',
      phrases_flash:    '🃏 Flashcards',
      phrases_dialogue: '🎭 Diálogo',
      phrases_learned:  'Aprendidas',
      phrases_total:    'Total de Frases',
      phrases_must:     '⭐ Esencial',
      phrases_common:   '💡 Común',
      phrases_usage:    'Consejo de uso',
      flash_tap:        '👆 Toca para voltear',
      flash_hint_front: 'TOCA PARA REVELAR',
      flash_hint_back:  'SIGNIFICADO',
      flash_hard:       'Difícil',
      flash_ok:         'Entendido',
      flash_easy:       '¡Fácil!',
      flash_done_title: '¡LISTO!',
      flash_done_sub:   '¡Buen trabajo! ¡Sigue así! 🌸',
      flash_again:      '🔄 Repetir',
      dlg_practice:     '🧠 Práctica — ¡Elige la frase correcta!',

      culture_title:    'DESCUBRE EL ALMA DE JAPÓN',
      culture_sub:      '¡Sumérgete en anime, ramen, sakura, samurái y todo lo que hace fascinante a Japón!',
      culture_quiz:     'QUIZ DE CULTURA',
      culture_quiz_sub: '¡Pon a prueba lo que aprendiste! ¡Gana XP! 🏆',
      culture_start_q:  'Iniciar Quiz →',
      culture_back:     'Volver al Centro Cultural 🎌',

      map_title:        'MAPA TURÍSTICO DE JAPÓN',
      map_sub:          '¡Haz clic en una ubicación para explorar! 25 destinos famosos 🗾',
      map_visited:      'Visitado',
      map_total_spots:  'Total de Lugares',
      map_visit_btn:    '✅ Marcar como Visitado',
      map_vocab_title:  'Vocabulario Clave',
      map_fun_fact:     '💡 Dato Curioso',

      cert_title:       '¡LO LOGRASTE!',
      cert_sub:         'Un año. Un idioma. Un sueño. おめでとうございます！',
      cert_personalize: '📝 PERSONALIZA TU CERTIFICADO',
      cert_name_ph:     'Escribe tu nombre aquí...',
      cert_generate:    '✨ ¡Generar!',
      cert_days:        'Días Estudiados',
      cert_months:      'Meses Completados',
      cert_words:       'Palabras Aprendidas',
      cert_total_xp:    'XP Total',
      cert_achieve:     'LOGROS DESBLOQUEADOS',
      cert_share_title: '¡COMPARTE TU ÉXITO! 🌟',
      cert_share_sub:   '¡Cuéntale al mundo que completaste tu viaje de aprendizaje!',
      cert_download:    '⬇ Descargar Certificado',
      cert_post_x:      '𝕏 Publicar en X',
      cert_copy:        '📋 Copiar Mensaje',
      cert_next_title:  '¿QUÉ SIGUE? 🚀',

      loading:          'Cargando...',
      correct:          '¡Correcto! 🎉',
      wrong:            '¡Casi!',
      score:            'Puntaje',
      xp_today:         'XP Hoy',
      well_done:        '¡Bien Hecho!',
      keep_going:       '¡Sigue Así!',
      days:             'días',
      months:           'meses',
      free:             'Gratis',
      premium:          'Premium',
      annual:           'Anual',
    },

    // ── FRENCH ──
    fr: {
      lang_name: 'Français',
      lang_flag: '🇫🇷',

      nav_home: 'Accueil', nav_lessons: 'Leçons', nav_profile: 'Profil', nav_upgrade: 'Passer Premium',
      nav_back: '← Retour', nav_map: 'Carte du Japon',
      btn_start: 'Commencer', btn_continue: 'Continuer', btn_next: 'Suivant →', btn_prev: '← Précédent',
      btn_listen: '🔊 Écouter', btn_learn: '+ Apprendre', btn_learned: '✅ Appris !',
      btn_try_again: '🔄 Réessayer', btn_see_results: 'Voir les résultats 🏆',
      btn_generate: '✨ Générer !', btn_download: '⬇ Télécharger', btn_share: '📤 Partager',
      lang_select_title: 'Choisissez votre langue',
      lang_select_sub: 'Sélectionnez la langue dans laquelle vous souhaitez apprendre le japonais.',
      lang_select_note: '🔒 Après votre abonnement, votre langue sera verrouillée.',
      lang_select_btn: 'Commencer à apprendre →',
      lang_locked_msg: 'La langue est verrouillée selon votre abonnement.',
      home_hero_title: 'ROUTE VERS LE JAPON',
      home_hero_sub: 'Apprenez le japonais de façon amusante — anime, jeux et vraies conversations ! 🌸',
      home_start_free: 'Commencer gratuitement', home_go_premium: 'Passer Premium ⭐',
      home_modules_title: 'VOS LEÇONS', home_journey_title: 'VOYAGE DE 12 MOIS',
      home_journey_sub: 'Votre feuille de route complète — Mois 2 / 12 en cours ! 🔥',
      home_journey_view: 'Voir la carte →',
      pay_title: 'CHOISISSEZ VOTRE PLAN', pay_sub: 'Débloquez votre parcours complet',
      pay_free_name: 'Plan Gratuit', pay_month_name: 'Premium Mensuel', pay_annual_name: 'Premium Annuel',
      pay_save: 'ÉCONOMISEZ 34%', pay_popular: 'LE PLUS POPULAIRE',
      pay_btn_free: '🌱 Continuer gratuitement', pay_btn_premium: '🔒 Démarrer Premium',
      pay_btn_annual: '🔒 Démarrer le plan annuel',
      pay_secure: '🔒 Paiement sécurisé par Square', pay_guarantee: 'Garantie satisfait ou remboursé 30 jours',
      pay_cancel_any: 'Annulez à tout moment',
      prof_title: 'MON PROFIL', prof_streak: 'Jours de Suite 🔥', prof_skills: 'Compétences',
      prof_achievements: 'Réalisations', prof_settings: 'Paramètres',
      cert_title: 'VOUS L\'AVEZ FAIT !', cert_sub: 'Un an. Une langue. Un rêve. おめでとうございます！',
      cert_download: '⬇ Télécharger le certificat', cert_next_title: 'ET MAINTENANT ? 🚀',
      phrases_title: 'PARLEZ JAPONAIS AUJOURD\'HUI !',
      phrases_browse: '📋 Parcourir', phrases_flash: '🃏 Cartes', phrases_dialogue: '🎭 Dialogue',
      gram_title: 'PARTICULES GRAMMATICALES',
      culture_title: 'DÉCOUVREZ L\'ÂME DU JAPON',
      culture_quiz: 'QUIZ CULTUREL', culture_start_q: 'Commencer le quiz →',
      map_title: 'CARTE TOURISTIQUE DU JAPON',
      loading: 'Chargement...', correct: 'Correct ! 🎉', wrong: 'Pas tout à fait !',
      days: 'jours', months: 'mois', free: 'Gratuit', premium: 'Premium', annual: 'Annuel',
      flash_hard: 'Difficile', flash_ok: 'Compris', flash_easy: 'Facile !',
      flash_tap: '👆 Toucher pour retourner', flash_hint_front: 'TOUCHER POUR RÉVÉLER', flash_hint_back: 'SIGNIFICATION',
      flash_done_title: 'TERMINÉ !', flash_done_sub: 'Bon travail ! 🌸', flash_again: '🔄 Recommencer',
      prog_locked: '🔒 Verrouillé', prog_coming_soon: 'Bientôt disponible',
    },

    // ── GERMAN ──
    de: {
      lang_name: 'Deutsch',
      lang_flag: '🇩🇪',

      nav_home: 'Startseite', nav_lessons: 'Lektionen', nav_profile: 'Profil', nav_upgrade: 'Upgraden',
      nav_back: '← Zurück', nav_map: 'Japan-Karte',
      btn_start: 'Starten', btn_continue: 'Weiter', btn_next: 'Weiter →', btn_prev: '← Zurück',
      btn_listen: '🔊 Anhören', btn_learn: '+ Lernen', btn_learned: '✅ Gelernt!',
      btn_try_again: '🔄 Nochmal versuchen', btn_see_results: 'Ergebnisse sehen 🏆',
      btn_generate: '✨ Generieren!', btn_download: '⬇ Herunterladen', btn_share: '📤 Teilen',
      lang_select_title: 'Sprache wählen',
      lang_select_sub: 'Wähle die Sprache, in der du Japanisch lernen möchtest.',
      lang_select_note: '🔒 Nach der Anmeldung wird deine Sprache gesperrt.',
      lang_select_btn: 'Jetzt lernen →',
      lang_locked_msg: 'Die Sprache ist gemäß deinem Abonnement gesperrt.',
      home_hero_title: 'ROAD TO JAPAN',
      home_hero_sub: 'Lerne Japanisch auf spaßige Weise — Anime, Spiele und echte Gespräche! 🌸',
      home_start_free: 'Kostenlos starten', home_go_premium: 'Premium werden ⭐',
      home_modules_title: 'DEINE LEKTIONEN', home_journey_title: '12-MONATIGE REISE',
      home_journey_sub: 'Deine vollständige Japanisch-Roadmap — Monat 2 / 12 läuft! 🔥',
      home_journey_view: 'Karte anzeigen →',
      pay_title: 'PLAN WÄHLEN', pay_sub: 'Schalte deine komplette Lernreise frei',
      pay_free_name: 'Kostenloser Plan', pay_month_name: 'Premium Monatlich', pay_annual_name: 'Premium Jährlich',
      pay_save: '34% SPAREN', pay_popular: 'AM BELIEBTESTEN',
      pay_btn_free: '🌱 Mit kostenlosem Plan fortfahren', pay_btn_premium: '🔒 Premium starten',
      pay_btn_annual: '🔒 Jahresplan starten',
      pay_secure: '🔒 Sicherer Checkout durch Square', pay_guarantee: '30 Tage Geld-zurück-Garantie',
      pay_cancel_any: 'Jederzeit kündigen',
      prof_title: 'MEIN PROFIL', prof_streak: 'Tage in Folge 🔥', prof_skills: 'Sprachkenntnisse',
      prof_achievements: 'Erfolge', prof_settings: 'Einstellungen',
      cert_title: 'GESCHAFFT!', cert_sub: 'Ein Jahr. Eine Sprache. Ein Traum. おめでとうございます！',
      cert_download: '⬇ Zertifikat herunterladen', cert_next_title: 'WAS KOMMT JETZT? 🚀',
      phrases_title: 'SPRICH HEUTE JAPANISCH!',
      phrases_browse: '📋 Durchsuchen', phrases_flash: '🃏 Karteikarten', phrases_dialogue: '🎭 Dialog',
      gram_title: 'GRAMMATIKPARTIKEL',
      culture_title: 'ENTDECKE JAPANS SEELE',
      culture_quiz: 'KULTURQUIZ', culture_start_q: 'Quiz starten →',
      map_title: 'JAPAN-TOURISMUSKARTE',
      loading: 'Laden...', correct: 'Richtig! 🎉', wrong: 'Nicht ganz!',
      days: 'Tage', months: 'Monate', free: 'Kostenlos', premium: 'Premium', annual: 'Jährlich',
      flash_hard: 'Schwer', flash_ok: 'Verstanden', flash_easy: 'Einfach!',
      flash_tap: '👆 Antippen zum Umdrehen', flash_hint_front: 'ANTIPPEN ZUM AUFDECKEN', flash_hint_back: 'BEDEUTUNG',
      flash_done_title: 'FERTIG!', flash_done_sub: 'Gut gemacht! 🌸', flash_again: '🔄 Nochmal',
      prog_locked: '🔒 Gesperrt', prog_coming_soon: 'Demnächst verfügbar',
    },

    // ── KOREAN ──
    ko: {
      lang_name: '한국어',
      lang_flag: '🇰🇷',

      nav_home: '홈', nav_lessons: '레슨', nav_profile: '프로필', nav_upgrade: '업그레이드',
      nav_back: '← 뒤로', nav_map: '일본 지도',
      btn_start: '시작', btn_continue: '계속', btn_next: '다음 →', btn_prev: '← 이전',
      btn_listen: '🔊 듣기', btn_learn: '+ 학습', btn_learned: '✅ 학습 완료!',
      btn_try_again: '🔄 다시 시도', btn_see_results: '결과 보기 🏆',
      btn_generate: '✨ 생성!', btn_download: '⬇ 다운로드', btn_share: '📤 공유',
      lang_select_title: '언어를 선택하세요',
      lang_select_sub: '일본어를 배울 언어를 선택하세요. 구독 전에 변경할 수 있습니다.',
      lang_select_note: '🔒 구독 후에는 선택한 언어로 고정됩니다.',
      lang_select_btn: '학습 시작하기 →',
      lang_locked_msg: '구독 플랜에 따라 언어가 고정되어 있습니다.',
      home_hero_title: '일본으로 가는 길',
      home_hero_sub: '애니메이션, 게임, 실제 대화로 재미있게 일본어를 배우세요! 🌸',
      home_start_free: '무료로 시작하기', home_go_premium: '프리미엄으로 ⭐',
      home_modules_title: '내 레슨', home_journey_title: '12개월 여정',
      home_journey_sub: '일본어 완성 로드맵 — 2 / 12개월 진행 중! 🔥',
      home_journey_view: '지도 보기 →',
      pay_title: '플랜 선택', pay_sub: '완전한 일본어 학습 여정을 시작하세요',
      pay_free_name: '무료 플랜', pay_month_name: '프리미엄 월간', pay_annual_name: '프리미엄 연간',
      pay_save: '34% 절약', pay_popular: '가장 인기',
      pay_btn_free: '🌱 무료로 계속', pay_btn_premium: '🔒 프리미엄 시작',
      pay_btn_annual: '🔒 연간 플랜 시작',
      pay_secure: '🔒 Square 보안 결제', pay_guarantee: '30일 환불 보장',
      pay_cancel_any: '언제든지 취소 가능',
      prof_title: '내 프로필', prof_streak: '연속 학습일 🔥', prof_skills: '언어 실력',
      prof_achievements: '업적', prof_settings: '설정',
      cert_title: '해냈어요!', cert_sub: '1년. 1개 언어. 1개의 꿈. おめでとうございます！',
      cert_download: '⬇ 수료증 다운로드', cert_next_title: '다음 단계는? 🚀',
      phrases_title: '오늘 일본어로 말해보세요!',
      phrases_browse: '📋 탐색', phrases_flash: '🃏 플래시카드', phrases_dialogue: '🎭 대화',
      gram_title: '일본어 문법 조사',
      culture_title: '일본의 매력을 발견하세요',
      culture_quiz: '문화 퀴즈', culture_start_q: '퀴즈 시작 →',
      map_title: '일본 관광 지도',
      loading: '로딩 중...', correct: '정답! 🎉', wrong: '아쉽네요!',
      days: '일', months: '개월', free: '무료', premium: '프리미엄', annual: '연간',
      flash_hard: '어려움', flash_ok: '이해함', flash_easy: '쉬움!',
      flash_tap: '👆 탭해서 뒤집기', flash_hint_front: '탭해서 확인', flash_hint_back: '의미',
      flash_done_title: '완료!', flash_done_sub: '잘 하셨어요! 🌸', flash_again: '🔄 다시',
      prog_locked: '🔒 잠금', prog_coming_soon: '곧 출시',
    },
  };

  // ── FALLBACK ── fill missing keys from English
  Object.keys(T).forEach(lang => {
    if (lang === 'en') return;
    Object.keys(T.en).forEach(key => {
      if (T[lang][key] === undefined) T[lang][key] = T.en[key];
    });
  });

  // ── LANGUAGE META ──
  // Active languages (fully translated)
  const LANGUAGES = [
    { code:'en', name:'English',  flag:'🇺🇸', nativeName:'English' },
    { code:'es', name:'Spanish',  flag:'🇪🇸', nativeName:'Español' },
    // Coming soon:
    // { code:'fr', name:'French',  flag:'🇫🇷', nativeName:'Français' },
    // { code:'de', name:'German',  flag:'🇩🇪', nativeName:'Deutsch'  },
    // { code:'ko', name:'Korean',  flag:'🇰🇷', nativeName:'한국어'    },
  ];

  // ── STORAGE KEYS ──
  const LANG_KEY    = 'rtj_lang';
  const LOCKED_KEY  = 'rtj_lang_locked';

  let currentLang = localStorage.getItem(LANG_KEY) || 'en';
  let isLocked    = localStorage.getItem(LOCKED_KEY) === 'true';

  // ── PUBLIC API ──
  return {

    /** Get current language code */
    get current() { return currentLang; },

    /** Is language locked (post-subscription) */
    get locked() { return isLocked; },

    /** All available languages */
    get languages() { return LANGUAGES; },

    /** Translate a key */
    t(key) {
      return (T[currentLang] && T[currentLang][key]) || T.en[key] || key;
    },

    /** Set language (only if not locked) */
    set(code) {
      if (isLocked) return false;
      if (!T[code]) return false;
      currentLang = code;
      localStorage.setItem(LANG_KEY, code);
      this.apply();
      return true;
    },

    /** Lock language (call on successful subscription) */
    lock() {
      isLocked = true;
      localStorage.setItem(LOCKED_KEY, 'true');
    },

    /** Unlock (call on subscription cancellation) */
    unlock() {
      isLocked = false;
      localStorage.removeItem(LOCKED_KEY);
    },

    /** Apply translations to DOM via data-i18n attributes */
    apply() {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const attr = el.getAttribute('data-i18n-attr'); // e.g. "placeholder"
        const val = this.t(key);
        if (attr) {
          el.setAttribute(attr, val);
        } else {
          el.textContent = val;
        }
      });

      // Update html lang attribute
      document.documentElement.lang = currentLang;

      // Dispatch event so pages can hook in
      document.dispatchEvent(new CustomEvent('rtj:langchange', { detail: { lang: currentLang } }));
    },

    /** Build the language selector UI (returns HTML string) */
    buildSelector(compact = false) {
      if (compact) {
        // Small dropdown for nav bar
        return `
          <div class="rtj-lang-compact" id="rtjLangCompact">
            <button class="rtj-lc-btn" onclick="RTJLang.toggleDropdown()" ${isLocked ? 'title="Language locked to subscription"' : ''}>
              ${LANGUAGES.find(l => l.code === currentLang)?.flag || '🌐'}
              ${isLocked ? '🔒' : '▾'}
            </button>
            <div class="rtj-lc-dropdown" id="rtjLcDropdown">
              ${isLocked
                ? `<div class="rtj-lc-locked">🔒 ${this.t('lang_locked_msg')}</div>`
                : LANGUAGES.map(l => `
                    <div class="rtj-lc-opt ${l.code === currentLang ? 'active' : ''}" onclick="RTJLang.set('${l.code}');RTJLang.closeDropdown()">
                      <span>${l.flag}</span>
                      <span>${l.nativeName}</span>
                      ${l.code === currentLang ? '<span class="rtj-lc-check">✓</span>' : ''}
                    </div>`).join('')
              }
            </div>
          </div>`;
      } else {
        // Full-screen language picker
        return `
          <div class="rtj-lang-screen" id="rtjLangScreen">
            <div class="rtj-ls-inner">
              <div class="rtj-ls-flag">🌏</div>
              <div class="rtj-ls-title">${this.t('lang_select_title')}</div>
              <div class="rtj-ls-sub">${this.t('lang_select_sub')}</div>
              <div class="rtj-ls-grid">
                ${LANGUAGES.map(l => `
                  <div class="rtj-ls-card ${l.code === currentLang ? 'active' : ''}" onclick="RTJLang.selectAndStart('${l.code}')">
                    <div class="rtj-ls-card-flag">${l.flag}</div>
                    <div class="rtj-ls-card-native">${l.nativeName}</div>
                    <div class="rtj-ls-card-name">${l.name}</div>
                  </div>`).join('')}
              </div>
              <div class="rtj-ls-note">${this.t('lang_select_note')}</div>
              <button class="rtj-ls-btn" onclick="RTJLang.dismissScreen()">
                ${this.t('lang_select_btn')}
              </button>
            </div>
          </div>`;
      }
    },

    /** Show full-screen picker (only if not locked and first visit or called manually) */
    showScreen() {
      if (document.getElementById('rtjLangScreen')) return;
      document.body.insertAdjacentHTML('afterbegin', this.buildSelector(false));
      this.injectStyles();
    },

    /** Inject compact dropdown into a target element */
    injectCompact(targetEl) {
      if (!targetEl) return;
      targetEl.innerHTML = this.buildSelector(true);
      this.injectStyles();
      // Close on outside click
      document.addEventListener('click', e => {
        if (!e.target.closest('#rtjLangCompact')) this.closeDropdown();
      });
    },

    toggleDropdown() {
      document.getElementById('rtjLcDropdown')?.classList.toggle('open');
    },
    closeDropdown() {
      document.getElementById('rtjLcDropdown')?.classList.remove('open');
    },

    selectAndStart(code) {
      this.set(code);
      // Don't dismiss yet — let user confirm with button
      // Update active state
      document.querySelectorAll('.rtj-ls-card').forEach(c => {
        c.classList.toggle('active', c.getAttribute('onclick').includes(`'${code}'`));
      });
      document.querySelector('.rtj-ls-btn').textContent = this.t('lang_select_btn');
      document.querySelector('.rtj-ls-note').textContent = this.t('lang_select_note');
    },

    dismissScreen() {
      const el = document.getElementById('rtjLangScreen');
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'scale(1.04)';
        setTimeout(() => el.remove(), 350);
      }
      localStorage.setItem('rtj_lang_seen', '1');
    },

    /** Auto-show on first visit only */
    autoShow() {
      const seen = localStorage.getItem('rtj_lang_seen');
      if (!seen && !isLocked) {
        setTimeout(() => this.showScreen(), 200);
      }
    },

    /** Inject all required CSS */
    injectStyles() {
      if (document.getElementById('rtj-lang-styles')) return;
      const style = document.createElement('style');
      style.id = 'rtj-lang-styles';
      style.textContent = `
        /* ── FULLSCREEN PICKER ── */
        .rtj-lang-screen {
          position:fixed;inset:0;z-index:9999;
          background:rgba(0,0,0,0.88);backdrop-filter:blur(12px);
          display:flex;align-items:center;justify-content:center;padding:20px;
          transition:opacity 0.35s,transform 0.35s;
        }
        .rtj-ls-inner {
          background:linear-gradient(145deg,#161b22,#1c2230);
          border:1px solid rgba(255,215,0,0.2);border-radius:28px;
          padding:36px 28px;max-width:480px;width:100%;text-align:center;
          box-shadow:0 24px 80px rgba(0,0,0,0.7);
        }
        .rtj-ls-flag { font-size:3rem;margin-bottom:10px; }
        .rtj-ls-title {
          font-family:'Bangers',cursive;font-size:1.8rem;letter-spacing:3px;
          color:#fff;margin-bottom:8px;
        }
        .rtj-ls-sub { font-size:0.83rem;color:#a0a8c0;line-height:1.7;margin-bottom:22px; }
        .rtj-ls-grid {
          display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:18px;max-width:280px;margin-left:auto;margin-right:auto;
        }
        .rtj-ls-card {
          border-radius:16px;padding:20px 12px;cursor:pointer;
          border:1.5px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.04);
          transition:all 0.2s;
        }
        .rtj-ls-card:hover { background:rgba(255,215,0,0.08);border-color:rgba(255,215,0,0.25);transform:translateY(-2px); }
        .rtj-ls-card.active { background:rgba(255,215,0,0.12);border-color:rgba(255,215,0,0.5);box-shadow:0 0 16px rgba(255,215,0,0.15); }
        .rtj-ls-card-flag { font-size:2.8rem;margin-bottom:8px; }
        .rtj-ls-card-native { font-size:1rem;font-weight:900;color:#fff;margin-bottom:3px; }
        .rtj-ls-card-name { font-size:0.72rem;color:#7a8099; }
        .rtj-ls-note {
          font-size:0.7rem;color:#7a8099;margin-bottom:18px;
          background:rgba(255,215,0,0.05);border:1px solid rgba(255,215,0,0.1);
          border-radius:10px;padding:8px 12px;
        }
        .rtj-ls-btn {
          padding:13px 32px;border-radius:16px;
          background:linear-gradient(135deg,#ffaa00,#ffd700);
          color:#000;font-family:'Bangers',cursive;font-size:1.1rem;letter-spacing:2px;
          border:none;cursor:pointer;transition:all 0.2s;width:100%;
        }
        .rtj-ls-btn:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(255,215,0,0.3); }

        /* ── COMPACT DROPDOWN ── */
        .rtj-lang-compact { position:relative;display:inline-block; }
        .rtj-lc-btn {
          padding:6px 12px;border-radius:20px;
          background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);
          color:#fff;font-size:0.88rem;cursor:pointer;transition:all 0.2s;
          display:flex;align-items:center;gap:4px;
        }
        .rtj-lc-btn:hover { background:rgba(255,255,255,0.1); }
        .rtj-lc-dropdown {
          position:absolute;top:calc(100% + 8px);right:0;
          background:#1c2230;border:1px solid rgba(255,255,255,0.12);
          border-radius:14px;min-width:160px;overflow:hidden;
          opacity:0;pointer-events:none;transform:translateY(-8px);
          transition:all 0.2s;z-index:1000;box-shadow:0 8px 28px rgba(0,0,0,0.6);
        }
        .rtj-lc-dropdown.open { opacity:1;pointer-events:all;transform:translateY(0); }
        .rtj-lc-opt {
          display:flex;align-items:center;gap:8px;padding:10px 14px;
          cursor:pointer;font-size:0.82rem;font-weight:800;color:#d0d4e8;
          transition:background 0.15s;
        }
        .rtj-lc-opt:hover { background:rgba(255,255,255,0.06); }
        .rtj-lc-opt.active { color:#ffd700; }
        .rtj-lc-check { margin-left:auto;color:#ffd700; }
        .rtj-lc-locked {
          padding:12px 14px;font-size:0.75rem;color:#7a8099;font-weight:700;
          text-align:center;line-height:1.5;
        }
      `;
      document.head.appendChild(style);
    },
  };
})();

// ── AUTO-INIT ──
// Applies translations as soon as DOM is ready.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => RTJLang.apply());
} else {
  RTJLang.apply();
}
