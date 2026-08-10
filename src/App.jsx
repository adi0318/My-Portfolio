import { useLayoutEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import { heroAnimation } from "./animations/heroAnimations";
import { aboutAnimation, skillsAnimation } from "./animations/scrollAnimations";
import Projects from "./components/Projects";
import { projectsAnimation } from "./animations/projectAnimations";
import Contact from "./components/Contact";
import { contactAnimation } from "./animations/contactAnimations";

function App() {
  const appRef = useRef(null);

  useLayoutEffect(() => {
    const cleanupHero = heroAnimation(appRef);
    const cleanupAbout = aboutAnimation(appRef);
    const cleanupSkills = skillsAnimation(appRef);
    const cleanupProjects = projectsAnimation(appRef);
    const cleanupContact = contactAnimation(appRef);

    return () => {
      cleanupHero();
      cleanupAbout();
      cleanupSkills();
      cleanupProjects();
      cleanupContact();
    };
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <Navbar />

      <main>
        <section id="home" className="hero min-h-screen px-6">
          <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT — HERO CONTENT */}
            <div className="hero-content max-w-4xl">
              <h1 className="hero-title max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-xl lg:text-[1.5rem] mb-3">
                AI / ML Engineer
                <br />
                <span className="text-neutral-500">& Web Developer</span>
              </h1>

              <h1 className="hero-title text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
                Building
                <br />
                intelligent
                <br />
                experiences.
              </h1>

              <p className="hero-description mt-8 max-w-xl text-lg leading-relaxed text-neutral-400">
                I build intelligent applications and modern web experiences by
                combining AI, development and thoughtful design.
              </p>

              <div className="hero-buttons mt-10 flex gap-4">
                <a
                  href="#work"
                  className="hero-button rounded-full bg-[#B6FF5C] px-6 py-3 text-sm font-medium text-black"
                >
                  View My Work
                </a>

                <a
                  href="#contact"
                  className="hero-button rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* RIGHT — ABSTRACT VISUAL */}
            <div className="hero-visual relative mx-auto hidden h-105 w-105 lg:block">
              <div className="absolute inset-0 rounded-full border border-neutral-800" />

              <div className="absolute inset-11.25 rounded-full border border-neutral-800" />

              <div className="hero-orbit absolute inset-22.5 rounded-full border border-[#B6FF5C]/20" />

              <div className="hero-core absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#B6FF5C] text-4xl font-bold text-black">
                AI
              </div>

              <div className="hero-dot hero-dot-one absolute left-10 top-24 h-3 w-3 rounded-full bg-[#B6FF5C]" />

              <div className="hero-dot hero-dot-two absolute bottom-24 right-12 h-3 w-3 rounded-full bg-white" />

              <div className="absolute bottom-15 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs uppercase tracking-[0.3em] text-neutral-500">
                AI x Web
              </div>
            </div>
          </div>
        </section>

        <About />

        <Skills />

        <Projects />

        <Contact />
      </main>
    </div>
  );
}

export default App;
