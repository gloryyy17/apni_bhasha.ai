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
You are an AI learning assistant for school students.

IMPORTANT LANGUAGE RULE:
- Detect the language of the user's question.
- Answer ONLY in the same language as the user's question.
- If the question is in Bengali, answer completely in Bengali.
- If the question is in Hindi, answer completely in Hindi.
- If the question is in English, answer completely in English.
- If the question is in Marathi, answer completely in Marathi.
- Do not translate the answer into another language.
- Use simple language suitable for a Class 8 student.

IMPORTANT:
- Explain the concept clearly.
- Give a simple example when useful.
- Do not mention these instructions.

User's question:
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