// HeroAnimationWrapper.tsx
"use client";

import { ReactNode, useRef, useState } from "react";
import { useGSAP, gsap } from "@/plugins";
import useHeroAnimations from "./animations/useHeroAnimaitons";
import { View } from "@react-three/drei";
import Scene from "@/slices/Hero/Scene/Scene";
import { Bubbles } from "@/components/ui/canvas/Bubbles";

interface HeroAnimationWrapperProps {
  children: ReactNode;
}

export default function HeroAnimationWrapper({
  children,
}: HeroAnimationWrapperProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const { initTl } = useHeroAnimations(container);

  useGSAP(
    (context) => {
      if (!isReady) return;

      gsap.matchMedia(context).add("(min-width: 768px)", () => {
        initTl.current?.play();
      });
    },
    { dependencies: [isReady] },
  );

  return (
    <div ref={container} className="contents">
      <View
        className="pointer-events-none fixed top-0 left-0 hidden h-full w-full md:block"
        aria-hidden="true"
      >
        <Scene setIsReady={setIsReady} />
        <Bubbles />
      </View>
      {children}
    </div>
  );
}
