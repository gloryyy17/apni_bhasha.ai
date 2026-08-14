const subjects = [
  {
    name: "Science",
    topics: [
      { name: "Cells", status: "mastered" },
      { name: "Light", status: "mastered" },
      { name: "Reflection", status: "learning" },
      { name: "Electricity", status: "gap" },
    ],
  },
  {
    name: "Maths",
    topics: [
      { name: "Algebra", status: "mastered" },
      { name: "Fractions", status: "learning" },
      { name: "Geometry", status: "gap" },
    ],
  },
];

const statusColor = {
  mastered: "bg-tertiary",
  learning: "bg-primary",
  gap: "bg-error",
};

function LearningMap() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-2xl mx-auto">
      <h2 className="font-display font-semibold text-3xl md:text-5xl text-on-background text-center mb-16">
        Your learning map
      </h2>

      <div className="flex flex-col gap-10">
        {subjects.map((subject) => (
          <div key={subject.name}>
            <h3 className="font-mono text-xs tracking-widest text-on-surface-variant uppercase mb-4">
              {subject.name}
            </h3>
            <div className="flex flex-col gap-3">
              {subject.topics.map((topic) => (
                <div
                  key={topic.name}
                  className="flex items-center gap-3 bg-surface-container border border-outline-variant/20 rounded-base px-4 py-3"
                >
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${statusColor[topic.status]}`} />
                  <span className="font-body text-base text-on-surface">{topic.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearningMap;