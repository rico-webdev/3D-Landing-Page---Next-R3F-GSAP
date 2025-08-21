import { useGSAP } from "@/plugins";
import { RefObject, useRef } from "react";
import { createHeroTimeline } from "./Hero.animation";

const useHeroAnimations = (container: RefObject<HTMLDivElement | null>) => {
  const tlRef = useRef<GSAPTimeline | null>(null);
  useGSAP(
    () => {
      tlRef.current = createHeroTimeline();
    },
    {
      scope: container,
      dependencies: [],
    },
  );
  return tlRef;
};

export default useHeroAnimations;
