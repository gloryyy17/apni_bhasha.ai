import { Camera, ArrowDown } from "lucide-react";

const scanSteps = [
  "Scan a page",
  "AI identifies concepts",
  "Select a concept",
  "Interactive lesson begins",
];

function TextbookScanner() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display font-semibold text-3xl md:text-5xl text-on-background leading-tight mb-4">
          Your textbook.
        </h2>
        <p className="font-display font-semibold text-3xl md:text-5xl text-primary leading-tight mb-16">
          Now interactive.
        </p>

        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-surface-container border border-outline-variant/20 flex items-center justify-center mb-2">
            <Camera size={24} className="text-primary" />
          </div>

          {scanSteps.map((step, index) => (
            <div key={step} className="flex flex-col items-center gap-3">
              <span className="font-body text-base text-on-surface-variant">
                {step}
              </span>
              {index !== scanSteps.length - 1 && (
                <ArrowDown size={16} className="text-outline-variant" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TextbookScanner;