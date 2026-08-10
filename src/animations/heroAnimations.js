import gsap from "gsap";

export const heroAnimation = (container) => {
  const buttons = gsap.utils.toArray(".hero-button");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.25,
        ease: "back.out(2)",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    });
  });

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.from(".hero-label", {
      opacity: 0,
      y: 20,
      duration: 0.5,
    })

      .from(".hero-title", {
        opacity: 0,
        y: 60,
        duration: 0.8,
      })

      .from(
        ".hero-description",
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
        },
        "-=0.4"
      )

      .from(
        ".hero-buttons",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        "-=0.3"
      )

      .from(
        ".hero-visual",
        {
          opacity: 0,
          scale: 0.8,
          x: 80,
          duration: 1,
        },
        "-=0.5"
      );

    gsap.to(".hero-core", {
      y: -12,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-orbit", {
      rotation: 360,
      duration: 18,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(".hero-dot-one", {
      x: 40,
      y: -30,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-dot-two", {
      x: -40,
      y: 30,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, container);

  return () => ctx.revert();
};
