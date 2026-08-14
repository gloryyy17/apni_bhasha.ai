import { ArrowRight } from "lucide-react";

function FinalCTA() {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest text-center">
      <h2 className="font-display font-semibold text-3xl md:text-5xl text-on-background leading-tight mb-2">
        Your next lesson
      </h2>
      <p className="font-display font-semibold text-3xl md:text-5xl text-primary leading-tight mb-12">
        starts with a question.
      </p>

      <button className="h-14 px-8 bg-slate-teal text-on-background font-mono text-sm tracking-wide rounded-base inline-flex items-center justify-center gap-2 hover:brightness-110 transition-all">
        Start Learning
        <ArrowRight size={18} />
      </button>
    </section>
  );
}

export default FinalCTA;