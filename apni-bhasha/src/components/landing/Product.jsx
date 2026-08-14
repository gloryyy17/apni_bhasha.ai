import { Mic } from "lucide-react";

const languages = [
  { code: "hi", nativeName: "हिन्दी" },
  { code: "mr", nativeName: "मराठी" },
  { code: "bn", nativeName: "বাংলা" },
  { code: "ta", nativeName: "தமிழ்" },
  { code: "te", nativeName: "తెలుగు" },
  { code: "en", nativeName: "English" },
];

function Product() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-2xl mx-auto text-center">
      <h2 className="font-display font-semibold text-4xl md:text-6xl text-on-background mb-12">
        Just ask.
      </h2>

      {/* Mock query input — shows the core interaction, not a real functioning input yet */}
      <div className="bg-surface-container border border-outline-variant/20 rounded-container p-6 flex items-center justify-between gap-4">
        <p className="font-body text-lg text-on-surface text-left">
          मुझे प्रकाश के बारे में समझाओ
        </p>
        <div className="shrink-0 w-12 h-12 rounded-full bg-slate-teal/20 flex items-center justify-center">
          <Mic size={20} className="text-primary" />
        </div>
      </div>

      <p className="font-mono text-xs tracking-widest text-on-surface-variant uppercase mt-10 mb-4">
        Available in
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {languages.map((lang) => (
          <span
            key={lang.code}
            className="font-body text-sm text-on-surface-variant bg-surface-container-high px-4 py-2 rounded-full"
          >
            {lang.nativeName}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Product;