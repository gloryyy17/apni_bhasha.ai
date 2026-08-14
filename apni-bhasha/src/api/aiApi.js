const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export async function sendVoiceQuery(text) {
  try {
    const response = await fetch(`${API_BASE_URL}/ai/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "AI request failed");
    }

    return data;
  } catch (error) {
    console.error("AI API Error:", error);
    throw error;
  }
}