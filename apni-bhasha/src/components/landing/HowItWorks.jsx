const steps = [
  {
    number: "01",
    title: "Ask",
    description: "Student asks naturally, in their own language.",
  },
  {
    number: "02",
    title: "Understand",
    description: "AI identifies the class, subject, and topic.",
  },
  {
    number: "03",
    title: "Learn",
    description: "AI creates a short, interactive learning adventure.",
  },
  {
    number: "04",
    title: "Adapt",
    description: "AI notices mistakes and changes how it explains.",
  },
  {
    number: "05",
    title: "Master",
    description: "Student reaches real topic mastery, not memorization.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
      <h2 className="font-display font-semibold text-3xl md:text-5xl text-on-background text-center mb-16">
        How it works
      </h2>

      <div className="flex flex-col">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`flex items-start gap-6 py-8 ${
              index !== steps.length - 1 ? "border-b border-outline-variant/20" : ""
            }`}
          >
            <span className="font-mono text-sm text-primary tracking-widest shrink-0 pt-1">
              {step.number}
            </span>
            <div>
              <h3 className="font-display font-semibold text-xl md:text-2xl text-on-background mb-2">
                {step.title}
              </h3>
              <p className="font-body text-base text-on-surface-variant">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;