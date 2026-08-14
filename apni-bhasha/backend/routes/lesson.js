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

router.post("/generate", (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic) {
      return res.status(400).json({
        success: false,
        message: "Topic is required.",
      });
    }

    const lesson = lessons[topic] || lessons.light;

    res.json({
      success: true,
      lesson,
    });
  } catch (error) {
    console.error("Lesson API Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate lesson.",
    });
  }
});

module.exports = router;