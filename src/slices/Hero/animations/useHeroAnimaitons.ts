import { useGSAP } from "@/plugins";
import { RefObject, useRef } from "react";
import { createHeroInitTl, createHeroScrollTl } from "./Hero.animation";

const useHeroAnimations = (container: RefObject<HTMLDivElement | null>) => {
  const initTl = useRef<GSAPTimeline | null>(null);
  const scrollTl = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      initTl.current = createHeroInitTl();
      scrollTl.current = createHeroScrollTl();
    },
    {
      scope: container,
      dependencies: [],
    },
  );
  return { initTl, scrollTl };
};

export default useHeroAnimations;
