const RTJ_DATA = {

  hiragana: [
    {char:'あ',romaji:'a',mnemonic:'An "A" shape'},{char:'い',romaji:'i',mnemonic:'Two "i"s side by side'},
    {char:'う',romaji:'u',mnemonic:'A bird in flight'},{char:'え',romaji:'e',mnemonic:'An "E" leaning'},
    {char:'お',romaji:'o',mnemonic:'A person waving "Oh!"'},
    {char:'か',romaji:'ka',mnemonic:'A person saying "kah"'},{char:'き',romaji:'ki',mnemonic:'A key shape'},
    {char:'く',romaji:'ku',mnemonic:'A beak saying "coo"'},{char:'け',romaji:'ke',mnemonic:'A key hole'},
    {char:'こ',romaji:'ko',mnemonic:'Two strokes like a "co"uple'},
    {char:'さ',romaji:'sa',mnemonic:'A sock with a foot'},{char:'し',romaji:'shi',mnemonic:'A fishing hook'},
    {char:'す',romaji:'su',mnemonic:'A swinging swing'},{char:'せ',romaji:'se',mnemonic:'A snake'},
    {char:'そ',romaji:'so',mnemonic:'A sewing needle'},
    {char:'た',romaji:'ta',mnemonic:'A person doing "ta"-da!'},{char:'ち',romaji:'chi',mnemonic:'A cheerleader'},
    {char:'つ',romaji:'tsu',mnemonic:'A tsunami wave'},{char:'て',romaji:'te',mnemonic:'A television antenna'},
    {char:'と',romaji:'to',mnemonic:'A "toe" sticking up'},
    {char:'な',romaji:'na',mnemonic:'A kNot'},{char:'に',romaji:'ni',mnemonic:'A knee bending'},
    {char:'ぬ',romaji:'nu',mnemonic:'Noodles in a bowl'},{char:'ね',romaji:'ne',mnemonic:'A net'},
    {char:'の',romaji:'no',mnemonic:'A "no" swirl sign'},
    {char:'は',romaji:'ha',mnemonic:'A heart laughing "ha"'},{char:'ひ',romaji:'hi',mnemonic:'A smiling "hee" face'},
    {char:'ふ',romaji:'fu',mnemonic:'Mt. Fuji'},{char:'へ',romaji:'he',mnemonic:'A mountain peak'},
    {char:'ほ',romaji:'ho',mnemonic:'A holly bush saying "ho ho"'},
    {char:'ま',romaji:'ma',mnemonic:'A mama holding child'},{char:'み',romaji:'mi',mnemonic:'A "me" looking eye'},
    {char:'む',romaji:'mu',mnemonic:'A cow saying "moo"'},{char:'め',romaji:'me',mnemonic:'A swirling eye'},
    {char:'も',romaji:'mo',mnemonic:'A fish on a hook – "mo"re please'},
    {char:'や',romaji:'ya',mnemonic:'A yacht sail'},{char:'ゆ',romaji:'yu',mnemonic:'A "you" unicorn'},
    {char:'よ',romaji:'yo',mnemonic:'A yo-yo string'},
    {char:'ら',romaji:'ra',mnemonic:'A rabbit ear'},{char:'り',romaji:'ri',mnemonic:'Two reeds'},
    {char:'る',romaji:'ru',mnemonic:'A looping road'},{char:'れ',romaji:'re',mnemonic:'A rake'},
    {char:'ろ',romaji:'ro',mnemonic:'A road bending'},
    {char:'わ',romaji:'wa',mnemonic:'A wine glass'},{char:'を',romaji:'wo',mnemonic:'A warrior\'s "wo"rd'},
    {char:'ん',romaji:'n',mnemonic:'A "n"ose on a face'},
    {char:'が',romaji:'ga',mnemonic:'か + voiced'},{char:'ぎ',romaji:'gi',mnemonic:'き + voiced'},
    {char:'ぐ',romaji:'gu',mnemonic:'く + voiced'},{char:'げ',romaji:'ge',mnemonic:'け + voiced'},
    {char:'ご',romaji:'go',mnemonic:'こ + voiced'},
    {char:'ざ',romaji:'za',mnemonic:'さ + voiced'},{char:'じ',romaji:'ji',mnemonic:'し + voiced'},
    {char:'ず',romaji:'zu',mnemonic:'す + voiced'},{char:'ぜ',romaji:'ze',mnemonic:'せ + voiced'},
    {char:'ぞ',romaji:'zo',mnemonic:'そ + voiced'},
    {char:'だ',romaji:'da',mnemonic:'た + voiced'},{char:'ぢ',romaji:'di',mnemonic:'ち + voiced'},
    {char:'づ',romaji:'du',mnemonic:'つ + voiced'},{char:'で',romaji:'de',mnemonic:'て + voiced'},
    {char:'ど',romaji:'do',mnemonic:'と + voiced'},
    {char:'ば',romaji:'ba',mnemonic:'は + voiced'},{char:'び',romaji:'bi',mnemonic:'ひ + voiced'},
    {char:'ぶ',romaji:'bu',mnemonic:'ふ + voiced'},{char:'べ',romaji:'be',mnemonic:'へ + voiced'},
    {char:'ぼ',romaji:'bo',mnemonic:'ほ + voiced'},
    {char:'ぱ',romaji:'pa',mnemonic:'は + half-voiced'},{char:'ぴ',romaji:'pi',mnemonic:'ひ + half-voiced'},
    {char:'ぷ',romaji:'pu',mnemonic:'ふ + half-voiced'},{char:'ぺ',romaji:'pe',mnemonic:'へ + half-voiced'},
    {char:'ぽ',romaji:'po',mnemonic:'ほ + half-voiced'}
  ],

  katakana: [
    {char:'ア',romaji:'a'},{char:'イ',romaji:'i'},{char:'ウ',romaji:'u'},{char:'エ',romaji:'e'},{char:'オ',romaji:'o'},
    {char:'カ',romaji:'ka'},{char:'キ',romaji:'ki'},{char:'ク',romaji:'ku'},{char:'ケ',romaji:'ke'},{char:'コ',romaji:'ko'},
    {char:'サ',romaji:'sa'},{char:'シ',romaji:'shi'},{char:'ス',romaji:'su'},{char:'セ',romaji:'se'},{char:'ソ',romaji:'so'},
    {char:'タ',romaji:'ta'},{char:'チ',romaji:'chi'},{char:'ツ',romaji:'tsu'},{char:'テ',romaji:'te'},{char:'ト',romaji:'to'},
    {char:'ナ',romaji:'na'},{char:'ニ',romaji:'ni'},{char:'ヌ',romaji:'nu'},{char:'ネ',romaji:'ne'},{char:'ノ',romaji:'no'},
    {char:'ハ',romaji:'ha'},{char:'ヒ',romaji:'hi'},{char:'フ',romaji:'fu'},{char:'ヘ',romaji:'he'},{char:'ホ',romaji:'ho'},
    {char:'マ',romaji:'ma'},{char:'ミ',romaji:'mi'},{char:'ム',romaji:'mu'},{char:'メ',romaji:'me'},{char:'モ',romaji:'mo'},
    {char:'ヤ',romaji:'ya'},{char:'ユ',romaji:'yu'},{char:'ヨ',romaji:'yo'},
    {char:'ラ',romaji:'ra'},{char:'リ',romaji:'ri'},{char:'ル',romaji:'ru'},{char:'レ',romaji:'re'},{char:'ロ',romaji:'ro'},
    {char:'ワ',romaji:'wa'},{char:'ヲ',romaji:'wo'},{char:'ン',romaji:'n'},
    {char:'ガ',romaji:'ga'},{char:'ギ',romaji:'gi'},{char:'グ',romaji:'gu'},{char:'ゲ',romaji:'ge'},{char:'ゴ',romaji:'go'},
    {char:'ザ',romaji:'za'},{char:'ジ',romaji:'ji'},{char:'ズ',romaji:'zu'},{char:'ゼ',romaji:'ze'},{char:'ゾ',romaji:'zo'},
    {char:'ダ',romaji:'da'},{char:'ヂ',romaji:'di'},{char:'ヅ',romaji:'du'},{char:'デ',romaji:'de'},{char:'ド',romaji:'do'},
    {char:'バ',romaji:'ba'},{char:'ビ',romaji:'bi'},{char:'ブ',romaji:'bu'},{char:'ベ',romaji:'be'},{char:'ボ',romaji:'bo'},
    {char:'パ',romaji:'pa'},{char:'ピ',romaji:'pi'},{char:'プ',romaji:'pu'},{char:'ペ',romaji:'pe'},{char:'ポ',romaji:'po'}
  ],

  katakanaWords: [
    {word:'アニメ',romaji:'anime',meaning:'Anime / animation'},
    {word:'マンガ',romaji:'manga',meaning:'Manga / comic'},
    {word:'ラーメン',romaji:'ramen',meaning:'Ramen noodles'},
    {word:'スシ',romaji:'sushi',meaning:'Sushi'},
    {word:'カラオケ',romaji:'karaoke',meaning:'Karaoke'},
    {word:'ゲーム',romaji:'geemu',meaning:'Game'},
    {word:'コーヒー',romaji:'koohii',meaning:'Coffee'},
    {word:'テレビ',romaji:'terebi',meaning:'Television'},
    {word:'スマホ',romaji:'sumaho',meaning:'Smartphone'},
    {word:'バス',romaji:'basu',meaning:'Bus'},
    {word:'タクシー',romaji:'takushii',meaning:'Taxi'},
    {word:'ホテル',romaji:'hoteru',meaning:'Hotel'},
    {word:'レストラン',romaji:'resutoran',meaning:'Restaurant'},
    {word:'アイスクリーム',romaji:'aisukuriimu',meaning:'Ice cream'},
    {word:'チョコレート',romaji:'chokoreeto',meaning:'Chocolate'}
  ],

  kanjiGrade1: [
    {kanji:'一',onyomi:'イチ・イツ',kunyomi:'ひと(つ)',meaning:'one',stroke:1},
    {kanji:'二',onyomi:'ニ',kunyomi:'ふた(つ)',meaning:'two',stroke:2},
    {kanji:'三',onyomi:'サン',kunyomi:'みっ(つ)',meaning:'three',stroke:3},
    {kanji:'四',onyomi:'シ',kunyomi:'よ・よっ(つ)',meaning:'four',stroke:5},
    {kanji:'五',onyomi:'ゴ',kunyomi:'いつ(つ)',meaning:'five',stroke:4},
    {kanji:'六',onyomi:'ロク',kunyomi:'むっ(つ)',meaning:'six',stroke:4},
    {kanji:'七',onyomi:'シチ',kunyomi:'なな(つ)',meaning:'seven',stroke:2},
    {kanji:'八',onyomi:'ハチ',kunyomi:'やっ(つ)',meaning:'eight',stroke:2},
    {kanji:'九',onyomi:'キュウ・ク',kunyomi:'ここの(つ)',meaning:'nine',stroke:2},
    {kanji:'十',onyomi:'ジュウ',kunyomi:'とお',meaning:'ten',stroke:2},
    {kanji:'百',onyomi:'ヒャク',kunyomi:'',meaning:'hundred',stroke:6},
    {kanji:'千',onyomi:'セン',kunyomi:'ち',meaning:'thousand',stroke:3},
    {kanji:'円',onyomi:'エン',kunyomi:'まる',meaning:'yen / circle',stroke:4},
    {kanji:'年',onyomi:'ネン',kunyomi:'とし',meaning:'year',stroke:6},
    {kanji:'月',onyomi:'ゲツ・ガツ',kunyomi:'つき',meaning:'moon / month',stroke:4},
    {kanji:'日',onyomi:'ニチ・ジツ',kunyomi:'ひ・か',meaning:'sun / day',stroke:4},
    {kanji:'火',onyomi:'カ',kunyomi:'ひ',meaning:'fire',stroke:4},
    {kanji:'水',onyomi:'スイ',kunyomi:'みず',meaning:'water',stroke:4},
    {kanji:'木',onyomi:'モク・ボク',kunyomi:'き',meaning:'tree / wood',stroke:4},
    {kanji:'金',onyomi:'キン・コン',kunyomi:'かね・かな',meaning:'gold / money',stroke:8},
    {kanji:'土',onyomi:'ド・ト',kunyomi:'つち',meaning:'earth / soil',stroke:3},
    {kanji:'山',onyomi:'サン',kunyomi:'やま',meaning:'mountain',stroke:3},
    {kanji:'川',onyomi:'セン',kunyomi:'かわ',meaning:'river',stroke:3},
    {kanji:'田',onyomi:'デン',kunyomi:'た',meaning:'rice field',stroke:5},
    {kanji:'人',onyomi:'ジン・ニン',kunyomi:'ひと',meaning:'person',stroke:2},
    {kanji:'口',onyomi:'コウ・ク',kunyomi:'くち',meaning:'mouth',stroke:3},
    {kanji:'目',onyomi:'モク・ボク',kunyomi:'め',meaning:'eye',stroke:5},
    {kanji:'耳',onyomi:'ジ',kunyomi:'みみ',meaning:'ear',stroke:6},
    {kanji:'手',onyomi:'シュ',kunyomi:'て',meaning:'hand',stroke:4},
    {kanji:'足',onyomi:'ソク',kunyomi:'あし',meaning:'foot / leg',stroke:7},
    {kanji:'力',onyomi:'リョク・リキ',kunyomi:'ちから',meaning:'power / strength',stroke:2},
    {kanji:'女',onyomi:'ジョ・ニョ',kunyomi:'おんな',meaning:'woman / female',stroke:3},
    {kanji:'男',onyomi:'ダン・ナン',kunyomi:'おとこ',meaning:'man / male',stroke:7},
    {kanji:'子',onyomi:'シ・ス',kunyomi:'こ',meaning:'child',stroke:3},
    {kanji:'生',onyomi:'セイ・ショウ',kunyomi:'い(きる)・う(まれる)',meaning:'life / birth',stroke:5},
    {kanji:'花',onyomi:'カ',kunyomi:'はな',meaning:'flower',stroke:7},
    {kanji:'草',onyomi:'ソウ',kunyomi:'くさ',meaning:'grass',stroke:9},
    {kanji:'虫',onyomi:'チュウ',kunyomi:'むし',meaning:'insect / bug',stroke:6},
    {kanji:'犬',onyomi:'ケン',kunyomi:'いぬ',meaning:'dog',stroke:4},
    {kanji:'石',onyomi:'セキ・シャク',kunyomi:'いし',meaning:'stone / rock',stroke:5},
    {kanji:'林',onyomi:'リン',kunyomi:'はやし',meaning:'grove / small forest',stroke:8},
    {kanji:'森',onyomi:'シン',kunyomi:'もり',meaning:'forest',stroke:12},
    {kanji:'空',onyomi:'クウ',kunyomi:'そら・から',meaning:'sky / empty',stroke:8},
    {kanji:'雨',onyomi:'ウ',kunyomi:'あめ・あま',meaning:'rain',stroke:8},
    {kanji:'気',onyomi:'キ・ケ',kunyomi:'',meaning:'spirit / air / feeling',stroke:6},
    {kanji:'上',onyomi:'ジョウ・ショウ',kunyomi:'うえ・うわ・かみ',meaning:'above / up',stroke:3},
    {kanji:'下',onyomi:'カ・ゲ',kunyomi:'した・しも・さ(がる)',meaning:'below / down',stroke:3},
    {kanji:'大',onyomi:'ダイ・タイ',kunyomi:'おお(きい)',meaning:'big / large',stroke:3},
    {kanji:'小',onyomi:'ショウ',kunyomi:'ちい(さい)・こ',meaning:'small / little',stroke:3},
    {kanji:'中',onyomi:'チュウ',kunyomi:'なか',meaning:'middle / inside',stroke:4},
    {kanji:'右',onyomi:'ウ・ユウ',kunyomi:'みぎ',meaning:'right',stroke:5},
    {kanji:'左',onyomi:'サ',kunyomi:'ひだり',meaning:'left',stroke:5},
    {kanji:'白',onyomi:'ハク・ビャク',kunyomi:'しろ・しら',meaning:'white',stroke:5},
    {kanji:'赤',onyomi:'セキ・シャク',kunyomi:'あか',meaning:'red',stroke:7},
    {kanji:'青',onyomi:'セイ・ショウ',kunyomi:'あお',meaning:'blue / green',stroke:8},
    {kanji:'先',onyomi:'セン',kunyomi:'さき',meaning:'ahead / previous',stroke:6},
    {kanji:'名',onyomi:'メイ・ミョウ',kunyomi:'な',meaning:'name',stroke:6},
    {kanji:'字',onyomi:'ジ',kunyomi:'あざ',meaning:'letter / character',stroke:6},
    {kanji:'学',onyomi:'ガク',kunyomi:'まな(ぶ)',meaning:'study / learning',stroke:8},
    {kanji:'校',onyomi:'コウ',kunyomi:'',meaning:'school',stroke:10},
    {kanji:'村',onyomi:'ソン',kunyomi:'むら',meaning:'village',stroke:7},
    {kanji:'町',onyomi:'チョウ',kunyomi:'まち',meaning:'town',stroke:7},
    {kanji:'本',onyomi:'ホン',kunyomi:'もと',meaning:'book / origin',stroke:5},
    {kanji:'文',onyomi:'ブン・モン',kunyomi:'ふみ',meaning:'writing / text',stroke:4},
    {kanji:'見',onyomi:'ケン',kunyomi:'み(る)・み(える)',meaning:'see / look',stroke:7},
    {kanji:'玉',onyomi:'ギョク',kunyomi:'たま',meaning:'ball / jewel',stroke:5},
    {kanji:'王',onyomi:'オウ',kunyomi:'',meaning:'king',stroke:4},
    {kanji:'音',onyomi:'オン・イン',kunyomi:'おと・ね',meaning:'sound / noise',stroke:9},
    {kanji:'早',onyomi:'ソウ・サッ',kunyomi:'はや(い)',meaning:'early / fast',stroke:6},
    {kanji:'正',onyomi:'セイ・ショウ',kunyomi:'ただ(しい)・まさ',meaning:'correct / right',stroke:5},
    {kanji:'出',onyomi:'シュツ・スイ',kunyomi:'で(る)・だ(す)',meaning:'exit / go out',stroke:5},
    {kanji:'入',onyomi:'ニュウ',kunyomi:'い(る)・い(れる)・はい(る)',meaning:'enter / put in',stroke:2},
    {kanji:'立',onyomi:'リツ・リュウ',kunyomi:'た(つ)・た(てる)',meaning:'stand up',stroke:5},
    {kanji:'休',onyomi:'キュウ',kunyomi:'やす(む)',meaning:'rest',stroke:6},
    {kanji:'車',onyomi:'シャ',kunyomi:'くるま',meaning:'car / vehicle',stroke:7},
    {kanji:'貝',onyomi:'バイ',kunyomi:'かい',meaning:'shellfish',stroke:7},
    {kanji:'夕',onyomi:'セキ',kunyomi:'ゆう',meaning:'evening',stroke:3},
    {kanji:'糸',onyomi:'シ',kunyomi:'いと',meaning:'thread / string',stroke:6}
  ],

  greetings: [
    {japanese:'おはようございます',romaji:'Ohayou gozaimasu',english:'Good morning',spanish:'Buenos días'},
    {japanese:'こんにちは',romaji:'Konnichiwa',english:'Hello / Good afternoon',spanish:'Hola / Buenas tardes'},
    {japanese:'こんばんは',romaji:'Konbanwa',english:'Good evening',spanish:'Buenas noches'},
    {japanese:'おやすみなさい',romaji:'Oyasumi nasai',english:'Good night',spanish:'Buenas noches (al dormir)'},
    {japanese:'さようなら',romaji:'Sayounara',english:'Goodbye',spanish:'Adiós'},
    {japanese:'ありがとうございます',romaji:'Arigatou gozaimasu',english:'Thank you very much',spanish:'Muchas gracias'},
    {japanese:'すみません',romaji:'Sumimasen',english:'Excuse me / I\'m sorry',spanish:'Disculpe / Lo siento'},
    {japanese:'はじめまして',romaji:'Hajimemashite',english:'Nice to meet you',spanish:'Mucho gusto'},
    {japanese:'よろしくおねがいします',romaji:'Yoroshiku onegaishimasu',english:'Please treat me well',spanish:'Por favor cuídenme'},
    {japanese:'いただきます',romaji:'Itadakimasu',english:'Let\'s eat! (said before meals)',spanish:'¡A comer!'},
    {japanese:'ごちそうさまでした',romaji:'Gochisousama deshita',english:'Thank you for the meal',spanish:'Gracias por la comida'}
  ],

  story: {
    chapter1: {
      title: 'The Port of Departure',
      titleJP: '出発の港',
      scenes: [
        {
          speaker:'Captain Hideo',
          portrait:'captain',
          bg:'port',
          text_en:"Ahoy, young adventurer! I am Captain Hideo of the Yamato Pirates. Have you heard the legend of the Grand Scroll of Japan?",
          text_es:"¡Ahoy, joven aventurero! Soy el Capitán Hideo de los Piratas Yamato. ¿Has oído la leyenda del Gran Pergamino de Japón?"
        },
        {
          speaker:'Kai',
          portrait:'kai',
          bg:'port',
          text_en:"The Grand Scroll? No, I haven't... but it sounds amazing!",
          text_es:"¿El Gran Pergamino? No lo he oído... ¡pero suena increíble!"
        },
        {
          speaker:'Captain Hideo',
          portrait:'captain',
          bg:'port',
          text_en:"It is said that only one who has mastered the Japanese language and culture can open it. It lies hidden across the seas... in the Land of the Rising Sun — JAPAN!",
          text_es:"Se dice que solo quien domine el idioma y la cultura japonesa puede abrirlo. Está escondido al cruzar los mares... en la Tierra del Sol Naciente — ¡JAPÓN!"
        },
        {
          speaker:'Kai',
          portrait:'kai',
          bg:'port',
          text_en:"Japan?! That's my dream! I'll make it to Japan, no matter what!",
          text_es:"¡¿Japón?! ¡Ese es mi sueño! ¡Llegaré a Japón, pase lo que pase!"
        },
        {
          speaker:'Mochi',
          portrait:'mochi',
          bg:'port',
          text_en:"もちもち！ (Mochimochi!) That means let's GO! First, you need to learn hiragana — the first letter system of Japanese!",
          text_es:"もちもち！ ¡Eso significa vamos! Primero, necesitas aprender hiragana — ¡el primer sistema de escritura japonés!"
        },
        {
          speaker:'Sakura',
          portrait:'sakura',
          bg:'ship',
          text_en:"Kai-kun! Let's learn together, shall we? がんばろう！(Ganbarou!) — Let's do our best!",
          text_es:"¡Kai-kun! ¿Aprendemos juntos? がんばろう！ (Ganbarou!) — ¡Hagamos nuestro mejor esfuerzo!"
        },
        {
          speaker:'Narrator',
          portrait:'none',
          bg:'ship',
          text_en:"And so, Kai's adventure on the Road to Japan began. Master hiragana to set sail!",
          text_es:"Y así comenzó la aventura de Kai en el Camino hacia Japón. ¡Domina el hiragana para zarpar!"
        }
      ]
    },
    chapter2: {
      title: 'Storm at Sea',
      titleJP: '嵐の海',
      scenes: [
        {
          speaker:'Kai',
          portrait:'kai',
          bg:'storm',
          text_en:"The storm is getting worse! We can't see anything!",
          text_es:"¡La tormenta empeora! ¡No podemos ver nada!"
        },
        {
          speaker:'Sakura',
          portrait:'sakura',
          bg:'storm',
          text_en:"Don't panic! I know a spell — but it uses the remaining hiragana. Help me finish the chart and we'll calm this storm!",
          text_es:"¡No entres en pánico! Sé un hechizo — pero usa el hiragana restante. ¡Ayúdame a completar la tabla y calmaremos esta tormenta!"
        }
      ]
    },

    chapter3: {
      title: 'Katakana Island',
      titleJP: 'カタカナ島',
      scenes: [
        { speaker:'Narrator', portrait:'none', bg:'island', text_en:"The storm has passed. Through the mist, a mysterious island appears on the horizon.", text_es:"La tormenta ha pasado. Entre la niebla, una misteriosa isla aparece en el horizonte." },
        { speaker:'Kai', portrait:'kai', bg:'island', text_en:"We made it to the island, but... I can't understand a single thing the villagers are saying!", text_es:"Llegamos a la isla, pero... ¡no entiendo ni una sola cosa que dicen los aldeanos!" },
        { speaker:'Taro', portrait:'taro', bg:'island', text_en:"Welcome, strangers! This is Katakana Island. Without knowing katakana, you can't even buy food here.", text_es:"¡Bienvenidos, forasteros! Esta es la Isla Katakana. Sin saber katakana, ni siquiera puedes comprar comida aquí." },
        { speaker:'Sakura', portrait:'sakura', bg:'island', text_en:"If we learn katakana, we can read anime titles, manga names, and even ramen menus! Let's do this!", text_es:"¡Si aprendemos katakana, podremos leer títulos de anime, nombres de manga e incluso menús de ramen! ¡Hagámoslo!" },
        { speaker:'Mochi', portrait:'mochi', bg:'island', text_en:"Mochi mochi! Katakana training begins! Mochi will help everyone!", text_es:"¡Mochi mochi! ¡Comienza el entrenamiento de katakana! ¡Mochi ayudará a todos!" },
        { speaker:'Taro', portrait:'taro', bg:'island', text_en:"Once you master katakana, I'll take you to meet the Katakana Queen. She holds the key to the next voyage!", text_es:"Una vez que dominen el katakana, los llevaré a conocer a la Reina Katakana. ¡Ella tiene la clave para el próximo viaje!" },
        { speaker:'Narrator', portrait:'none', bg:'island', text_en:"The katakana training begins. Master all 50 syllables and save the island!", text_es:"El entrenamiento de katakana comienza. ¡Domina las 50 sílabas y salva la isla!" }
      ]
    },

    chapter4: {
      title: 'Landing in Tokyo',
      titleJP: '東京上陸',
      scenes: [
        { speaker:'Narrator', portrait:'none', bg:'tokyo', text_en:"At last — Japan! Kai and Sakura step off the plane at Tokyo's airport, hearts pounding.", text_es:"¡Por fin, Japón! Kai y Sakura bajan del avión en el aeropuerto de Tokio con el corazón acelerado." },
        { speaker:'Kai', portrait:'kai', bg:'tokyo', text_en:"Whoa... every sign is kanji! I can't read anything at all!", text_es:"Vaya... ¡todos los carteles son kanji! ¡No puedo leer nada de nada!" },
        { speaker:'Sakura', portrait:'sakura', bg:'tokyo', text_en:"If you learn kanji, the whole city becomes readable. Let's start from first-grade level — one step at a time.", text_es:"Si aprendes kanji, toda la ciudad se vuelve legible. Empecemos desde el nivel de primer grado, paso a paso." },
        { speaker:'Taro', portrait:'taro', bg:'tokyo', text_en:"I'm Taro, Tokyo born and raised! I'll show you around — Shibuya, Akihabara, Tokyo Tower!", text_es:"¡Soy Taro, nacido y criado en Tokio! ¡Les mostraré todo — Shibuya, Akihabara, la Torre de Tokio!" },
        { speaker:'Yuki', portrait:'yuki', bg:'tokyo', text_en:"You came to Japan without even knowing kanji? Your training is far from complete.", text_es:"¿Viniste a Japón sin saber kanji? Tu entrenamiento está muy lejos de completarse." },
        { speaker:'Kai', portrait:'kai', bg:'tokyo', text_en:"I'll absolutely master kanji and prove you wrong. Just watch me!", text_es:"Voy a dominar el kanji sin duda y demostraré que estás equivocada. ¡Solo míranos!" },
        { speaker:'Narrator', portrait:'none', bg:'tokyo', text_en:"Kanji training starts in the streets of Tokyo. Master 80 characters to unlock the city's secrets!", text_es:"El entrenamiento de kanji comienza en las calles de Tokio. ¡Domina 80 caracteres para desbloquear los secretos de la ciudad!" }
      ]
    },

    chapter5: {
      title: 'Mystery of the Ancient City',
      titleJP: '古都の謎',
      scenes: [
        { speaker:'Narrator', portrait:'none', bg:'kyoto', text_en:"Tokyo conquered. Now a tip: the next key lies hidden somewhere in Kyoto, Japan's ancient capital.", text_es:"Tokio conquistado. Ahora una pista: la siguiente llave está escondida en algún lugar de Kioto, la antigua capital de Japón." },
        { speaker:'Kai', portrait:'kai', bg:'kyoto', text_en:"Kyoto feels completely different from Tokyo... ancient buildings, silent air. It's like stepping into another era.", text_es:"Kioto se siente completamente diferente de Tokio... edificios antiguos, aire silencioso. Es como entrar en otra época." },
        { speaker:'Sakura', portrait:'sakura', bg:'kyoto', text_en:"Kyoto was Japan's capital for a thousand years. Understanding its history makes Japanese language so much deeper.", text_es:"Kioto fue la capital de Japón durante mil años. Entender su historia hace que el idioma japonés sea mucho más profundo." },
        { speaker:'Yuki', portrait:'yuki', bg:'kyoto', text_en:"We meet again. I am the Language Guardian of Kyoto. Beat me in a kanji test and I'll share what I know.", text_es:"Nos volvemos a encontrar. Soy la Guardiana del Lenguaje de Kioto. Derrótame en una prueba de kanji y compartiré lo que sé." },
        { speaker:'Kai', portrait:'kai', bg:'kyoto', text_en:"Challenge accepted! I won't back down!", text_es:"¡Desafío aceptado! ¡No me echaré atrás!" },
        { speaker:'Yuki', portrait:'yuki', bg:'kyoto', text_en:"...You're stronger than I expected. I'll call it a draw. Come back when you've sharpened your Grade 2 and 3 kanji.", text_es:"...Eres más fuerte de lo que esperaba. Lo llamaré un empate. Vuelve cuando hayas perfeccionado los kanji de 2.° y 3.° grado." },
        { speaker:'Mochi', portrait:'mochi', bg:'kyoto', text_en:"Mochi mochi! Yuki acknowledged us! Mochi is so happy! On to the next training!", text_es:"¡Mochi mochi! ¡Yuki nos reconoció! ¡Mochi está muy feliz! ¡Al siguiente entrenamiento!" },
        { speaker:'Narrator', portrait:'none', bg:'kyoto', text_en:"The mystery of Kyoto deepens. Train harder in kanji to surpass Yuki and claim the ancient city's secret!", text_es:"El misterio de Kioto se profundiza. ¡Entrena más duro en kanji para superar a Yuki y obtener el secreto de la antigua ciudad!" }
      ]
    },

    chapter6: {
      title: 'Trial of Mt. Fuji',
      titleJP: '富士山の試練',
      scenes: [
        { speaker:'Narrator', portrait:'none', bg:'fuji', text_en:"Legend speaks of a key hidden at the summit of Mt. Fuji — the key to the Great Yamato Manuscript.", text_es:"La leyenda habla de una llave escondida en la cima del Monte Fuji, la llave al Gran Manuscrito Yamato." },
        { speaker:'Kai', portrait:'kai', bg:'fuji', text_en:"Mt. Fuji... can we really climb something that high?", text_es:"El Monte Fuji... ¿realmente podemos escalar algo tan alto?" },
        { speaker:'Taro', portrait:'taro', bg:'fuji', text_en:"It's Japan's tallest mountain, but people climb it every summer. Let's go together — I've done it twice!", text_es:"Es la montaña más alta de Japón, pero la gente la escala cada verano. ¡Vamos juntos — yo lo he hecho dos veces!" },
        { speaker:'Sakura', portrait:'sakura', bg:'fuji', text_en:"Let's practice intermediate grammar as we climb! Te-form, ta-form, and the ~te iru pattern too.", text_es:"¡Practiquemos gramática intermedia mientras escalamos! La forma te, la forma ta, y también el patrón ~te iru." },
        { speaker:'Narrator', portrait:'none', bg:'fuji', text_en:"Halfway up, the clouds part — and a great guardian emerges from the mist: Fujigon!", text_es:"A mitad de camino, las nubes se abren — ¡y un gran guardián emerge de la niebla: Fujigon!" },
        { speaker:'Kai', portrait:'kai', bg:'fuji', text_en:"Fujigon! We challenge you with Grade 4 and 5 kanji and intermediate grammar. Bring it on!", text_es:"¡Fujigon! Te desafiamos con kanji de 4.° y 5.° grado y gramática intermedia. ¡A por ello!" },
        { speaker:'Narrator', portrait:'none', bg:'fuji', text_en:"Fujigon is defeated! A shard of the key glows in Kai's hand. The summit is within reach!", text_es:"¡Fujigon es derrotado! Un fragmento de la llave brilla en la mano de Kai. ¡La cima está al alcance!" }
      ]
    },
    chapter7: {
      title: 'Festival Night',
      titleJP: '祭りの夜',
      scenes: [
        {
          speaker:'Narrator',
          portrait:'none',
          bg:'osaka',
          text_en:"The next key is said to be hidden at a summer festival in Osaka.",
          text_es:"Se dice que la siguiente llave está escondida en un festival de verano en Osaka."
        },
        {
          speaker:'Taro',
          portrait:'taro',
          bg:'osaka',
          text_en:"Osaka is my hometown! Takoyaki, okonomiyaki, Dotonbori! It's the best, ya know!",
          text_es:"¡Osaka es mi ciudad natal! ¡Takoyaki, okonomiyaki, Dotonbori! ¡Es lo mejor, ya lo verás!"
        },
        {
          speaker:'Kai',
          portrait:'kai',
          bg:'osaka',
          text_en:"Osaka dialect… so different from Tokyo! What do 'yade' and 'yanen' mean?",
          text_es:"El dialecto de Osaka… ¡tan diferente al de Tokio! ¿Qué significan 'yade' y 'yanen'?"
        },
        {
          speaker:'Taro',
          portrait:'taro',
          bg:'osaka',
          text_en:"That's Osaka-ben! Japan has so many dialects. Interesting, right?",
          text_es:"¡Eso es Osaka-ben! Japón tiene muchísimos dialectos. ¿Interesante, verdad?"
        },
        {
          speaker:'Sakura',
          portrait:'sakura',
          bg:'osaka',
          text_en:"If you study 6th-grade kanji and learn about Japanese music and celebrities, you'll get the clue!",
          text_es:"Si estudias los kanji de 6° grado y aprendes sobre música japonesa y famosos, ¡obtendrás la pista!"
        },
        {
          speaker:'Narrator',
          portrait:'none',
          bg:'osaka',
          text_en:"At the Dotonbori night festival, a rival merchant called 'OsakaKing' blocked their path!",
          text_es:"En el festival nocturno de Dotonbori, ¡un comerciante rival llamado 'OsakaKing' les cerró el paso!"
        },
        {
          speaker:'Kai',
          portrait:'kai',
          bg:'osaka',
          text_en:"OsakaKing! Bring it on!",
          text_es:"¡OsakaKing! ¡Aquí estoy!"
        },
        {
          speaker:'Narrator',
          portrait:'none',
          bg:'osaka',
          text_en:"OsakaKing was defeated, and another key fragment was obtained. The path to the Grand Scroll grows clearer!",
          text_es:"OsakaKing fue derrotado y se obtuvo otro fragmento de llave. ¡El camino hacia el Gran Pergamino se vuelve más claro!"
        }
      ]
    },
    chapter8: {
      title: 'The Library Sage',
      titleJP: '図書館の賢者',
      scenes: [
        {
          speaker:'Narrator',
          portrait:'none',
          bg:'library',
          text_en:"It was revealed that they must pass the JLPT exam to enter the shrine where the Grand Scroll is kept.",
          text_es:"Se reveló que deben aprobar el examen JLPT para entrar al santuario donde se guarda el Gran Pergamino."
        },
        {
          speaker:'Kai',
          portrait:'kai',
          bg:'library',
          text_en:"JLPT? The Japanese Language Proficiency Test! It's a real exam!",
          text_es:"¿El JLPT? ¡La Prueba de Competencia en Idioma Japonés! ¡Es un examen real!"
        },
        {
          speaker:'Sakura',
          portrait:'sakura',
          bg:'library',
          text_en:"You start from N5 and challenge all the way to N1. Your true Japanese ability will be put to the test.",
          text_es:"Comienzas desde el N5 y desafías hasta el N1. Tu verdadera habilidad en japonés será puesta a prueba."
        },
        {
          speaker:'図書館の賢者',
          portrait:'sage',
          bg:'library',
          text_en:"I am the Language Sage who has lived in this library for a hundred years. I shall train you as my disciples.",
          text_es:"Soy el Sabio del Lenguaje que ha vivido en esta biblioteca por cien años. Los entrenaré como mis discípulos."
        },
        {
          speaker:'Mochi',
          portrait:'mochi',
          bg:'library',
          text_en:"Mochimochi! How many books are there?! Amazing, mochi!",
          text_es:"¡Mochimochi! ¡¿Cuántos libros hay?! ¡Increíble, mochi!"
        },
        {
          speaker:'図書館の賢者',
          portrait:'sage',
          bg:'library',
          text_en:"First, vocabulary and grammar from N5 and N4. Japanese manga and anime are also useful for learning.",
          text_es:"Primero, vocabulario y gramática del N5 y N4. Los manga y anime japoneses también son útiles para aprender."
        },
        {
          speaker:'Kai',
          portrait:'kai',
          bg:'library',
          text_en:"Sage, I am in your hands! I will definitely reach N1!",
          text_es:"¡Sabio, me pongo en sus manos! ¡Definitivamente alcanzaré el N1!"
        },
        {
          speaker:'Narrator',
          portrait:'none',
          bg:'library',
          text_en:"JLPT training begins. A journey of language starting from N5 — toward the greatest trial!",
          text_es:"Comienza el entrenamiento del JLPT. Un viaje del lenguaje que empieza desde N5 — ¡hacia la prueba más grande!"
        }
      ]
    },
    chapter9: {
      title: 'Final Battle',
      titleJP: '最終決戦',
      scenes: [
        {
          speaker:'Narrator',
          portrait:'none',
          bg:'temple',
          text_en:"All the keys are gathered. The path to the shrine has been opened.",
          text_es:"Todas las llaves están reunidas. El camino hacia el santuario se ha abierto."
        },
        {
          speaker:'Yuki',
          portrait:'yuki',
          bg:'temple',
          text_en:"Kai… you've truly grown strong. You're no longer my enemy.",
          text_es:"Kai… realmente te has vuelto muy fuerte. Ya no eres mi enemigo."
        },
        {
          speaker:'Kai',
          portrait:'kai',
          bg:'temple',
          text_en:"Yuki! Will you fight alongside me?",
          text_es:"¡Yuki! ¿Pelearás a mi lado?"
        },
        {
          speaker:'Yuki',
          portrait:'yuki',
          bg:'temple',
          text_en:"I hold the keys to N2 and N1. Let's defeat the final enemy together.",
          text_es:"Yo tengo las llaves del N2 y N1. Derrotemos juntos al enemigo final."
        },
        {
          speaker:'Sakura',
          portrait:'sakura',
          bg:'temple',
          text_en:"Everyone is here! This is the real team!",
          text_es:"¡Todos están aquí! ¡Este es el verdadero equipo!"
        },
        {
          speaker:'Taro',
          portrait:'taro',
          bg:'temple',
          text_en:"Let's go with Osaka spirit! We won't lose!",
          text_es:"¡Vamos con el espíritu de Osaka! ¡No perderemos!"
        },
        {
          speaker:'Narrator',
          portrait:'none',
          bg:'temple',
          text_en:"From the darkness of the shrine's inner sanctum, the Language Demon King 'Kotoba no Maou' appeared!",
          text_es:"¡Desde la oscuridad del santuario interior, el Rey Demonio del Lenguaje 'Kotoba no Maou' apareció!"
        },
        {
          speaker:'Kai',
          portrait:'kai',
          bg:'temple',
          text_en:"Kotoba no Maou! We'll give you everything we've got! We'll defeat you with the power of N1!",
          text_es:"¡Kotoba no Maou! ¡Te daremos todo lo que tenemos! ¡Te derrotaremos con el poder del N1!"
        },
        {
          speaker:'Narrator',
          portrait:'none',
          bg:'temple',
          text_en:"The greatest language battle in history begins! Mobilize all your knowledge!",
          text_es:"¡Comienza la mayor batalla lingüística de la historia! ¡Moviliza todo tu conocimiento!"
        }
      ]
    },
    chapter10: {
      title: 'The Grand Scroll',
      titleJP: '大和の書',
      scenes: [
        {
          speaker:'Narrator',
          portrait:'none',
          bg:'summit',
          text_en:"The Demon King was defeated, and they finally reached the Yamato Shrine at the summit of Mt. Fuji.",
          text_es:"El Rey Demonio fue derrotado y finalmente llegaron al Santuario Yamato en la cima del Monte Fuji."
        },
        {
          speaker:'Kai',
          portrait:'kai',
          bg:'summit',
          text_en:"This is… the place where the Grand Scroll rests… (breathless)",
          text_es:"Este es… el lugar donde descansa el Gran Pergamino… (sin aliento)"
        },
        {
          speaker:'Sakura',
          portrait:'sakura',
          bg:'summit',
          text_en:"Kai, we made it here together… (tears in her eyes)",
          text_es:"Kai, llegamos hasta aquí juntos… (con lágrimas en los ojos)"
        },
        {
          speaker:'Taro',
          portrait:'taro',
          bg:'summit',
          text_en:"I'm so glad we came together. Truly glad.",
          text_es:"Me alegra tanto que hayamos venido juntos. Verdaderamente contento."
        },
        {
          speaker:'Yuki',
          portrait:'yuki',
          bg:'summit',
          text_en:"To have come this far… I acknowledge it.",
          text_es:"Haber llegado tan lejos… lo reconozco."
        },
        {
          speaker:'Mochi',
          portrait:'mochi',
          bg:'summit',
          text_en:"Mochimochi… (sensing the sacred air, mochi)",
          text_es:"Mochimochi… (sintiendo el aire sagrado, mochi)"
        },
        {
          speaker:'Narrator',
          portrait:'none',
          bg:'summit',
          text_en:"Kai reached out to the Grand Scroll. The seal began to glow.",
          text_es:"Kai extendió la mano hacia el Gran Pergamino. El sello comenzó a brillar."
        },
        {
          speaker:'Kai',
          portrait:'kai',
          bg:'summit',
          text_en:"(Opening the scroll) 'Language is the journey itself. To keep learning is the treasure.' …So this is the answer.",
          text_es:"(Abriendo el pergamino) 'El lenguaje es el viaje en sí mismo. Seguir aprendiendo es el tesoro.' …Así que esta es la respuesta."
        },
        {
          speaker:'Sakura',
          portrait:'sakura',
          bg:'summit',
          text_en:"Language isn't the destination. To keep learning is the true essence of the journey.",
          text_es:"El lenguaje no es el destino. Seguir aprendiendo es la verdadera esencia del viaje."
        },
        {
          speaker:'Narrator',
          portrait:'none',
          bg:'summit',
          text_en:"Kai became a Grand Master. As a teacher guiding the next generation of adventurers, a new journey begins… The journey of language has no end. Road to Japan — To be continued...",
          text_es:"Kai se convirtió en Gran Maestro. Como maestro que guía a la próxima generación de aventureros, comienza un nuevo viaje… El viaje del lenguaje no tiene fin. Road to Japan — Continuará..."
        }
      ]
    }
  },

  culture: {
    history: [
      {period:'縄文時代',name:'Jomon Period',years:'14,000–300 BC',desc:'Japan\'s earliest known civilization. Hunter-gatherers creating distinctive rope-patterned pottery.',icon:'🏺'},
      {period:'弥生時代',name:'Yayoi Period',years:'300 BC–300 AD',desc:'Introduction of rice farming, metalworking, and weaving from mainland Asia.',icon:'🌾'},
      {period:'古墳時代',name:'Kofun Period',years:'300–538 AD',desc:'Era of great burial mounds (kofun). Yamato clan unified much of Japan.',icon:'⛰️'},
      {period:'飛鳥時代',name:'Asuka Period',years:'538–710 AD',desc:'Buddhism introduced from Korea. Prince Shotoku created Japan\'s first constitution.',icon:'🛕'},
      {period:'奈良時代',name:'Nara Period',years:'710–794 AD',desc:'First permanent capital at Nara. Buddhism flourished. Man\'yoshu poetry collection written.',icon:'🦌'},
      {period:'平安時代',name:'Heian Period',years:'794–1185 AD',desc:'Capital moved to Kyoto. Elegant court culture. The Tale of Genji — world\'s first novel.',icon:'👘'},
      {period:'鎌倉時代',name:'Kamakura Period',years:'1185–1333 AD',desc:'First samurai government (shogunate). Zen Buddhism popularized.',icon:'⚔️'},
      {period:'室町時代',name:'Muromachi Period',years:'1336–1573 AD',desc:'Noh theater, tea ceremony, and Zen gardens developed.',icon:'🎭'},
      {period:'戦国時代',name:'Sengoku (Warring States)',years:'1467–1615 AD',desc:'Warlords like Oda Nobunaga and Toyotomi Hideyoshi battled for control.',icon:'🏯'},
      {period:'江戸時代',name:'Edo Period',years:'1603–1868 AD',desc:'Peace under Tokugawa shogunate. Kabuki theater, ukiyo-e woodblock prints, and haiku poetry flourished.',icon:'🗾'},
      {period:'明治時代',name:'Meiji Period',years:'1868–1912 AD',desc:'Japan modernized rapidly, adopting Western technology while preserving culture.',icon:'🏭'},
      {period:'現代',name:'Modern Japan',years:'1945–present',desc:'After WWII, Japan rebuilt to become a global economic and cultural powerhouse.',icon:'🗼'}
    ],

    landmarks: [
      {name:'東京タワー',romaji:'Tokyo Tower',location:'Tokyo',desc:'Iconic red-and-white communications tower, 333m tall. Built in 1958.',tier:'free',emoji:'🗼'},
      {name:'富士山',romaji:'Mt. Fuji',location:'Yamanashi/Shizuoka',desc:'Japan\'s highest peak at 3,776m. A UNESCO World Heritage Site and sacred symbol.',tier:'free',emoji:'🗻'},
      {name:'渋谷スクランブル交差点',romaji:'Shibuya Crossing',location:'Tokyo',desc:'The world\'s busiest pedestrian crossing, up to 3,000 people cross at once.',tier:'free',emoji:'🚦'},
      {name:'金閣寺',romaji:'Kinkaku-ji (Golden Pavilion)',location:'Kyoto',desc:'A stunning Zen Buddhist temple covered in gold leaf, reflected in a mirror pond.',tier:'paid',emoji:'⛩️'},
      {name:'伏見稲荷大社',romaji:'Fushimi Inari Shrine',location:'Kyoto',desc:'Famous for thousands of vermilion torii gates winding up a mountain.',tier:'paid',emoji:'🦊'},
      {name:'嵐山',romaji:'Arashiyama',location:'Kyoto',desc:'Scenic bamboo grove and river area. Famous for monkey park and temples.',tier:'paid',emoji:'🎋'},
      {name:'大阪城',romaji:'Osaka Castle',location:'Osaka',desc:'Magnificent 16th-century castle once home to warlord Toyotomi Hideyoshi.',tier:'paid',emoji:'🏯'},
      {name:'道頓堀',romaji:'Dotonbori',location:'Osaka',desc:'Vibrant entertainment district famous for neon signs, food, and the Glico Running Man.',tier:'paid',emoji:'🌃'},
      {name:'広島平和記念公園',romaji:'Hiroshima Peace Memorial',location:'Hiroshima',desc:'A powerful memorial and museum dedicated to the victims of the 1945 atomic bombing.',tier:'paid',emoji:'🕊️'},
      {name:'厳島神社',romaji:'Itsukushima Shrine',location:'Hiroshima',desc:'Famous floating torii gate rising from the sea, a UNESCO World Heritage Site.',tier:'paid',emoji:'🌊'},
      {name:'奈良公園',romaji:'Nara Park',location:'Nara',desc:'Hundreds of freely roaming deer considered sacred messengers of the gods.',tier:'paid',emoji:'🦌'},
      {name:'沖縄',romaji:'Okinawa',location:'Okinawa',desc:'Subtropical paradise with crystal-clear water, coral reefs, and unique Ryukyu culture.',tier:'paid',emoji:'🏖️'}
    ],

    music: [
      {title:'Lemon',artist:'米津玄師 (Kenshi Yonezu)',year:2018,genre:'J-Pop',desc:'One of Japan\'s best-selling singles ever. A tender ballad about love and loss.',tier:'free'},
      {title:'うっせぇわ',artist:'Ado',year:2020,genre:'J-Pop',desc:'Explosive anti-conformity anthem. Ado\'s powerful vocals made this a viral hit.',tier:'free'},
      {title:'炎 (Homura)',artist:'LiSA',year:2020,genre:'Anime',desc:'Theme from Demon Slayer: Mugen Train. Swept Japan\'s music awards.',tier:'free'},
      {title:'Dynamite',artist:'BTS (Korean but huge in Japan)',year:2020,genre:'K-Pop / J-Pop crossover',desc:'While Korean, BTS dominates Japanese charts.',tier:'paid'},
      {title:'一途 (Ichizu)',artist:'King Gnu',year:2021,genre:'Rock/J-Pop',desc:'Theme from Jujutsu Kaisen 0. Intense rock ballad.',tier:'paid'},
      {title:'廻廻奇譚',artist:'Eve',year:2021,genre:'Anime/Rock',desc:'Opening theme of Jujutsu Kaisen. Dark and energetic.',tier:'paid'},
      {title:'残酷な天使のテーゼ',artist:'高橋洋子 (Evangelion OP)',year:1995,genre:'Anime Classic',desc:'Iconic opening of Neon Genesis Evangelion. Still widely known.',tier:'paid'},
      {title:'さくらんぼ',artist:'大塚愛 (Ai Otsuka)',year:2003,genre:'J-Pop Classic',desc:'Upbeat love song — a timeless Japanese pop classic.',tier:'paid'}
    ],

    manga: [
      {title:'ワンピース',romaji:'One Piece',author:'尾田栄一郎 (Eiichiro Oda)',year:1997,genre:'Adventure',desc:'The world\'s best-selling manga! The story of Monkey D. Luffy seeking the treasure "One Piece."',tier:'free'},
      {title:'鬼滅の刃',romaji:'Demon Slayer',author:'吾峠呼世晴 (Koyoharu Gotouge)',year:2016,genre:'Action',desc:'Tanjiro Kamado fights demons to save his sister. Broke Japan\'s box office records.',tier:'free'},
      {title:'進撃の巨人',romaji:'Attack on Titan',author:'諫山創 (Hajime Isayama)',year:2009,genre:'Dark Fantasy',desc:'Humanity fights giant humanoid Titans. Critically acclaimed worldwide.',tier:'free'},
      {title:'呪術廻戦',romaji:'Jujutsu Kaisen',author:'芥見下々 (Gege Akutami)',year:2018,genre:'Supernatural',desc:'Yuji Itadori fights cursed spirits in a world of jujutsu sorcerers.',tier:'paid'},
      {title:'ナルト',romaji:'Naruto',author:'岸本斉史 (Masashi Kishimoto)',year:1999,genre:'Ninja Action',desc:'Naruto Uzumaki dreams of becoming Hokage. A global classic.',tier:'paid'},
      {title:'ドラゴンボール',romaji:'Dragon Ball',author:'鳥山明 (Akira Toriyama)',year:1984,genre:'Action/Adventure',desc:'Goku\'s journey to find the Dragon Balls. Defined the shonen genre.',tier:'paid'},
      {title:'僕のヒーローアカデミア',romaji:'My Hero Academia',author:'堀越耕平 (Kohei Horikoshi)',year:2014,genre:'Superhero',desc:'In a world where most people have superpowers, Izuku Midoriya has none — until he meets the greatest hero.',tier:'paid'},
      {title:'SPY×FAMILY',romaji:'Spy x Family',author:'遠藤達哉 (Tatsuya Endo)',year:2019,genre:'Comedy/Action',desc:'A spy, an assassin, and a telepathic girl pose as a family. Heartwarming and hilarious.',tier:'paid'}
    ],

    celebrities: [
      {name:'宮崎駿',romaji:'Hayao Miyazaki',field:'Film Director',desc:'Legendary co-founder of Studio Ghibli. Creator of My Neighbor Totoro, Spirited Away, and more.',tier:'free'},
      {name:'大谷翔平',romaji:'Shohei Ohtani',field:'Baseball',desc:'Two-way MLB superstar — both elite pitcher and power hitter. First Japanese player to win MLB MVP.',tier:'free'},
      {name:'北野武',romaji:'Takeshi Kitano',field:'Director / Comedian',desc:'World-renowned filmmaker known as "Beat Takeshi." Palme d\'Or laureate at Cannes.',tier:'paid'},
      {name:'安藤忠雄',romaji:'Tadao Ando',field:'Architecture',desc:'Self-taught architect known for minimalist concrete designs. Pritzker Prize winner.',tier:'paid'},
      {name:'米津玄師',romaji:'Kenshi Yonezu',field:'Music',desc:'Japan\'s most-streamed artist. Began as Vocaloid producer, became a pop superstar.',tier:'paid'},
      {name:'羽生結弦',romaji:'Yuzuru Hanyu',field:'Figure Skating',desc:'Two-time Olympic gold medalist. First skater to land a quadruple loop in competition.',tier:'paid'}
    ]
  },

  jlpt: {
    n5vocab: [
      {word:'私',reading:'わたし',meaning:'I / me',example:'私は学生です。',exampleEn:'I am a student.'},
      {word:'食べる',reading:'たべる',meaning:'to eat',example:'りんごを食べる。',exampleEn:'(I) eat an apple.'},
      {word:'飲む',reading:'のむ',meaning:'to drink',example:'水を飲む。',exampleEn:'(I) drink water.'},
      {word:'行く',reading:'いく',meaning:'to go',example:'学校に行く。',exampleEn:'(I) go to school.'},
      {word:'来る',reading:'くる',meaning:'to come',example:'友達が来る。',exampleEn:'A friend comes.'},
      {word:'見る',reading:'みる',meaning:'to see / watch',example:'テレビを見る。',exampleEn:'(I) watch TV.'},
      {word:'聞く',reading:'きく',meaning:'to listen / ask',example:'音楽を聞く。',exampleEn:'(I) listen to music.'},
      {word:'話す',reading:'はなす',meaning:'to speak / talk',example:'日本語を話す。',exampleEn:'(I) speak Japanese.'},
      {word:'書く',reading:'かく',meaning:'to write',example:'手紙を書く。',exampleEn:'(I) write a letter.'},
      {word:'読む',reading:'よむ',meaning:'to read',example:'本を読む。',exampleEn:'(I) read a book.'}
    ],
    n5grammar: [
      {pattern:'〜は〜です',meaning:'〜 is 〜 (topic + predicate)',example:'これは本です。',exampleEn:'This is a book.'},
      {pattern:'〜が好きです',meaning:'(I) like 〜',example:'アニメが好きです。',exampleEn:'I like anime.'},
      {pattern:'〜に行きます',meaning:'(I) go to 〜',example:'日本に行きます。',exampleEn:'I go to Japan.'},
      {pattern:'〜をください',meaning:'Please give me 〜',example:'水をください。',exampleEn:'Please give me water.'},
      {pattern:'〜てください',meaning:'Please do 〜',example:'見てください。',exampleEn:'Please look.'}
    ]
  },

  badges: [
    {id:'first_lesson',name:'First Step',nameJP:'はじめの一歩',icon:'👣',desc:'Complete your first lesson'},
    {id:'hiragana_master',name:'Hiragana Master',nameJP:'ひらがな達人',icon:'あ',desc:'Master all hiragana'},
    {id:'katakana_master',name:'Katakana Master',nameJP:'カタカナ達人',icon:'ア',desc:'Master all katakana'},
    {id:'streak_7',name:'Week Warrior',nameJP:'週間戦士',icon:'🔥',desc:'7-day learning streak'},
    {id:'streak_30',name:'Monthly Legend',nameJP:'月間伝説',icon:'⚡',desc:'30-day learning streak'},
    {id:'kanji_grade1',name:'1st Grade Graduate',nameJP:'小一卒業',icon:'🎓',desc:'Master Grade 1 kanji'},
    {id:'culture_explorer',name:'Culture Explorer',nameJP:'文化探検家',icon:'🗺️',desc:'Read 10 culture entries'},
    {id:'story_ch1',name:'Captain\'s Mate',nameJP:'航海士',icon:'⚓',desc:'Complete Chapter 1'}
  ]
};
