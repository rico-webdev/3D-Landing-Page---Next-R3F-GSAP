import { gsap, SplitText, ScrollTrigger } from "@/plugins";

export function createHeroInitTl(): gsap.core.Timeline {
  SplitText.create(".hero-heading", {
    type: "lines, chars",
    linesClass: "line++",
    charsClass: "char++",
  });

  const tl = gsap.timeline({ paused: true });
  tl.fromTo(
    ".line1 > .char",
    {
      yPercent: 200,
      opacity: 0,
    },
    {
      yPercent: 100,
      opacity: 1,
      ease: "back.out(1.7)",
      stagger: { each: 0.03, from: "start" },
      delay: 0.2,
    },
  )
    .from(
      ".line2 > .char",
      {
        y: 100,
        opacity: 0,
        stagger: { each: 0.03, from: "start" },
        ease: "back.out(1.7)",
      },
      "-=0.1",
    )
    .fromTo(
      ".line1 > .char",
      {
        yPercent: 100,
      },
      {
        yPercent: 0,

        transformOrigin: "50% 0%",
        ease: "back.out(1.7)",
        stagger: { each: 0.03, from: "start" },
      },
      "<",
    )
    .from(".hero-subheading, .hero-body, .hero-btn", {
      yPercent: 100,
      opacity: 0,
      stagger: 0.4,
    });

  return tl;
}

export const createHeroScrollTl = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: `+=${Number(gsap.getProperty(window, "innerHeight"))}px`,
      scrub: 1.5,
      // markers: true,
    },
  });

  tl.to(document.body, {
    backgroundColor: "#FFD151",
    ease: "none",
  });

  const headingSplit = SplitText.create(".text-side-heading", {
    type: "chars, lines",
  });
  const bodySplit = SplitText.create(".text-side-body", {
    type: "lines",
  });

  ScrollTrigger.create({
    trigger: ".text-side-heading",
    start: "top 90%",
    end: "top 50%",
    scrub: 2,
    animation: gsap.from(headingSplit.chars, {
      y: 40,
      opacity: 0,
      rotate: -25,
      stagger: 0.2,
      ease: "power2.out",
    }),
    // markers: true,
  });

  ScrollTrigger.create({
    trigger: ".text-side-body",
    start: "top 90%",
    end: "top 50%",
    scrub: 2,
    animation: gsap.from(bodySplit.lines, {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    }),
    // markers: true,
  });

  return tl;
};
