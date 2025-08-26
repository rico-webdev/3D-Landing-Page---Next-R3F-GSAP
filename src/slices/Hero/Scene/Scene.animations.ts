import { SceneAnimationResolvedProps } from "./useSceneAnimations";
import { gsap } from "@/plugins";
import { View } from "@react-three/drei";

const animateScene = ({
  allCans,
  heroCans,
  can1,
  can2,
  can3,
  can4,
  can5,
  viewport,
}: SceneAnimationResolvedProps) => {
  const { width } = viewport;

  gsap.set(can1.current.position, { x: -width / 3, z: 0, y: -1 });
  gsap.set(can1.current.rotation, { z: -0.5 });

  gsap.set(can2.current.position, { x: width / 3, y: -1 });
  gsap.set(can2.current.rotation, { z: 0.25 });

  gsap.set(can3.current.position, { y: 5, z: 2 });
  gsap.set(can4.current.position, { x: -1, y: 5, z: 0 });
  gsap.set(can5.current.position, { x: 2, y: 5, z: -1.5 });

  const ease = "back.out(.8)";

  const introtl = gsap.timeline({
    defaults: {
      duration: 2,
      ease: "power2.inOut",
    },
  });

  if (window.scrollY < 20) {
    introtl
      .from(can1.current.position, { y: -5, x: -4, ease })
      .from(can2.current.position, { y: -5, x: 3, ease }, "<=+.5");
  }

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      start: "top top",
      end: "bottom bottom",
      scrub: 6,
    },
  });

  scrollTl
    .to(heroCans.current.rotation, {
      y: Math.PI * 2,
      ease: "sine.out",
      duration: 3,
    })
    .to(
      heroCans.current.position,
      {
        y: 1,
        ease: "sine.out",
        duration: 3,
      },
      0,
    )
    // cherry
    .to(can3.current.position, { y: 0.15, x: 1.2, z: -1, ease })
    .to(can3.current.rotation, { y: -0.2, ease: "none" }, "<")

    // strawberry
    .to(can2.current.position, { x: 1.7, ease }, 0)
    .to(can2.current.rotation, { y: -0.5 }, 0)
    .to(can2.current.rotation, { z: -0.3, duration: 3 }, "<")

    // grape
    .to(can4.current.position, { y: 0.25, x: 0.8, z: -2, ease })
    .to(can4.current.rotation, { z: 0.4 }, "<")

    // watermelon
    .to(can5.current.position, { y: 0.7, x: 1.6, z: -2, ease })
    .to(can5.current.rotation, { z: -0.3 }, "<")

    // lemon
    .to(can1.current.rotation, { z: 0, y: -1.6 }, 0)
    .to(can1.current.position, {
      x: 0.8,
      z: 0.2,
      y: -1.5,
      ease: "sine.out",
      duration: 3,
    })
    .to(can1.current.rotation, { y: -0.2, duration: 3 }, "<");

  scrollTl.to(heroCans.current.rotation, { y: Math.PI * 2 });
};

export default animateScene;
