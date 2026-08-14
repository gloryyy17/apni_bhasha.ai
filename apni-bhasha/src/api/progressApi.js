import { mockStudentProgress } from "../data/mockLessons";

// TODO: Replace mock implementation with backend API
export async function getStudentProgress() {
  await new Promise((r) => setTimeout(r, 300));
  return mockStudentProgress;
}