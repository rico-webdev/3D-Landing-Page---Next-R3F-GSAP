import { gsap, SplitText } from "@/plugins";

export function createHeroTimeline(): gsap.core.Timeline {
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
