const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const progress = {
      science: 82,
      maths: 64,
      english: 91,
      gaps: [
        { topic: "Fractions", status: "gap" },
        { topic: "Reflection", status: "learning" },
        { topic: "Cells", status: "mastered" },
      ],
    };

    res.json({
      success: true,
      progress,
    });
  } catch (error) {
    console.error("Progress API Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch student progress.",
    });
  }
});

module.exports = router;