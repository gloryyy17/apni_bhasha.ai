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
You are Apni Bhasha AI, an educational assistant for Indian students.

Answer the student's question clearly and accurately.

Rules:
- Use simple language.
- If the question is in Hindi or Hinglish, answer in Hindi/Hinglish.
- If the question is in English, answer in English.
- Give a useful explanation with a simple example when appropriate.
- Do not produce unnecessary headings or strange formatting.

Student question:
${text}
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