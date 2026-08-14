import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { languages } from "../data/languages";
import { subjects } from "../data/subjects";
import { useLanguage } from "../context/LanguageContext";

const classes = ["6", "7", "8", "9", "10"];
const learningStyles = [
  { id: "simple", label: "Explain simply" },
  { id: "examples", label: "Show examples" },
  { id: "practice", label: "Let me practice" },
  { id: "visual", label: "Teach visually" },
  { id: "mix", label: "Mix everything" },
];

function Onboarding() {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);

  const toggleSubject = (id) => {
    setSelectedSubjects((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const canProceed = {
    1: selectedClass !== null,
    2: language !== null,
    3: selectedSubjects.length > 0,
    4: selectedStyle !== null,
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
      return;
    }
    const profile = {
      class: selectedClass,
      language,
      subjects: selectedSubjects,
      learningStyle: selectedStyle,
    };
    localStorage.setItem("studentProfile", JSON.stringify(profile));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop py-16">
      <div className="flex gap-2 mb-16">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`h-1 w-10 rounded-full ${
              s <= step ? "bg-primary" : "bg-outline-variant/30"
            }`}
          />
        ))}
      </div>

      <div className="w-full max-w-md text-center">
        {step === 1 && (
          <>
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-on-background mb-8">
              {t("whichClass")}
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {classes.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedClass(c)}
                  className={`h-16 rounded-base border font-mono text-lg transition-colors ${
                    selectedClass === c
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-outline-variant/30 text-on-surface-variant hover:border-primary/50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-on-background mb-8">
              {t("whichLanguage")}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`h-16 rounded-base border font-body text-lg transition-colors ${
                    language === lang.code
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-outline-variant/30 text-on-surface-variant hover:border-primary/50"
                  }`}
                >
                  {lang.nativeName}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-on-background mb-8">
              {t("whichSubjects")}
            </h2>
            <div className="flex flex-col gap-3">
              {subjects.map((subj) => (
                <button
                  key={subj.id}
                  onClick={() => toggleSubject(subj.id)}
                  className={`h-14 rounded-base border font-body text-lg transition-colors ${
                    selectedSubjects.includes(subj.id)
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-outline-variant/30 text-on-surface-variant hover:border-primary/50"
                  }`}
                >
                  {subj.name}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-on-background mb-8">
              {t("howLearn")}
            </h2>
            <div className="flex flex-col gap-3">
              {learningStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`h-14 rounded-base border font-body text-lg transition-colors ${
                    selectedStyle === style.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-outline-variant/30 text-on-surface-variant hover:border-primary/50"
                  }`}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </>
        )}

        <button
          onClick={handleNext}
          disabled={!canProceed[step]}
          className="w-full h-14 mt-12 bg-slate-teal text-on-background font-mono text-sm tracking-wide rounded-base flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed hover:brightness-110 transition-all"
        >
          {step < 4 ? t("continue") : t("startLearning")}
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default Onboarding;