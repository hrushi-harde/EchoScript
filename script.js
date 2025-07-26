// script.js
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const translations = {
  "en-IN": {
    title: "🎙️ Multi-language Voice to Text",
    instruction: "Real-time speech transcription for improved accessibility.",
    start: "▶️ Start Listening",
    stop: "⏹️ Stop",
    selectLabel: "Select Language:",
    placeholder: "Speech output will appear here...",
    download: "⬇️ Download Transcript"
  },
  "hi-IN": {
    title: "🎙️ बहुभाषी वॉयस टू टेक्स्ट",
    instruction: "बेहतर पहुंच के लिए रीयल-टाइम भाषण ट्रांसक्रिप्शन।",
    start: "▶️ सुनना प्रारंभ करें",
    stop: "⏹️ रोकें",
    selectLabel: "भाषा चुनें:",
    placeholder: "यहाँ भाषण आउटपुट दिखाई देगा...",
    download: "⬇️ ट्रांसक्रिप्ट डाउनलोड करें"
  },
  "mr-IN": {
    title: "🎙️ बहुभाषिक आवाज ते मजकूर",
    instruction: "सुलभतेसाठी रिअल-टाइम भाषांतर.",
    start: "▶️ ऐकणे सुरू करा",
    stop: "⏹️ थांबा",
    selectLabel: "भाषा निवडा:",
    placeholder: "इथे भाषणाचा मजकूर दिसेल...",
    download: "⬇️ ट्रान्सक्रिप्ट डाउनलोड करा"
  },
  "te-IN": {
    title: "🎙️ బహుభాషా వాయిస్ టు టెక్స్ట్",
    instruction: "అందుబాటులో మెరుగుదల కోసం నిజ సమయ ప్రసంగ ట్రాన్స్క్రిప్షన్.",
    start: "▶️ వినడం ప్రారంభించండి",
    stop: "⏹️ ఆపు",
    selectLabel: "భాషను ఎంచుకోండి:",
    placeholder: "ఇక్కడ మీ మాటల చెక్స్ట్ కనిపిస్తుంది...",
    download: "⬇️ ట్రాన్స్క్రిప్ట్ డౌన్లోడ్ చేయండి"
  },
  "ta-IN": {
    title: "🎙️ பலமொழி குரலுக்கு உரை",
    instruction: "அனைவருக்கும் பயன்படும் வகையில் நேரடி குரல் உரை மாற்றம்.",
    start: "▶️ கேட்கத் தொடங்கு",
    stop: "⏹️ நிறுத்து",
    selectLabel: "மொழியை தேர்வுசெய்க:",
    placeholder: "உங்கள் பேச்சு இங்கே தோன்றும்...",
    download: "⬇️ உரையை பதிவிறக்குக"
  },
  "kn-IN": {
    title: "🎙️ ಬಹುಭಾಷಾ ಧ್ವನಿ ಪಠ್ಯ",
    instruction: "ಸುಧಾರಿತ ಪ್ರಾಪ್ಯತೆಯಿಗಾಗಿ ರಿಯಲ್ ಟೈಮ್ ಸ್ಪೀಚ್ ಟ್ರಾನ್ಸ್ಕ್ರಿಪ್ಷನ್.",
    start: "▶️ ಕೇಳಲು ಪ್ರಾರಂಭಿಸಿ",
    stop: "⏹️ ನಿಲ್ಲಿಸಿ",
    selectLabel: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
    placeholder: "ಇಲ್ಲಿ ನಿಮ್ಮ ಮಾತಿನ ಪಠ್ಯ ಕಾಣುತ್ತದೆ...",
    download: "⬇️ ಪ್ರತಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
  },
  "bn-IN": {
    title: "🎙️ বহুভাষিক ভয়েস টু টেক্সট",
    instruction: "উন্নত প্রবেশযোগ্যতার জন্য রিয়েল-টাইম বক্তৃতা প্রতিলিপি।",
    start: "▶️ শোনা শুরু করুন",
    stop: "⏹️ থামান",
    selectLabel: "ভাষা নির্বাচন করুন:",
    placeholder: "আপনার বক্তৃতা এখানে দেখা যাবে...",
    download: "⬇️ ট্রান্সক্রিপ্ট ডাউনলোড করুন"
  },
  "gu-IN": {
    title: "🎙️ બહુભાષી અવાજ થી લખાણ",
    instruction: "સુધારેલી ઍક્સેસિબિલિટી માટે રિયલ-ટાઈમ સ્પીચ ટ્રાન્સક્રિપ્શન.",
    start: "▶️ સાંભળવાનું શરૂ કરો",
    stop: "⏹️ બંધ કરો",
    selectLabel: "ભાષા પસંદ કરો:",
    placeholder: "અહીં તમારું ભાષણ દેખાશે...",
    download: "⬇️ ટ્રાન્સક્રિપ્ટ ડાઉનલોડ કરો"
  },
  "ml-IN": {
    title: "🎙️ ബഹുഭാഷാ വോയിസ് ടു ടെക്സ്റ്റ്",
    instruction: "മെച്ചപ്പെട്ട ആക്സസിബിലിറ്റിക്ക് റിയൽ-ടൈം സ്പീച്ച് ട്രാൻസ്ക്രിപ്ഷൻ.",
    start: "▶️ കേൾക്കാൻ തുടങ്ങുക",
    stop: "⏹️ നിർത്തുക",
    selectLabel: "ഭാഷ തിരഞ്ഞെടുക്കുക:",
    placeholder: "നിങ്ങളുടെ വാക്കുകൾ ഇവിടെ പ്രത്യക്ഷപ്പെടും...",
    download: "⬇️ ട്രാൻസ്ക്രിപ്റ്റ് ഡൗൺലോഡ് ചെയ്യുക"
  },
  "pa-IN": {
    title: "🎙️ ਬਹੁਭਾਸ਼ੀ ਵਾਇਸ ਤੋਂ ਟੈਕਸਟ",
    instruction: "ਵਧੀਆ ਪਹੁੰਚ ਲਈ ਅਸਲ ਸਮੇਂ ਦੀ ਵਾਣੀ ਟ੍ਰਾਂਸਕ੍ਰਿਪਸ਼ਨ.",
    start: "▶️ ਸੁਣਨਾ ਸ਼ੁਰੂ ਕਰੋ",
    stop: "⏹️ ਰੋਕੋ",
    selectLabel: "ਭਾਸ਼ਾ ਚੁਣੋ:",
    placeholder: "ਤੁਹਾਡੀ ਵਾਣੀ ਇੱਥੇ ਪ੍ਰਗਟ ਹੋਏਗੀ...",
    download: "⬇️ ਟ੍ਰਾਂਸਕ੍ਰਿਪਟ ਡਾਊਨਲੋਡ ਕਰੋ"
  },
  "ur-IN": {
    title: "🎙️ کثیر لسانی آواز سے متن",
    instruction: "بہتر رسائی کے لیے اصل وقت کی تقریر کی تحریر۔",
    start: "▶️ سننا شروع کریں",
    stop: "⏹️ روکیں",
    selectLabel: "زبان منتخب کریں:",
    placeholder: "آپ کی تقریر یہاں ظاہر ہوگی...",
    download: "⬇️ ٹرانسکرپٹ ڈاؤن لوڈ کریں"
  },
  "es-ES": {
    title: "🎙️ Voz a texto multilingüe",
    instruction: "Transcripción de voz en tiempo real para una mejor accesibilidad.",
    start: "▶️ Comenzar a escuchar",
    stop: "⏹️ Detener",
    selectLabel: "Seleccionar idioma:",
    placeholder: "El texto del discurso aparecerá aquí...",
    download: "⬇️ Descargar transcripción"
  },
  "fr-FR": {
    title: "🎙️ Voix multilingue vers texte",
    instruction: "Transcription vocale en temps réel pour une meilleure accessibilité.",
    start: "▶️ Commencer à écouter",
    stop: "⏹️ Arrêter",
    selectLabel: "Choisir la langue:",
    placeholder: "Le texte du discours apparaîtra ici...",
    download: "⬇️ Télécharger la transcription"
  },
  "de-DE": {
    title: "🎙️ Mehrsprachige Sprache zu Text",
    instruction: "Echtzeit-Sprachtranskription für bessere Zugänglichkeit.",
    start: "▶️ Zuhören starten",
    stop: "⏹️ Stoppen",
    selectLabel: "Sprache auswählen:",
    placeholder: "Die Sprachausgabe erscheint hier...",
    download: "⬇️ Transkript herunterladen"
  },
  "ru-RU": {
    title: "🎙️ Многоязычный голос в текст",
    instruction: "Преобразование речи в текст в реальном времени для улучшенной доступности.",
    start: "▶️ Начать прослушивание",
    stop: "⏹️ Остановить",
    selectLabel: "Выберите язык:",
    placeholder: "Здесь появится текст вашей речи...",
    download: "⬇️ Скачать транскрипт"
  },
  "ar-SA": {
    title: "🎙️ تحويل الصوت متعدد اللغات إلى نص",
    instruction: "نسخ الكلام في الوقت الحقيقي لتحسين الوصول.",
    start: "▶️ ابدأ الاستماع",
    stop: "⏹️ توقف",
    selectLabel: "اختر اللغة:",
    placeholder: "سيظهر نص الكلام هنا...",
    download: "⬇️ تنزيل النص"
  },
  "ja-JP": {
    title: "🎙️ 多言語音声からテキストへ",
    instruction: "アクセシビリティ向上のためのリアルタイム音声転写。",
    start: "▶️ 聞き取り開始",
    stop: "⏹️ 停止",
    selectLabel: "言語を選択:",
    placeholder: "ここに音声のテキストが表示されます...",
    download: "⬇️ トランスクリプトをダウンロード"
  },
  "zh-CN": {
    title: "🎙️ 多语言语音转文字",
    instruction: "为了更好的无障碍访问，实时语音转录。",
    start: "▶️ 开始聆听",
    stop: "⏹️ 停止",
    selectLabel: "选择语言:",
    placeholder: "语音文本将显示在这里...",
    download: "⬇️ 下载转录"
  },
  "ko-KR": {
    title: "🎙️ 다국어 음성 텍스트 변환",
    instruction: "접근성을 높이기 위한 실시간 음성 필기.",
    start: "▶️ 듣기 시작",
    stop: "⏹️ 중지",
    selectLabel: "언어 선택:",
    placeholder: "여기에 음성 텍스트가 표시됩니다...",
    download: "⬇️ 필기 다운로드"
  },
  "pt-PT": {
    title: "🎙️ Voz para Texto Multilíngue",
    instruction: "Transcrição de fala em tempo real para acessibilidade aprimorada.",
    start: "▶️ Começar a ouvir",
    stop: "⏹️ Parar",
    selectLabel: "Selecionar idioma:",
    placeholder: "A saída da fala aparecerá aqui...",
    download: "⬇️ Baixar Transcrição"
  }
};
if (!window.SpeechRecognition) {
  alert("Speech recognition is not supported in your browser. Please use Google Chrome.");
} else {
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.continuous = true;

  const outputDiv = document.getElementById("output");
  const startBtn = document.getElementById("start-btn");
  const stopBtn = document.getElementById("stop-btn");
  const languageSelector = document.getElementById("language");
  const titleText = document.getElementById("title-text");
  const instructionText = document.getElementById("instruction-text");
  const placeholderText = document.getElementById("placeholder-text");
  const labelSelectLanguage = document.getElementById("label-select-language");
  const emotionText = document.getElementById("emotion-text");
  const downloadBtn = document.getElementById("download-btn");

  let finalTranscript = "";
  let paragraphBuffer = "";
  let isListening = false;
  let lastSpeechTime = Date.now();
  let lastEmotion = "";
  let lastEmotionTime = Date.now();
  let audioContext, analyser, microphone, dataArray;

  function updateLanguageUI(lang) {
    const t = translations[lang] || translations["en-IN"];
    titleText.textContent = t.title;
    instructionText.textContent = t.instruction;
    startBtn.textContent = t.start;
    stopBtn.textContent = t.stop;
    labelSelectLanguage.textContent = t.selectLabel;
    placeholderText.textContent = t.placeholder;
    downloadBtn.textContent = t.download;
  }

  function detectEmotion(volume, pitch) {
    if (volume > 0.7 && pitch > 250) return "😠 Angry";
    if (volume < 0.3 && pitch < 180) return "😢 Sad";
    if (pitch > 200 && volume < 0.5) return "😊 Happy";
    return "😐 Neutral";
  }

  function updateEmotionDisplay(emotion) {
    if (emotionText && emotion !== lastEmotion) {
      emotionText.textContent = emotion;
      lastEmotion = emotion;
      lastEmotionTime = Date.now();
    }
  }

  languageSelector.addEventListener("change", () => {
    const selectedLang = languageSelector.value;
    recognition.lang = selectedLang;
    updateLanguageUI(selectedLang);
  });

  recognition.onresult = (event) => {
    let interimTranscript = "";
    const now = Date.now();

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript.trim();
      if (event.results[i].isFinal) {
        if (now - lastSpeechTime > 1500) {
          finalTranscript += `\n\n${paragraphBuffer.trim()}`;
          paragraphBuffer = transcript + " ";
        } else {
          paragraphBuffer += transcript + " ";
        }
        lastSpeechTime = now;
      } else {
        interimTranscript += transcript + " ";
      }
    }

    outputDiv.innerHTML = `
      <p class="text-dark" style="white-space:pre-wrap;">${finalTranscript}\n\n${paragraphBuffer.trim()}</p>
      <p class="text-muted fst-italic">${interimTranscript}</p>
    `;
    outputDiv.scrollTop = outputDiv.scrollHeight;
  };

  recognition.onend = () => {
    if (isListening) recognition.start();
  };

  startBtn.addEventListener("click", async () => {
    if (!isListening) {
      try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        dataArray = new Uint8Array(analyser.fftSize);

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        detectAudioEmotion();

        recognition.lang = languageSelector.value;
        recognition.start();
        isListening = true;
        startBtn.classList.add("disabled");
        stopBtn.classList.remove("disabled");
      } catch (err) {
        alert("Microphone access denied or unavailable.");
      }
    }
  });

  stopBtn.addEventListener("click", () => {
    if (isListening) {
      recognition.stop();
      isListening = false;
      startBtn.classList.remove("disabled");
      stopBtn.classList.add("disabled");
      updateEmotionDisplay("😐 Neutral");
    }
  });

  function detectAudioEmotion() {
    requestAnimationFrame(detectAudioEmotion);
    if (!analyser || !dataArray) return;
    analyser.getByteTimeDomainData(dataArray);

    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
      let v = (dataArray[i] - 128) / 128;
      sum += v * v;
    }
    const volume = Math.sqrt(sum / dataArray.length);
    const pitch = Math.random() * 400 + 100;

    const emotion = detectEmotion(volume, pitch);

    if (volume > 0.02) {
      lastEmotionTime = Date.now();
      updateEmotionDisplay(emotion);
    } else {
      if (Date.now() - lastEmotionTime > 3000) {
        updateEmotionDisplay("😐 Neutral");
      }
    }
  }

  downloadBtn.addEventListener("click", () => {
    const text = `${finalTranscript}\n\n${paragraphBuffer.trim()}`.trim();
    if (!text) return;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "transcript.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  updateLanguageUI(languageSelector.value);
}
