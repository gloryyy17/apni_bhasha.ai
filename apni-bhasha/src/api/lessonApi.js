import { mockLessons } from "../data/mockLessons";

// TODO: Replace mock implementation with backend API
export async function generateLesson(topicId) {
  await new Promise((r) => setTimeout(r, 600));
  return mockLessons[topicId] ?? mockLessons.light;
}

export async function submitAnswer(lessonId, questionId, answer) {
  await new Promise((r) => setTimeout(r, 200));
  return { correct: true }; // actual checking happens client-side against mock data for now
}