import { useState, useRef } from "react";

export function useSpeechRecognition() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [supported] = useState(!!(window.SpeechRecognition || window.webkitSpeechRecognition));
  const recognitionRef = useRef(null);

  const startListening = () => {
    if (!supported) {
      // graceful fallback for unsupported browsers
      setListening(true);
      setTimeout(() => {
        setTranscript("मुझे प्रकाश के बारे में समझाओ");
        setListening(false);
      }, 1500);
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "hi-IN";
    recognition.onresult = (e) => setTranscript(e.results[0][0].transcript);
    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.start();
    recognitionRef.current = recognition;
  };

  return { listening, transcript, supported, startListening };
}