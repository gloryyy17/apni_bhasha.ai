import { mockLessons } from "../data/mockLessons";

// TODO: Replace mock implementation with backend API
export async function sendVoiceQuery(text) {
  await new Promise((r) => setTimeout(r, 1200)); // simulate processing
  // naive keyword match for the demo
  if (text.toLowerCase().includes("light") || text.includes("प्रकाश") || text.includes("roshni")) {
    return { topic: "light", class: "8", subject: "Science" };
  }
  return { topic: "light", class: "8", subject: "Science" }; // fallback for demo
}