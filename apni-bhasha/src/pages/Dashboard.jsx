import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mic, Camera, Send } from "lucide-react";
import { sendVoiceQuery } from "../api/aiApi";
import { getStudentProgress } from "../api/progressApi";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [processing, setProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    getStudentProgress().then(setProgress);
  }, []);

  const processingLabels = ["Understanding your question...", "Finding your topic...", "Creating your lesson..."];

  const handleAsk = async () => {
    if (!query.trim()) return;
    setProcessing(true);
    for (let i = 0; i < processingLabels.length; i++) {
      setProcessingStep(i);
      await new Promise((r) => setTimeout(r, 700));
    }
    const result = await sendVoiceQuery(query);
    setProcessing(false);
    navigate(`/learning?topic=${result.topic}`);
  };

  if (processing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-margin-mobile text-center">
        <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin mb-6" />
        <p className="font-mono text-sm text-on-surface-variant tracking-widest uppercase">
          {processingLabels[processingStep]}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-margin-mobile md:px-margin-desktop py-16 max-w-2xl mx-auto">
      <h1 className="font-display text-2xl text-on-background mb-2">👋 Hi there</h1>
      <h2 className="font-display font-semibold text-3xl md:text-4xl text-on-background mb-8">
        What do you want to learn today?
      </h2>

      <div className="bg-surface-container border border-outline-variant/20 rounded-container p-4 flex items-center gap-3 mb-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAsk()}
          placeholder="मुझे प्रकाश के बारे में समझाओ"
          className="flex-1 bg-transparent outline-none font-body text-lg text-on-surface placeholder:text-on-surface-variant/50"
        />
        <button onClick={handleAsk} className="w-10 h-10 rounded-full bg-slate-teal flex items-center justify-center shrink-0">
          <Send size={16} />
        </button>
      </div>

      <div className="flex gap-3 mb-16">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm">
          <Mic size={14} /> Speak
        </button>
        <button onClick={() => navigate("/scanner")} className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm">
          <Camera size={14} /> Scan textbook
        </button>
      </div>

      {progress && (
        <>
          <div className="bg-surface-container border border-outline-variant/20 rounded-container p-6 mb-8">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">Continue Learning</p>
            <h3 className="font-display font-semibold text-xl text-on-background mb-1">🔬 Light</h3>
            <p className="font-body text-sm text-on-surface-variant mb-4">Class 8 • Science • Level 3/5</p>
            <div className="h-1 bg-outline-variant/30 rounded-full mb-4">
              <div className="h-1 bg-primary rounded-full" style={{ width: "60%" }} />
            </div>
            <button onClick={() => navigate("/learning?topic=light")} className="font-mono text-sm text-primary">
              Continue →
            </button>
          </div>

          <div className="mb-8">
            <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-4">My Progress</p>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between font-body text-sm text-on-surface">
                <span>Science</span><span>{progress.science}%</span>
              </div>
              <div className="flex justify-between font-body text-sm text-on-surface">
                <span>Maths</span><span>{progress.maths}%</span>
              </div>
              <div className="flex justify-between font-body text-sm text-on-surface">
                <span>English</span><span>{progress.english}%</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;