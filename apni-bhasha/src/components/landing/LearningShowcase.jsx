import { Sun, Eye } from "lucide-react";

function LearningShowcase() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display font-semibold text-3xl md:text-5xl text-on-background text-center mb-16 max-w-xl mx-auto leading-tight">
          Learning shouldn't feel like memorizing.
        </h2>

        {/* Mock lesson card — mirrors the real Learning Session UI we'll build later */}
        <div className="bg-surface-container border border-outline-variant/20 rounded-container p-8 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              Core Concept
            </span>
            <span className="font-mono text-xs text-on-surface-variant">
              Level 1 of 5
            </span>
          </div>

          <h3 className="font-display font-bold text-2xl md:text-3xl text-on-background mb-4">
            What is Light?
          </h3>

          <p className="font-body text-base text-on-surface-variant mb-6">
            Light is a form of energy that makes it possible to see things.
            It travels incredibly fast in straight lines until it hits an
            object.
          </p>

          <div className="bg-surface-container-lowest rounded-base p-8 flex items-center justify-center gap-6">
            <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center">
              <Sun size={22} className="text-primary" />
            </div>
            <div className="w-16 h-px bg-outline-variant" />
            <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center">
              <Eye size={22} className="text-on-surface-variant" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningShowcase;