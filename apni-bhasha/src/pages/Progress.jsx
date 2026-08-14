import { useNavigate, useSearchParams } from "react-router-dom";

function Progress() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const topic = params.get("topic") || "light";
  const mastery = 82; // TODO: compute from actual answers once backend tracks this

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-margin-mobile text-center max-w-md mx-auto">
      <h1 className="font-display font-bold text-3xl text-on-background mb-2">🎉 Topic Complete!</h1>
      <p className="font-display text-xl text-primary mb-8 capitalize">{topic}</p>

      <div className="font-mono text-6xl text-primary mb-8">{mastery}%</div>

      <div className="w-full bg-surface-container border border-outline-variant/20 rounded-container p-6 text-left mb-6">
        <p className="font-mono text-xs text-tertiary uppercase tracking-widest mb-2">🟢 Strong</p>
        <p className="font-body text-sm text-on-surface-variant mb-4">Sources of light, Straight-line propagation</p>
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">🟡 Practice</p>
        <p className="font-body text-sm text-on-surface-variant">Reflection</p>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <button className="h-12 border border-outline-variant rounded-base font-mono text-sm">
          Practice Weak Area
        </button>
        <button onClick={() => navigate("/dashboard")} className="h-12 bg-slate-teal rounded-base font-mono text-sm">
          Continue Learning
        </button>
      </div>
    </div>
  );
}

export default Progress;