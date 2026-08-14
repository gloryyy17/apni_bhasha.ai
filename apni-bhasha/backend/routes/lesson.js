const express = require("express");

const router = express.Router();

const lessons = {
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
          "Light is a form of energy that makes it possible to see things. It travels incredibly fast in straight lines until it hits an object.",
      },
      {
        id: 2,
        type: "mcq",
        question: "Which object produces its own light?",
        options: ["Sun", "Moon", "Mirror", "Book"],
        correctAnswer: "Sun",
        explanation:
          "The Sun produces its own light through nuclear fusion. The Moon just reflects sunlight.",
      },
      {
        id: 3,
        type: "mcq",
        question: "How does light travel?",
        options: [
          "In straight lines",
          "In curves",
          "Only downward",
          "It doesn't move",
        ],
        correctAnswer: "In straight lines",
        explanation:
          "Light travels in straight lines until something blocks or bends it.",
      },
      {
        id: 4,
        type: "explanation",
        title: "Reflection",
        content:
          "Reflection happens when light bounces off a surface, like a mirror.",
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
          "Mirrors are smooth, so light bounces off them in a predictable way — that's reflection.",
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
          "Reflection happens when light hits a surface and bounces back. A mirror is a common example of reflection.",
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
          "A smooth mirror gives a clear and predictable reflection.",
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
};

const languageNames = {
  hi: "Hindi",
  bn: "Bengali",
  te: "Telugu",
  ta: "Tamil",
  mr: "Marathi",
  kn: "Kannada",
  gu: "Gujarati",
  pa: "Punjabi",
  ml: "Malayalam",
  or: "Odia",
  as: "Assamese",
  ur: "Urdu",
  en: "English",
};

router.post("/generate", async (req, res) => {
  try {
    const { topic, language } = req.body;

    if (!topic) {
      return res.status(400).json({
        success: false,
        message: "Topic is required.",
      });
    }

    const baseLesson = lessons[topic] || lessons.light;

    const selectedLanguage = language || "en";
    const languageName =
      languageNames[selectedLanguage] || selectedLanguage;

    // English lesson requested
    if (selectedLanguage === "en") {
      return res.json({
        success: true,
        lesson: baseLesson,
      });
    }

    const prompt = `
You are Apni Bhasha, an educational AI for school students.

Translate and adapt the following Class 8 lesson into ${languageName}.

IMPORTANT RULES:
1. Return ONLY valid JSON.
2. Keep exactly the same number of levels.
3. Keep the same level IDs.
4. Keep the same type for every level.
5. Translate the title.
6. Translate every explanation.
7. Translate every MCQ question.
8. Translate every option.
9. Translate every explanation.
10. The correctAnswer MUST exactly match one of the translated options.
11. Do not add markdown.
12. Use simple language suitable for a Class 8 student.
13. Use the native script of ${languageName}.

Return exactly this structure:

{
  "id": "${baseLesson.id}",
  "title": "translated title",
  "subject": "Science",
  "class": "8",
  "levels": [
    {
      "id": 1,
      "type": "explanation",
      "title": "translated title",
      "content": "translated content"
    }
  ]
}

Original lesson:
${JSON.stringify(baseLesson)}
`;

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gemma2:2b",
        prompt,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const data = await response.json();

    let translatedLesson;

    try {
      const cleaned = data.response
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      translatedLesson = JSON.parse(cleaned);
    } catch (parseError) {
      console.error("Lesson JSON Parse Error:", parseError);

      // Fallback to English lesson if AI JSON fails
      translatedLesson = baseLesson;
    }

    res.json({
      success: true,
      lesson: translatedLesson,
      language: selectedLanguage,
    });
  } catch (error) {
    console.error("Lesson API Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate lesson.",
      error: error.message,
    });
  }
});

module.exports = router;