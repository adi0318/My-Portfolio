const skills = [
  {
    number: "01",
    title: "Languages",
    description:
      "The languages I use to build logic, applications and systems.",
    items: ["Java", "Python", "JavaScript"],
  },
  {
    number: "02",
    title: "Frontend",
    description: "Tools I use to create responsive and interactive interfaces.",
    items: ["React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    number: "03",
    title: "AI / ML",
    description:
      "Technologies I use to explore intelligent applications and data.",
    items: ["Machine Learning", "Python", "Data Analysis"],
  },
  {
    number: "04",
    title: "Tools",
    description: "Tools that are part of my everyday development workflow.",
    items: ["Figma", "GitHub", "GSAP"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-section border-t border-neutral-900 px-6 py-32 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
     
        <div className="mb-24 grid gap-10 md:grid-cols-2">
          <div>
            <p className="skills-label mb-5 text-sm uppercase tracking-[0.3em] text-[#B6FF5C]">
              02 / Skills
            </p>

            <h2 className="skills-heading max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.035em] md:text-7xl">
              Tools I use
              <br />
              to build things.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="skills-intro max-w-md text-lg leading-relaxed text-neutral-500">
              A combination of development, artificial intelligence and creative
              frontend tools that I use to turn ideas into working products.
            </p>
          </div>
        </div>


        <div className="skills-list border-t border-neutral-800">
          {skills.map((skill) => (
            <div
              key={skill.number}
              className="skill-row group grid gap-8 border-b border-neutral-800 py-10 md:grid-cols-[80px_1fr_1.5fr]"
            >

              <div className="skill-number text-sm text-neutral-600">
                {skill.number}
              </div>

              <div>
                <h3 className="skill-title text-2xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#B6FF5C]">
                  {skill.title}
                </h3>

                <p className="skill-description mt-3 max-w-xs text-sm leading-relaxed text-neutral-600">
                  {skill.description}
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="skill-tag rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-400 transition-colors duration-300 group-hover:border-neutral-600 group-hover:text-[#B6FF5C]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
