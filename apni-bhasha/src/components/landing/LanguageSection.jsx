const languages = [
  { code: "hi", nativeName: "हिन्दी" },
  { code: "mr", nativeName: "मराठी" },
  { code: "bn", nativeName: "বাংলা" },
  { code: "ta", nativeName: "தமிழ்" },
  { code: "te", nativeName: "తెలుగు" },
  { code: "en", nativeName: "English" },
];

function LanguageSection() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-2xl mx-auto text-center">
      <h2 className="font-display font-semibold text-3xl md:text-5xl text-on-background leading-tight mb-2">
        Think in your language.
      </h2>
      <p className="font-display font-semibold text-3xl md:text-5xl text-primary leading-tight mb-16">
        Learn in your language.
      </p>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
        {languages.map((lang) => (
          <span
            key={lang.code}
            className="font-display font-semibold text-2xl md:text-3xl text-on-surface-variant hover:text-primary transition-colors"
          >
            {lang.nativeName}
          </span>
        ))}
      </div>
    </section>
  );
}

export default LanguageSection;