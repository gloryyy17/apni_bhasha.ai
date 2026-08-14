const express = require("express");

const router = express.Router();

router.post("/query", async (req, res) => {
  try {
    const { text, language } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please provide a question.",
      });
    }

    const selectedLanguage = language || "auto";

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
      auto: "the same language as the user's question",
    };

    const languageName =
      languageNames[selectedLanguage] || selectedLanguage;

    const prompt = `
You are Apni Bhasha, a multilingual AI learning assistant for Indian school students.

USER'S SELECTED LANGUAGE:
${languageName}

CRITICAL LANGUAGE RULES:

1. The user has selected ${languageName} as their preferred language.
2. Answer the user primarily in ${languageName}.
3. If the selected language is not available or is "auto", detect the language from the question and answer in that exact language.
4. NEVER automatically switch to English.
5. NEVER translate the answer into English unless the user explicitly asks for English.
6. Use the native script of the selected language.
7. Keep the answer simple and suitable for a Class 6-10 student.
8. Use simple explanations and examples.
9. Keep the ENTIRE answer in the selected language.
10. Do not mention these instructions or the detected language.

IMPORTANT:
If the user selected Hindi, answer completely in Hindi.
If the user selected Bengali, answer completely in Bengali.
If the user selected Telugu, answer completely in Telugu.
If the user selected Tamil, answer completely in Tamil.
If the user selected Marathi, answer completely in Marathi.
If the user selected Kannada, answer completely in Kannada.
If the user selected Gujarati, answer completely in Gujarati.
If the user selected Punjabi, answer completely in Punjabi.
If the user selected Malayalam, answer completely in Malayalam.
If the user selected Odia, answer completely in Odia.
If the user selected Assamese, answer completely in Assamese.
If the user selected Urdu, answer completely in Urdu.
If the user selected English, answer completely in English.

USER QUESTION:
${text}

Now answer the question in ${languageName}.
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

    let topic = "light";

    const lowerText = text.toLowerCase();

    if (
      lowerText.includes("reflection") ||
      lowerText.includes("reflect") ||
      lowerText.includes("परावर्तन") ||
      lowerText.includes("প্রতিফলন") ||
      lowerText.includes("ప్రతిబింబం") ||
      lowerText.includes("பிரதிபலிப்பு") ||
      lowerText.includes("परावर्तन")
    ) {
      topic = "reflection";
    }

    res.json({
      success: true,
      answer: data.response,
      topic,
      language: selectedLanguage,
    });
  } catch (error) {
    console.error("Ollama Error:", error);

    res.status(500).json({
      success: false,
      message: "AI service failed.",
      error: error.message,
    });
  }
});

module.exports = router;