import { SceneAnimationResolvedProps } from "./useSceneAnimations";
import { gsap } from "@/plugins";

const animateScene = ({
  allCans,
  heroCans,
  can1,
  can2,
  can3,
  can4,
  can5,
}: SceneAnimationResolvedProps) => {
  // Animation logic for the scene
  console.log(allCans, heroCans, can1, can2, can3, can4, can5);

  gsap.set(can1.current.position, { x: -1.5, z: 0 });
  gsap.set(can1.current.rotation, { z: -0.5 });

  gsap.set(can2.current.position, { x: 1.5 });
  gsap.set(can2.current.rotation, { z: 0.5 });

  gsap.set(can3.current.position, { y: 5, z: 2 });
  gsap.set(can4.current.position, { y: 5, z: 0.5 });
  gsap.set(can5.current.position, { y: 5, z: -1.5 });

  const introtl = gsap.timeline({
    defaults: {
      duration: 3,
      ease: "power2.inOut",
    },
  });

  introtl
    .from(can1.current.position, { y: 2 })
    .from(can1.current.rotation, { z: 1 })
    .from(can2.current.position, { y: -2 })
    .from(can2.current.rotation, { z: 1 });

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });

  scrollTl.to(heroCans.current.rotation, { y: Math.PI * 2 });
};

export default animateScene;
