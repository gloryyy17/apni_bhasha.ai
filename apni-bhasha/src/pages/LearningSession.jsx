import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { generateLesson } from "../api/lessonApi";

function LearningSession() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const topic = params.get("topic") || "light";

  const [lesson, setLesson] = useState(null);
  const [levelIndex, setLevelIndex] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [showAdaptive, setShowAdaptive] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    generateLesson(topic).then(setLesson);
  }, [topic]);

  if (!lesson) {
    return <div className="min-h-screen flex items-center justify-center text-on-surface-variant">Loading...</div>;
  }

  const level = lesson.levels[levelIndex];

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    const correct = option === level.correctAnswer;
    setFeedback(correct ? "correct" : "wrong");

    if (!correct) {
      const newWrongCount = wrongCount + 1;
      setWrongCount(newWrongCount);
      if (newWrongCount >= 2) {
        setTimeout(() => setShowAdaptive(true), 800);
        return;
      }
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setFeedback(null);
    setShowAdaptive(false);
    if (levelIndex < lesson.levels.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else {
      navigate(`/progress?topic=${topic}`);
    }
  };

  return (
    <div className="min-h-screen px-margin-mobile md:px-margin-desktop py-8 max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">{lesson.title}</span>
        <span className="font-mono text-xs text-on-surface-variant">Level {levelIndex + 1} of {lesson.levels.length}</span>
      </div>
      <div className="h-1 bg-outline-variant/30 rounded-full mb-8">
        <div className="h-1 bg-primary rounded-full transition-all" style={{ width: `${((levelIndex + 1) / lesson.levels.length) * 100}%` }} />
      </div>

      {level.type === "explanation" && (
        <div className="bg-surface-container border border-outline-variant/20 rounded-container p-6">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">Core Concept</span>
          <h2 className="font-display font-bold text-2xl text-on-background mt-2 mb-4">{level.title}</h2>
          <p className="font-body text-base text-on-surface-variant mb-6">{level.content}</p>
          <button onClick={handleNext} className="w-full h-12 bg-slate-teal rounded-base font-mono text-sm">
            Continue →
          </button>
        </div>
      )}

      {level.type === "mcq" && !showAdaptive && (
        <div>
          <h2 className="font-display font-semibold text-xl text-on-background mb-6">{level.question}</h2>
          <div className="flex flex-col gap-3 mb-6">
            {level.options.map((opt) => {
              const isSelected = selectedAnswer === opt;
              const isCorrect = opt === level.correctAnswer;
              let style = "border-outline-variant/30 text-on-surface-variant";
              if (isSelected && feedback === "correct") style = "border-tertiary bg-tertiary/10 text-tertiary";
              if (isSelected && feedback === "wrong") style = "border-error bg-error/10 text-error";
              return (
                <button
                  key={opt}
                  onClick={() => !feedback && handleAnswer(opt)}
                  disabled={!!feedback}
                  className={`h-14 rounded-base border font-body text-base transition-colors ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {feedback === "correct" && (
            <button onClick={handleNext} className="w-full h-12 bg-slate-teal rounded-base font-mono text-sm">
              Continue →
            </button>
          )}
        </div>
      )}

      {showAdaptive && (
        <div>
          <div className="bg-primary/10 border border-primary/30 rounded-container p-6 mb-6">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">💡 Let's try this another way</p>
            <p className="font-body text-base text-on-surface">
              Think about throwing a ball at a wall. It hits the wall and comes back. Light can behave in a similar way — that's reflection.
            </p>
          </div>
          <button onClick={handleNext} className="w-full h-12 bg-slate-teal rounded-base font-mono text-sm">
            Try again →
          </button>
        </div>
      )}
    </div>
  );
}

export default LearningSession;