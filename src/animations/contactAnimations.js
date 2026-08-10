import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const contactAnimation = (container) => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      paused: true,
    });

    tl.from(".contact-label", {
      opacity: 0,
      y: 20,
      duration: 0.5,
    })

      .from(
        ".contact-heading",
        {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.2"
      )

      .from(
        ".contact-text",
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5"
      )

      .from(
        ".contact-email",
        {
          opacity: 0,
          y: 25,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )

      .from(
        ".contact-links",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        "-=0.3"
      )

      .from(
        ".contact-footer",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        "-=0.2"
      );

    ScrollTrigger.create({
      trigger: ".contact-section",
      start: "top 75%",
      toggleActions: "play none none reverse",
      animation: tl,
    });
  }, container);

  return () => ctx.revert();
};