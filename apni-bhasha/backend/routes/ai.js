const express = require("express");

const router = express.Router();

router.post("/query", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please provide a question.",
      });
    }

    const prompt = `
You are Apni Bhasha, a multilingual AI learning assistant for Indian school students.

CRITICAL LANGUAGE RULE:
1. First detect the language and script of the user's question.
2. Answer ONLY in the same language and script.
3. Never automatically switch to English.
4. Never translate the answer to English unless the user asks for translation.
5. If the question is written in an Indian language, respond in that same Indian language.
6. Use simple vocabulary suitable for a school student.
7. Keep technical/scientific terms understandable in the user's language.
8. If the user mixes a few English words into an Indian-language question, still answer primarily in the Indian language.
9. Preserve the language throughout the entire answer.

Examples:
- Hindi question → Hindi answer
- Bengali question → Bengali answer
- Telugu question → Telugu answer
- Tamil question → Tamil answer
- Marathi question → Marathi answer
- Kannada question → Kannada answer
- Gujarati question → Gujarati answer
- Punjabi question → Punjabi answer
- Malayalam question → Malayalam answer
- Odia question → Odia answer
- Assamese question → Assamese answer
- Urdu question → Urdu answer
- English question → English answer

USER QUESTION:
${text}

Now answer the question in the EXACT SAME LANGUAGE AND SCRIPT used by the user.
`;

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gemma2:2b",
        prompt: prompt,
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
      lowerText.includes("परावर्तन")
    ) {
      topic = "reflection";
    }

res.json({
  success: true,
  answer: data.response,
  topic,
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