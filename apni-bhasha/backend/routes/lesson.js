const express = require("express");

const router = express.Router();

const lessons = {
  en: {
    light: {
      id: "light",
      title: "Light",
      subject: "Science",
      class: "8",
      levels: [
        {
          id: 1,
          type: "explanation",
          title: "What is Light?",
          content:
            "Light is a form of energy that makes it possible to see things. It travels in straight lines.",
        },
        {
          id: 2,
          type: "mcq",
          question: "Which object produces its own light?",
          options: ["Sun", "Moon", "Mirror", "Book"],
          correctAnswer: "Sun",
          explanation:
            "The Sun produces its own light. The Moon reflects sunlight.",
        },
        {
          id: 3,
          type: "mcq",
          question: "How does light travel?",
          options: [
            "In straight lines",
            "In curves",
            "Only downward",
            "It does not move",
          ],
          correctAnswer: "In straight lines",
          explanation:
            "Light travels in straight lines until something blocks it.",
        },
        {
          id: 4,
          type: "explanation",
          title: "Reflection",
          content:
            "Reflection happens when light hits a surface and bounces back.",
        },
        {
          id: 5,
          type: "mcq",
          question: "What happens when light hits a mirror?",
          options: [
            "It reflects back",
            "It disappears",
            "It turns into sound",
            "Nothing happens",
          ],
          correctAnswer: "It reflects back",
          explanation:
            "A mirror reflects light from its smooth surface.",
        },
      ],
    },

    reflection: {
      id: "reflection",
      title: "Reflection of Light",
      subject: "Science",
      class: "8",
      levels: [
        {
          id: 1,
          type: "explanation",
          title: "What is Reflection?",
          content:
            "Reflection happens when light hits a surface and bounces back. A mirror is a common example.",
        },
        {
          id: 2,
          type: "mcq",
          question: "What happens when light falls on a mirror?",
          options: [
            "It reflects back",
            "It disappears",
            "It becomes sound",
            "It stops moving",
          ],
          correctAnswer: "It reflects back",
          explanation:
            "A smooth mirror reflects light back from its surface.",
        },
        {
          id: 3,
          type: "explanation",
          title: "Everyday Example",
          content:
            "When you look into a mirror, light from your face reaches the mirror and reflects back to your eyes. This allows you to see your image.",
        },
        {
          id: 4,
          type: "mcq",
          question: "Which surface gives a clear reflection?",
          options: ["Mirror", "Rough wall", "Paper", "Cloth"],
          correctAnswer: "Mirror",
          explanation:
            "A smooth mirror gives a clear reflection.",
        },
        {
          id: 5,
          type: "mcq",
          question: "Which of these is an example of reflection?",
          options: [
            "Seeing yourself in a mirror",
            "Hearing an echo",
            "Boiling water",
            "Burning paper",
          ],
          correctAnswer: "Seeing yourself in a mirror",
          explanation:
            "Your image in a mirror is produced because light reflects from the mirror.",
        },
      ],
    },
  },

  hi: {
    light: {
      id: "light",
      title: "प्रकाश",
      subject: "विज्ञान",
      class: "8",
      levels: [
        {
          id: 1,
          type: "explanation",
          title: "प्रकाश क्या है?",
          content:
            "प्रकाश ऊर्जा का एक रूप है, जिसकी सहायता से हम वस्तुओं को देख सकते हैं। प्रकाश सीधी रेखा में चलता है।",
        },
        {
          id: 2,
          type: "mcq",
          question: "कौन सी वस्तु स्वयं प्रकाश उत्पन्न करती है?",
          options: ["सूर्य", "चंद्रमा", "दर्पण", "किताब"],
          correctAnswer: "सूर्य",
          explanation:
            "सूर्य स्वयं प्रकाश उत्पन्न करता है। चंद्रमा सूर्य के प्रकाश को परावर्तित करता है।",
        },
        {
          id: 3,
          type: "mcq",
          question: "प्रकाश किस प्रकार यात्रा करता है?",
          options: [
            "सीधी रेखा में",
            "घुमावदार रास्ते में",
            "केवल नीचे की ओर",
            "प्रकाश चलता नहीं है",
          ],
          correctAnswer: "सीधी रेखा में",
          explanation:
            "प्रकाश किसी बाधा के आने तक सीधी रेखा में चलता है।",
        },
        {
          id: 4,
          type: "explanation",
          title: "परावर्तन",
          content:
            "जब प्रकाश किसी सतह से टकराकर वापस लौटता है, तो इसे परावर्तन कहते हैं।",
        },
        {
          id: 5,
          type: "mcq",
          question: "जब प्रकाश दर्पण से टकराता है तो क्या होता है?",
          options: [
            "यह वापस परावर्तित होता है",
            "यह गायब हो जाता है",
            "यह ध्वनि में बदल जाता है",
            "कुछ नहीं होता",
          ],
          correctAnswer: "यह वापस परावर्तित होता है",
          explanation:
            "दर्पण की चिकनी सतह प्रकाश को वापस परावर्तित करती है।",
        },
      ],
    },

    reflection: {
      id: "reflection",
      title: "प्रकाश का परावर्तन",
      subject: "विज्ञान",
      class: "8",
      levels: [
        {
          id: 1,
          type: "explanation",
          title: "परावर्तन क्या है?",
          content:
            "जब प्रकाश किसी सतह से टकराकर वापस लौटता है, तो इसे परावर्तन कहते हैं। दर्पण इसका एक सामान्य उदाहरण है।",
        },
        {
          id: 2,
          type: "mcq",
          question: "जब प्रकाश दर्पण पर पड़ता है तो क्या होता है?",
          options: [
            "यह वापस परावर्तित होता है",
            "यह गायब हो जाता है",
            "यह ध्वनि बन जाता है",
            "यह रुक जाता है",
          ],
          correctAnswer: "यह वापस परावर्तित होता है",
          explanation:
            "दर्पण की चिकनी सतह प्रकाश को वापस परावर्तित करती है।",
        },
        {
          id: 3,
          type: "explanation",
          title: "दैनिक जीवन का उदाहरण",
          content:
            "जब आप दर्पण में देखते हैं, तो आपके चेहरे से आने वाला प्रकाश दर्पण से परावर्तित होकर आपकी आँखों तक पहुँचता है। इससे आपको अपना प्रतिबिंब दिखाई देता है।",
        },
        {
          id: 4,
          type: "mcq",
          question: "कौन सी सतह स्पष्ट प्रतिबिंब देती है?",
          options: ["दर्पण", "खुरदरी दीवार", "कागज़", "कपड़ा"],
          correctAnswer: "दर्पण",
          explanation:
            "चिकना दर्पण स्पष्ट प्रतिबिंब देता है।",
        },
        {
          id: 5,
          type: "mcq",
          question: "इनमें से परावर्तन का उदाहरण कौन सा है?",
          options: [
            "दर्पण में अपना प्रतिबिंब देखना",
            "प्रतिध्वनि सुनना",
            "पानी उबालना",
            "कागज़ जलाना",
          ],
          correctAnswer: "दर्पण में अपना प्रतिबिंब देखना",
          explanation:
            "दर्पण में प्रतिबिंब प्रकाश के परावर्तन के कारण दिखाई देता है।",
        },
      ],
    },
  },

  bn: {
    light: {
      id: "light",
      title: "আলো",
      subject: "বিজ্ঞান",
      class: "8",
      levels: [
        {
          id: 1,
          type: "explanation",
          title: "আলো কী?",
          content:
            "আলো এক ধরনের শক্তি, যার সাহায্যে আমরা বিভিন্ন বস্তু দেখতে পাই। আলো সরলরেখায় চলে।",
        },
        {
          id: 2,
          type: "mcq",
          question: "কোন বস্তু নিজে আলো উৎপন্ন করে?",
          options: ["সূর্য", "চাঁদ", "আয়না", "বই"],
          correctAnswer: "সূর্য",
          explanation:
            "সূর্য নিজে আলো উৎপন্ন করে। চাঁদ সূর্যের আলো প্রতিফলিত করে।",
        },
        {
          id: 3,
          type: "mcq",
          question: "আলো কীভাবে চলাচল করে?",
          options: [
            "সরলরেখায়",
            "বাঁকা পথে",
            "শুধু নিচের দিকে",
            "আলো চলে না",
          ],
          correctAnswer: "সরলরেখায়",
          explanation:
            "কোনো বাধা না পাওয়া পর্যন্ত আলো সরলরেখায় চলে।",
        },
        {
          id: 4,
          type: "explanation",
          title: "প্রতিফলন",
          content:
            "আলো কোনো পৃষ্ঠে পড়ে ফিরে এলে তাকে প্রতিফলন বলে।",
        },
        {
          id: 5,
          type: "mcq",
          question: "আলো আয়নায় পড়লে কী ঘটে?",
          options: [
            "আলো ফিরে প্রতিফলিত হয়",
            "আলো অদৃশ্য হয়ে যায়",
            "আলো শব্দে পরিণত হয়",
            "কিছুই ঘটে না",
          ],
          correctAnswer: "আলো ফিরে প্রতিফলিত হয়",
          explanation:
            "আয়নার মসৃণ পৃষ্ঠ আলোকে প্রতিফলিত করে।",
        },
      ],
    },

    reflection: {
      id: "reflection",
      title: "আলোর প্রতিফলন",
      subject: "বিজ্ঞান",
      class: "8",
      levels: [
        {
          id: 1,
          type: "explanation",
          title: "প্রতিফলন কী?",
          content:
            "আলো কোনো পৃষ্ঠে পড়ে ফিরে এলে তাকে প্রতিফলন বলে। আয়না এর একটি সাধারণ উদাহরণ।",
        },
        {
          id: 2,
          type: "mcq",
          question: "আলো আয়নায় পড়লে কী ঘটে?",
          options: [
            "আলো ফিরে প্রতিফলিত হয়",
            "আলো অদৃশ্য হয়ে যায়",
            "আলো শব্দে পরিণত হয়",
            "আলো থেমে যায়",
          ],
          correctAnswer: "আলো ফিরে প্রতিফলিত হয়",
          explanation:
            "আয়নার মসৃণ পৃষ্ঠ আলোকে প্রতিফলিত করে।",
        },
        {
          id: 3,
          type: "explanation",
          title: "দৈনন্দিন জীবনের উদাহরণ",
          content:
            "আপনি যখন আয়নায় তাকান, তখন আপনার মুখ থেকে আসা আলো আয়নায় পড়ে আপনার চোখের দিকে ফিরে আসে। তাই আপনি নিজের প্রতিবিম্ব দেখতে পান।",
        },
        {
          id: 4,
          type: "mcq",
          question: "কোন পৃষ্ঠ স্পষ্ট প্রতিফলন দেয়?",
          options: ["আয়না", "খসখসে দেয়াল", "কাগজ", "কাপড়"],
          correctAnswer: "আয়না",
          explanation:
            "মসৃণ আয়না স্পষ্ট প্রতিফলন দেয়।",
        },
        {
          id: 5,
          type: "mcq",
          question: "নিচের কোনটি প্রতিফলনের উদাহরণ?",
          options: [
            "আয়নায় নিজের প্রতিবিম্ব দেখা",
            "প্রতিধ্বনি শোনা",
            "জল ফুটানো",
            "কাগজ পোড়ানো",
          ],
          correctAnswer: "আয়নায় নিজের প্রতিবিম্ব দেখা",
          explanation:
            "আয়নায় প্রতিবিম্ব আলোর প্রতিফলনের কারণে দেখা যায়।",
        },
      ],
    },
  },

  te: {
    light: {
      id: "light",
      title: "కాంతి",
      subject: "సైన్స్",
      class: "8",
      levels: [
        {
          id: 1,
          type: "explanation",
          title: "కాంతి అంటే ఏమిటి?",
          content:
            "కాంతి ఒక రకమైన శక్తి. దీని సహాయంతో మనం వస్తువులను చూడగలుగుతాము. కాంతి సరళ రేఖలో ప్రయాణిస్తుంది.",
        },
        {
          id: 2,
          type: "mcq",
          question: "ఏ వస్తువు స్వయంగా కాంతిని ఉత్పత్తి చేస్తుంది?",
          options: ["సూర్యుడు", "చంద్రుడు", "అద్దం", "పుస్తకం"],
          correctAnswer: "సూర్యుడు",
          explanation:
            "సూర్యుడు స్వయంగా కాంతిని ఉత్పత్తి చేస్తాడు. చంద్రుడు సూర్యకాంతిని ప్రతిబింబిస్తాడు.",
        },
        {
          id: 3,
          type: "mcq",
          question: "కాంతి ఎలా ప్రయాణిస్తుంది?",
          options: [
            "సరళ రేఖలో",
            "వంకరగా",
            "కేవలం క్రిందికి",
            "కాంతి ప్రయాణించదు",
          ],
          correctAnswer: "సరళ రేఖలో",
          explanation:
            "అడ్డంకి ఎదురయ్యే వరకు కాంతి సరళ రేఖలో ప్రయాణిస్తుంది.",
        },
        {
          id: 4,
          type: "explanation",
          title: "పరావర్తనం",
          content:
            "కాంతి ఒక ఉపరితలాన్ని తాకి తిరిగి వచ్చినప్పుడు దానిని పరావర్తనం అంటారు.",
        },
        {
          id: 5,
          type: "mcq",
          question: "కాంతి అద్దాన్ని తాకినప్పుడు ఏమి జరుగుతుంది?",
          options: [
            "అది తిరిగి పరావర్తనం చెందుతుంది",
            "అది అదృశ్యమవుతుంది",
            "అది శబ్దంగా మారుతుంది",
            "ఏమీ జరగదు",
          ],
          correctAnswer: "అది తిరిగి పరావర్తనం చెందుతుంది",
          explanation:
            "అద్దం యొక్క మృదువైన ఉపరితలం కాంతిని తిరిగి పరావర్తనం చేస్తుంది.",
        },
      ],
    },

    reflection: {
      id: "reflection",
      title: "కాంతి పరావర్తనం",
      subject: "సైన్స్",
      class: "8",
      levels: [
        {
          id: 1,
          type: "explanation",
          title: "పరావర్తనం అంటే ఏమిటి?",
          content:
            "కాంతి ఒక ఉపరితలాన్ని తాకి తిరిగి వచ్చినప్పుడు దానిని పరావర్తనం అంటారు. అద్దం దీనికి ఒక సాధారణ ఉదాహరణ.",
        },
        {
          id: 2,
          type: "mcq",
          question: "కాంతి అద్దంపై పడినప్పుడు ఏమి జరుగుతుంది?",
          options: [
            "అది తిరిగి పరావర్తనం చెందుతుంది",
            "అది అదృశ్యమవుతుంది",
            "అది శబ్దంగా మారుతుంది",
            "అది ఆగిపోతుంది",
          ],
          correctAnswer: "అది తిరిగి పరావర్తనం చెందుతుంది",
          explanation:
            "అద్దం యొక్క మృదువైన ఉపరితలం కాంతిని తిరిగి పరావర్తనం చేస్తుంది.",
        },
        {
          id: 3,
          type: "explanation",
          title: "రోజువారీ జీవితంలోని ఉదాహరణ",
          content:
            "మీరు అద్దంలో చూసినప్పుడు, మీ ముఖం నుండి వచ్చిన కాంతి అద్దాన్ని తాకి మీ కళ్ల వైపు తిరిగి వస్తుంది. అందువల్ల మీరు మీ ప్రతిబింబాన్ని చూడగలుగుతారు.",
        },
        {
          id: 4,
          type: "mcq",
          question: "ఏ ఉపరితలం స్పష్టమైన పరావర్తనాన్ని ఇస్తుంది?",
          options: ["అద్దం", "గరుకైన గోడ", "కాగితం", "బట్ట"],
          correctAnswer: "అద్దం",
          explanation:
            "మృదువైన అద్దం స్పష్టమైన పరావర్తనాన్ని ఇస్తుంది.",
        },
        {
          id: 5,
          type: "mcq",
          question: "కింది వాటిలో పరావర్తనానికి ఉదాహరణ ఏది?",
          options: [
            "అద్దంలో మన ప్రతిబింబాన్ని చూడటం",
            "ప్రతిధ్వని వినడం",
            "నీటిని మరిగించడం",
            "కాగితాన్ని కాల్చడం",
          ],
          correctAnswer: "అద్దంలో మన ప్రతిబింబాన్ని చూడటం",
          explanation:
            "అద్దంలో మన ప్రతిబింబం కాంతి పరావర్తనం వల్ల కనిపిస్తుంది.",
        },
      ],
    },
  },

  ta: {
    light: {
      id: "light",
      title: "ஒளி",
      subject: "அறிவியல்",
      class: "8",
      levels: [
        {
          id: 1,
          type: "explanation",
          title: "ஒளி என்றால் என்ன?",
          content:
            "ஒளி ஒரு வகையான ஆற்றல். அதன் உதவியால் நாம் பொருட்களைப் பார்க்க முடியும். ஒளி நேர்கோட்டில் பயணிக்கிறது.",
        },
        {
          id: 2,
          type: "mcq",
          question: "எந்த பொருள் தானாகவே ஒளியை உருவாக்குகிறது?",
          options: ["சூரியன்", "நிலா", "கண்ணாடி", "புத்தகம்"],
          correctAnswer: "சூரியன்",
          explanation:
            "சூரியன் தானாகவே ஒளியை உருவாக்குகிறது. நிலா சூரிய ஒளியை பிரதிபலிக்கிறது.",
        },
        {
          id: 3,
          type: "mcq",
          question: "ஒளி எவ்வாறு பயணிக்கிறது?",
          options: [
            "நேர்கோட்டில்",
            "வளைந்து",
            "கீழ்நோக்கி மட்டும்",
            "ஒளி பயணிக்காது",
          ],
          correctAnswer: "நேர்கோட்டில்",
          explanation:
            "தடை ஏற்படும் வரை ஒளி நேர்கோட்டில் பயணிக்கிறது.",
        },
        {
          id: 4,
          type: "explanation",
          title: "பிரதிபலிப்பு",
          content:
            "ஒளி ஒரு மேற்பரப்பில் பட்டு திரும்பி வரும்போது அது பிரதிபலிப்பு எனப்படுகிறது.",
        },
        {
          id: 5,
          type: "mcq",
          question: "ஒளி கண்ணாடியில் படும்போது என்ன நடக்கும்?",
          options: [
            "அது பிரதிபலித்து திரும்பும்",
            "அது மறைந்துவிடும்",
            "அது ஒலியாக மாறும்",
            "எதுவும் நடக்காது",
          ],
          correctAnswer: "அது பிரதிபலித்து திரும்பும்",
          explanation:
            "கண்ணாடியின் மென்மையான மேற்பரப்பு ஒளியை பிரதிபலிக்கிறது.",
        },
      ],
    },

    reflection: {
      id: "reflection",
      title: "ஒளியின் பிரதிபலிப்பு",
      subject: "அறிவியல்",
      class: "8",
      levels: [
        {
          id: 1,
          type: "explanation",
          title: "பிரதிபலிப்பு என்றால் என்ன?",
          content:
            "ஒளி ஒரு மேற்பரப்பில் பட்டு திரும்பி வரும்போது அது பிரதிபலிப்பு எனப்படுகிறது. கண்ணாடி இதற்கு ஒரு பொதுவான உதாரணம்.",
        },
        {
          id: 2,
          type: "mcq",
          question: "ஒளி கண்ணாடியில் படும்போது என்ன நடக்கும்?",
          options: [
            "அது பிரதிபலித்து திரும்பும்",
            "அது மறைந்துவிடும்",
            "அது ஒலியாக மாறும்",
            "அது நின்றுவிடும்",
          ],
          correctAnswer: "அது பிரதிபலித்து திரும்பும்",
          explanation:
            "கண்ணாடியின் மென்மையான மேற்பரப்பு ஒளியை பிரதிபலிக்கிறது.",
        },
        {
          id: 3,
          type: "explanation",
          title: "அன்றாட வாழ்க்கை உதாரணம்",
          content:
            "நீங்கள் கண்ணாடியில் பார்க்கும்போது, உங்கள் முகத்திலிருந்து வரும் ஒளி கண்ணாடியை அடைந்து உங்கள் கண்களை நோக்கி திரும்புகிறது. இதனால் உங்கள் பிரதிபலிப்பை பார்க்க முடிகிறது.",
        },
        {
          id: 4,
          type: "mcq",
          question: "எந்த மேற்பரப்பு தெளிவான பிரதிபலிப்பை வழங்குகிறது?",
          options: ["கண்ணாடி", "கரடுமுரடான சுவர்", "காகிதம்", "துணி"],
          correctAnswer: "கண்ணாடி",
          explanation:
            "மென்மையான கண்ணாடி தெளிவான பிரதிபலிப்பை வழங்குகிறது.",
        },
        {
          id: 5,
          type: "mcq",
          question: "பின்வருவனவற்றில் பிரதிபலிப்புக்கு உதாரணம் எது?",
          options: [
            "கண்ணாடியில் நம் பிரதிபலிப்பைப் பார்ப்பது",
            "எதிரொலி கேட்பது",
            "தண்ணீரைக் கொதிக்க வைப்பது",
            "காகிதத்தை எரிப்பது",
          ],
          correctAnswer: "கண்ணாடியில் நம் பிரதிபலிப்பைப் பார்ப்பது",
          explanation:
            "ஒளியின் பிரதிபலிப்பினால் கண்ணாடியில் நம் பிரதிபலிப்பு தெரிகிறது.",
        },
      ],
    },
  },

  mr: {
    light: {
      id: "light",
      title: "प्रकाश",
      subject: "विज्ञान",
      class: "8",
      levels: [
        {
          id: 1,
          type: "explanation",
          title: "प्रकाश म्हणजे काय?",
          content:
            "प्रकाश हा ऊर्जेचा एक प्रकार आहे. त्याच्या मदतीने आपण वस्तू पाहू शकतो. प्रकाश सरळ रेषेत प्रवास करतो.",
        },
        {
          id: 2,
          type: "mcq",
          question: "कोणती वस्तू स्वतःचा प्रकाश निर्माण करते?",
          options: ["सूर्य", "चंद्र", "आरसा", "पुस्तक"],
          correctAnswer: "सूर्य",
          explanation:
            "सूर्य स्वतःचा प्रकाश निर्माण करतो. चंद्र सूर्यप्रकाश परावर्तित करतो.",
        },
        {
          id: 3,
          type: "mcq",
          question: "प्रकाश कसा प्रवास करतो?",
          options: [
            "सरळ रेषेत",
            "वक्र मार्गाने",
            "फक्त खाली",
            "प्रकाश प्रवास करत नाही",
          ],
          correctAnswer: "सरळ रेषेत",
          explanation:
            "अडथळा येईपर्यंत प्रकाश सरळ रेषेत प्रवास करतो.",
        },
        {
          id: 4,
          type: "explanation",
          title: "परावर्तन",
          content:
            "प्रकाश एखाद्या पृष्ठभागावर पडून परत आल्यास त्याला परावर्तन म्हणतात.",
        },
        {
          id: 5,
          type: "mcq",
          question: "प्रकाश आरशावर पडल्यावर काय होते?",
          options: [
            "तो परावर्तित होतो",
            "तो नाहीसा होतो",
            "तो आवाजात बदलतो",
            "काहीही होत नाही",
          ],
          correctAnswer: "तो परावर्तित होतो",
          explanation:
            "आरशाचा गुळगुळीत पृष्ठभाग प्रकाश परावर्तित करतो.",
        },
      ],
    },

    reflection: {
      id: "reflection",
      title: "प्रकाशाचे परावर्तन",
      subject: "विज्ञान",
      class: "8",
      levels: [
        {
          id: 1,
          type: "explanation",
          title: "परावर्तन म्हणजे काय?",
          content:
            "प्रकाश एखाद्या पृष्ठभागावर पडून परत आल्यास त्याला परावर्तन म्हणतात. आरसा हे त्याचे सामान्य उदाहरण आहे.",
        },
        {
          id: 2,
          type: "mcq",
          question: "प्रकाश आरशावर पडल्यावर काय होते?",
          options: [
            "तो परावर्तित होतो",
            "तो नाहीसा होतो",
            "तो आवाजात बदलतो",
            "तो थांबतो",
          ],
          correctAnswer: "तो परावर्तित होतो",
          explanation:
            "आरशाचा गुळगुळीत पृष्ठभाग प्रकाश परावर्तित करतो.",
        },
        {
          id: 3,
          type: "explanation",
          title: "दैनंदिन जीवनातील उदाहरण",
          content:
            "तुम्ही आरशात पाहता तेव्हा तुमच्या चेहऱ्यावरून येणारा प्रकाश आरशावर पडतो आणि तुमच्या डोळ्यांकडे परत येतो. त्यामुळे तुम्हाला तुमचे प्रतिबिंब दिसते.",
        },
        {
          id: 4,
          type: "mcq",
          question: "कोणता पृष्ठभाग स्पष्ट परावर्तन देतो?",
          options: ["आरसा", "खडबडीत भिंत", "कागद", "कापड"],
          correctAnswer: "आरसा",
          explanation:
            "गुळगुळीत आरसा स्पष्ट परावर्तन देतो.",
        },
        {
          id: 5,
          type: "mcq",
          question: "यापैकी परावर्तनाचे उदाहरण कोणते?",
          options: [
            "आरशात स्वतःचे प्रतिबिंब पाहणे",
            "प्रतिध्वनी ऐकणे",
            "पाणी उकळणे",
            "कागद जाळणे",
          ],
          correctAnswer: "आरशात स्वतःचे प्रतिबिंब पाहणे",
          explanation:
            "प्रकाशाच्या परावर्तनामुळे आरशात आपले प्रतिबिंब दिसते.",
        },
      ],
    },
  },
};

router.post("/generate", (req, res) => {
  try {
    const { topic, language = "en" } = req.body;

    if (!topic) {
      return res.status(400).json({
        success: false,
        message: "Topic is required.",
      });
    }

    const supportedLanguages = ["en", "hi", "bn", "te", "ta", "mr"];

    const selectedLanguage = supportedLanguages.includes(language)
      ? language
      : "en";

    const languageLessons = lessons[selectedLanguage];

    const lesson =
      languageLessons[topic] ||
      languageLessons.light;

    return res.json({
      success: true,
      lesson,
      language: selectedLanguage,
    });
  } catch (error) {
    console.error("Lesson API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate lesson.",
      error: error.message,
    });
  }
});

module.exports = router;