import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const aboutAnimation = (container) => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      paused: true,
    });

    tl.from(".about-label", {
      opacity: 0,
      y: 20,
      duration: 0.5,
    })

      .from(
        ".about-heading",
        {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.2"
      )

      .from(
        ".about-text",
        {
          opacity: 0,
          y: 40,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.3"
      );
      
    gsap.from(".education-item", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".about-education",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    ScrollTrigger.create({
      trigger: ".about-section",
      start: "top 80%",

      toggleActions: "play none none reverse",

      animation: tl,
    });
  }, container);

  return () => ctx.revert();
};

export const skillsAnimation = (container) => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      paused: true,
    });

    tl.from(".skills-label", {
      opacity: 0,
      y: 20,
      duration: 0.5,
    })

      .from(
        ".skills-heading",
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.2"
      )

      .from(
        ".skills-intro",
        {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.4"
      )

      .from(
        ".skill-row",
        {
          opacity: 0,
          y: 50,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.3"
      );

    ScrollTrigger.create({
      trigger: ".skills-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
      animation: tl,
    });
  }, container);

  return () => ctx.revert();
};
