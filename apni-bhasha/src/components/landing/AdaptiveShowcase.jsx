import { X, Check, Lightbulb } from "lucide-react";

function AdaptiveShowcase() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-2xl mx-auto">
      <h2 className="font-display font-semibold text-3xl md:text-5xl text-on-background text-center mb-4 leading-tight">
        It doesn't just know the answer.
      </h2>
      <p className="font-display font-semibold text-3xl md:text-5xl text-primary text-center mb-16 leading-tight">
        It knows when you don't.
      </p>

      <div className="flex flex-col gap-4">
        {/* Wrong answer state */}
        <div className="bg-surface-container border border-error/30 rounded-container p-6 flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center shrink-0 mt-1">
            <X size={16} className="text-error" />
          </div>
          <div>
            <p className="font-body text-base text-on-surface mb-1">
              "Reflection occurs when light is reflected from a surface."
            </p>
            <p className="font-mono text-xs text-error uppercase tracking-widest">
              Not quite
            </p>
          </div>
        </div>

        {/* Adaptive response */}
        <div className="bg-primary/10 border border-primary/30 rounded-container p-6 flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
            <Lightbulb size={16} className="text-primary" />
          </div>
          <div>
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
              Let's try this another way
            </p>
            <p className="font-body text-base text-on-surface">
              Think about throwing a ball at a wall. It hits the wall and
              comes back. Light can behave in a similar way.
            </p>
          </div>
        </div>

        {/* Correct answer after adapting */}
        <div className="bg-surface-container border border-tertiary/30 rounded-container p-6 flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0 mt-1">
            <Check size={16} className="text-tertiary" />
          </div>
          <div>
            <p className="font-body text-base text-on-surface mb-1">
              "Light bounces back, like a ball hitting a wall!"
            </p>
            <p className="font-mono text-xs text-tertiary uppercase tracking-widest">
              Exactly right
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdaptiveShowcase;