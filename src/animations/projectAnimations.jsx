import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const projectsAnimation = (container) => {
  const ctx = gsap.context(() => {

    const headerTl = gsap.timeline({
      paused: true,
    });

    headerTl
      .from(".projects-label", {
        opacity: 0,
        y: 20,
        duration: 0.5,
      })
      .from(
        ".projects-heading",
        {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .from(
        ".projects-intro",
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
        },
        "-=0.4"
      );

    ScrollTrigger.create({
      trigger: ".projects-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
      animation: headerTl,
    });


    const cards = gsap.utils.toArray(".project-card");


    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;

      gsap.to(card, {
        scale: 0.94,

        scrollTrigger: {
          trigger: cards[index + 1],
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });
    });

    cards.forEach((card) => {
      const image = card.querySelector(".project-image");

      if (!image) return;

      gsap.fromTo(
        image,
        {
          scale: 1,
          opacity: 0.12,
        },
        {
          scale: 1.08,
          opacity: 0.3,
          ease: "none",

          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    });

    cards.forEach((card) => {
      const orb = card.querySelector(".project-orb");
      const orbit = card.querySelector(".project-orbit");
      const smallOrb = card.querySelector(".project-orb-small");

      if (!orb || !smallOrb) return;

      const handleMouseEnter = () => {
        gsap.to(orb, {
          rotation: -360,
          duration: 20,
          repeat: -1,
          ease: "none",
        });

        if (orbit) {
          gsap.to(orbit, {
            rotation: 360,
            duration: 6,
            repeat: -1,
            ease: "none",
          });
        }

        gsap.to(smallOrb, {
          scale: 1.3,
          x: 10,
          y: -20,
          duration: 0.5,
          ease: "power2.out",
        });
      };


      const handleMouseLeave = () => {
        gsap.killTweensOf(orb);

        if (orbit) {
          gsap.killTweensOf(orbit);
        }

        gsap.to(orb, {
          rotation: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });

        if (orbit) {
          gsap.to(orbit, {
            rotation: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        }

        gsap.to(smallOrb, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      card._handleMouseEnter = handleMouseEnter;
      card._handleMouseLeave = handleMouseLeave;
    });
  }, container);

  return () => {
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card) => {
      if (card._handleMouseEnter) {
        card.removeEventListener(
          "mouseenter",
          card._handleMouseEnter
        );
      }

      if (card._handleMouseLeave) {
        card.removeEventListener(
          "mouseleave",
          card._handleMouseLeave
        );
      }

      delete card._handleMouseEnter;
      delete card._handleMouseLeave;
    });

    ctx.revert();
  };
};