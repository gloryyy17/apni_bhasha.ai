// TODO: Replace mock implementation with backend API (OCR + AI)
export async function analyzeTextbook(image) {
  await new Promise((r) => setTimeout(r, 1500));
  return { concepts: ["Reflection", "Refraction", "Dispersion"] };
}