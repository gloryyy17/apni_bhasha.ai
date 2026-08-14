const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export async function getStudentProgress() {
  try {
    const response = await fetch(`${API_BASE_URL}/progress`);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch progress");
    }

    return data.progress;
  } catch (error) {
    console.error("Progress API Error:", error);
    throw error;
  }
}