export const mockLessons = {
  light: {
    id: "light", title: "Light", subject: "Science", class: "8",
    levels: [
      { id: 1, type: "explanation", title: "What is Light?", content: "Light is a form of energy that makes it possible to see things. It travels incredibly fast in straight lines until it hits an object." },
      { id: 2, type: "mcq", question: "Which object produces its own light?", options: ["Sun", "Moon", "Mirror", "Book"], correctAnswer: "Sun", explanation: "The Sun produces its own light through nuclear fusion. The Moon just reflects sunlight." },
      { id: 3, type: "mcq", question: "How does light travel?", options: ["In straight lines", "In curves", "Only downward", "It doesn't move"], correctAnswer: "In straight lines", explanation: "Light travels in straight lines until something blocks or bends it." },
      { id: 4, type: "explanation", title: "Reflection", content: "Reflection happens when light bounces off a surface, like a mirror." },
      { id: 5, type: "mcq", question: "What happens when light hits a mirror?", options: ["It reflects back", "It disappears", "It turns into sound", "Nothing happens"], correctAnswer: "It reflects back", explanation: "Mirrors are smooth, so light bounces off them in a predictable way — that's reflection." },
    ],
  },
};

export const mockStudentProgress = {
  science: 82, maths: 64, english: 91,
  gaps: [
    { topic: "Fractions", status: "gap" },
    { topic: "Reflection", status: "learning" },
    { topic: "Cells", status: "mastered" },
  ],
};