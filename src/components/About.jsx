const About = () => {
  return (
    <section id="about" className="about-section px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-20">
          <p className="about-label mb-6 text-xs uppercase tracking-[0.3em] text-neutral-600">
            01 / About
          </p>

          <h2 className="about-heading max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.035em] md:text-6xl">
            I like building things where
            <span className="text-neutral-500">
              {" "}
              technology meets good design.
            </span>
          </h2>
        </div>

        
        <div className="grid gap-16 md:grid-cols-2">
        
          <div className="about-text space-y-6">
            <p className="text-lg leading-relaxed text-neutral-400">
              I'm Adiya Soni, an AI/ML and web developer interested in building useful
              applications that combine intelligent systems with modern
              interfaces.
            </p>

            <p className="text-lg leading-relaxed text-neutral-400">
              I enjoy working across different parts of development, from Python
              and machine learning to React, JavaScript and interactive frontend
              experiences.
            </p>

            <p className="text-lg leading-relaxed text-neutral-400">
              I'm constantly learning, experimenting with new technologies and
              looking for better ways to turn ideas into practical digital
              experiences.
            </p>

            <a
              href="https://aditya.tiecv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link group mt-18 inline-flex items-center gap-3 border-b border-neutral-800 pb-2 text-sm uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-300 hover:border-[#B6FF5C] hover:text-white"
            >
              View my resume
              <span className="transition-transform duration-300 ">
                ↗
              </span>
            </a>
          </div>

         
          <div className="about-education">
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-neutral-600">
              Education
            </p>

            <div className="space-y-0">
          
              <div className="education-item border-t border-neutral-800 py-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-200">
                      B.Tech — Artificial Intelligence & Machine Learning
                    </h3>

                    <p className="mt-2 text-sm text-neutral-500">
                      IPS Academy, Indore
                    </p>

                    <p className="mt-1 text-sm text-neutral-600">4th Year</p>
                  </div>

                  <span className="shrink-0 text-sm text-[#B6FF5C]">
                    CGPA - 8.70
                  </span>
                </div>
              </div>

            
              <div className="education-item border-t border-neutral-800 py-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-200">
                      Class XII — ISC
                    </h3>

                    <p className="mt-2 text-sm text-neutral-500">ISC Board</p>
                  </div>

                  <span className="shrink-0 text-sm text-[#B6FF5C]">
                    Percentage - 90%
                  </span>
                </div>
              </div>

              <div className="education-item border-t border-neutral-800 py-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-200">
                      Class X — ICSE
                    </h3>

                    <p className="mt-2 text-sm text-neutral-500">ICSE Board</p>
                  </div>

                  <span className="shrink-0 text-sm text-[#B6FF5C]">
                    Percentage - 89%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
