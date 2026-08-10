import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;

    gsap.from(nav, {
      y: -30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
    });

    ScrollTrigger.create({
      start: "top -80",
      end: 99999,

      onEnter: () => {
        gsap.to(nav, {
          backgroundColor: "rgba(10, 10, 10, 0.65)",
          backdropFilter: "blur(16px)",
          webkitBackdropFilter: "blur(16px)",
          borderColor: "rgba(255, 255, 255, 0.08)",
          duration: 0.35,
          ease: "power2.out",
        });
      },

      onLeaveBack: () => {
        gsap.to(nav, {
          backgroundColor: "rgba(10, 10, 10, 0)",
          backdropFilter: "blur(0px)",
          webkitBackdropFilter: "blur(0px)",
          borderColor: "rgba(255, 255, 255, 0)",
          duration: 0.35,
          ease: "power2.out",
        });
      },
    });

    const links = nav.querySelectorAll(".nav-link");

    links.forEach((link) => {
      const line = link.querySelector(".nav-line");

      link.addEventListener("mouseenter", () => {
        gsap.to(line, {
          scaleX: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(line, {
          scaleX: 0,
          duration: 0.25,
          ease: "power2.inOut",
        });
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      ref={navRef}
      className="fixed left-1/2 top-4 z-50 w-full max-w-7xl -translate-x-1/2 rounded-2xl border border-transparent px-5 py-4 md:top-5 md:px-7"
    >
      <div className="flex items-center justify-between">

  
        <button
          onClick={() => scrollToSection("#home")}
          className="group flex items-center gap-3"
        >
          <span className="text-sm font-semibold uppercase tracking-[-0.02em] cursor-pointer">
            Aditya Soni
          </span>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-neutral-600 transition-colors duration-300 group-hover:text-neutral-300 sm:block">
            AI/ML × WEB
          </span>
        </button>

       
        <div className="hidden items-center gap-7 md:flex">

          <button
            onClick={() => scrollToSection("#about")}
            className="nav-link relative py-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 cursor-pointer transition-colors duration-300 hover:text-white"
          >
            About
            <span className="nav-line absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#B6FF5C]" />
          </button>

          <button
            onClick={() => scrollToSection("#skills")}
            className="nav-link relative py-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 cursor-pointer transition-colors duration-300 hover:text-white"
          >
            Skills
            <span className="nav-line absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#B6FF5C]" />
          </button>

          <button
            onClick={() => scrollToSection("#work")}
            className="nav-link relative py-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 cursor-pointer transition-colors duration-300 hover:text-white"
          >
            Work
            <span className="nav-line absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#B6FF5C]" />
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            className="nav-link relative py-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 cursor-pointer transition-colors duration-300 hover:text-white"
          >
            Contact
            <span className="nav-line absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#B6FF5C]" />
          </button>

        </div>

  
        <div className="hidden items-center gap-2 text-xs text-neutral-500 lg:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B6FF5C]" />

          <span className="uppercase tracking-[0.15em]">
            Available
          </span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
