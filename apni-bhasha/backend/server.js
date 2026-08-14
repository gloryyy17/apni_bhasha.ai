const express = require("express");
const cors = require("cors");
require("dotenv").config();

const aiRoutes = require("./routes/ai");
const lessonRoutes = require("./routes/lesson");
const progressRoutes = require("./routes/progress");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/api/ai", aiRoutes);
app.use("/api/lesson", lessonRoutes);
app.use("/api/progress", progressRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Apni Bhasha backend is running 🚀",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});