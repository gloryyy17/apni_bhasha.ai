const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export async function generateLesson(topicId) {
  try {
    const response = await fetch(`${API_BASE_URL}/lesson/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic: topicId }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to generate lesson");
    }

    return data.lesson;
  } catch (error) {
    console.error("Lesson API Error:", error);
    throw error;
  }
}

export async function submitAnswer(lessonId, questionId, answer) {
  return {
    correct: true,
  };
}