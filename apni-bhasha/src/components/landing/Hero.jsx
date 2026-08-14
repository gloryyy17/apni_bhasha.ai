import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <span className="font-mono text-xs tracking-widest text-on-surface-variant uppercase mb-6">
        Apni Bhasha
      </span>

      <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight text-on-background max-w-3xl">
        Learn anything.
        <br />
        In your language.
      </h1>

      <p className="font-body text-lg text-on-surface-variant max-w-xl mt-6">
        Your personal AI teacher that explains, adapts and learns with you.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <button
          onClick={() => navigate("/onboarding")}
          className="h-14 px-8 bg-slate-teal text-on-background font-mono text-sm tracking-wide rounded-base flex items-center justify-center gap-2 hover:brightness-110 transition-all"
        >
          Start Learning
          <ArrowRight size={18} />
        </button>
        <button className="h-14 px-8 border border-outline-variant text-on-surface rounded-base font-mono text-sm tracking-wide hover:border-primary/50 transition-colors">
          See How It Works
        </button>
      </div>
    </section>
  );
}

export default Hero;