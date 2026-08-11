import jarvisImage from "../assets/jarvis.png";
import skymartImage from "../assets/skymart.png";
import linkedinImage from "../assets/linkedin.png";

const projects = [
  {
    number: "01",
    type: "AI / ML",
    title: "JARVIS",
    description:
      "An intelligent application focused on doing tasks related to your device and using AI for general queries.",
    technologies: ["Python", "Machine Learning", "Speech Recognition"],
    image: jarvisImage,
    github: "https://github.com/adi0318/Jarvis_Bot",
    liveLink: "https://github.com/adi0318/Jarvis_Bot",
  },

  {
    number: "02",
    type: "WEB DEVELOPMENT",
    title: "SkyMart",
    description:
      "A modern web application built with React, JavaScript and responsive frontend technologies.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    image: skymartImage,
    github: "https://github.com/adi0318/SkyMart-Project",
    liveLink: "https://sky-mart-project-beta.vercel.app/",
  },

  {
    number: "03",
    type: "DESIGN",
    title: "LinkedIn Redesigned",
    description:
      "A Figma design exploring a modern and cleaner user interface for LinkedIn.",
    technologies: ["Figma", "Canva"],
    image: linkedinImage,
    github: "https://github.com/adi0318/LinkedIn-Redesigned",
    liveLink:
      "https://www.figma.com/proto/rFbO60MO7BkB8RuX8XUfOh/LinkedIn-Redesigned?node-id=5-1053&t=yN7Gvg7rMywlynfK-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
];

const Projects = () => {
  return (
    <section
      id="work"
      className="projects-section border-t border-neutral-900 px-6 py-32 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="projects-label mb-5 text-sm uppercase tracking-[0.3em] text-[#B6FF5C]">
              03 / Selected Work
            </p>

            <h2 className="projects-heading max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.035em] md:text-7xl">
              Things I've
              <br />
              been building.
            </h2>
          </div>

          <p className="projects-intro max-w-sm text-base leading-relaxed text-neutral-500">
            A selection of projects across artificial intelligence and modern
            web development.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              key={project.number}
              style={{
                zIndex: Number(project.number),
              }}
              className="project-card group sticky top-20 overflow-hidden rounded border border-neutral-800 bg-[#0a0a0a]"
            >
              <div className="grid min-h-125 md:grid-cols-[1fr_1.3fr]">
                <div className="flex flex-col justify-between p-8 md:p-12">
                  <div>
                    <div className="mb-10 flex items-center justify-between">
                      <span className="project-number text-sm text-neutral-600">
                        {project.number}
                      </span>

                      <span className="project-type text-xs uppercase tracking-[0.25em] text-[#B6FF5C]">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="project-title text-4xl font-medium tracking-tight md:text-5xl">
                      {project.title}
                    </h3>

                    <p className="project-description mt-6 max-w-md text-base leading-relaxed text-neutral-500">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-12 flex flex-col gap-6">
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-neutral-800 px-4 py-2 text-xs text-neutral-400 transition-colors duration-300 hover:text-white"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-300 hover:text-white"
                      >
                        GitHub ↗
                      </a>

                      {project.liveLink !== project.github && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-300 hover:text-[#B6FF5C]"
                        >
                          {project.type === "DESIGN"
                            ? "View Design ↗"
                            : "Live Project ↗"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-visual relative min-h-75 overflow-hidden border-t border-neutral-800 bg-[#111] md:border-l md:border-t-0">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="project-image absolute inset-0 h-full w-full object-cover opacity-20"
                  />

                  <div className="absolute inset-0 bg-[#111]/60" />

                  <div className="project-orb-wrapper absolute right-8 top-8">
                    <div className="project-orb relative h-32 w-32 rounded-full border border-neutral-400/50 border-dashed md:h-40 md:w-40">
                      <div className="project-orbit absolute inset-0">
                        <div className="project-orb-highlight absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B6FF5C]" />
                      </div>
                    </div>

                    <div className="project-orb-small absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B6FF5C] opacity-80" />
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 left-6 cursor-pointer text-xs uppercase tracking-[0.25em] text-neutral-600 transition-colors hover:text-white"
                  >
                    Explore project →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
