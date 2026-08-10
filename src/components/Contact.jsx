const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section border-t border-neutral-900 px-6 py-32 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
       
        <p className="contact-label mb-8 text-sm uppercase tracking-[0.3em] text-[#B6FF5C]">
          04 / Contact
        </p>

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="contact-heading max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Have an idea?
              <br />
              Let's build it.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="contact-text mb-8 max-w-md text-lg leading-relaxed text-neutral-500">
              I'm always open to discussing interesting projects,
              collaborations, or opportunities where I can build something
              meaningful.
            </p>

            
            <a
              href="mailto:adityasoniji4555@gmil.com"
              className="contact-email group mb-10 inline-flex w-fit items-center gap-3 border-b border-neutral-700 pb-2 text-lg text-neutral-300 transition-colors duration-300 hover:border-[#B6FF5C] hover:text-white"
            >
              adityasoniji4555@gmil.com
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

       
            <div className="contact-links flex flex-wrap gap-6 text-sm uppercase tracking-[0.2em] text-neutral-600">
              <a
                href="https://github.com/adi0318"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-soni-2784802b2/"
                className="transition-colors duration-300 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

  
        <div className="contact-footer mt-32 flex flex-col justify-between gap-4 border-t border-neutral-900 pt-6 text-xs uppercase tracking-[0.2em] text-neutral-400 md:flex-row">
          <span className="transition-colors duration-300 hover:text-white cursor-pointer">AI/ML x WEB DEVELOPMENT</span>

          <span className="transition-colors duration-300 hover:text-white cursor-pointer">Made by Aditya Soni (Cohort 3.0)</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
