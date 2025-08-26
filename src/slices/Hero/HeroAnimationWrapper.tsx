// HeroAnimationWrapper.tsx
"use client";

import { ReactNode, useRef, useState } from "react";
import { View } from "@react-three/drei";

import Scene from "@/slices/Hero/Scene/Scene";
import { Bubbles } from "@/components/ui/canvas/Bubbles";
import { useGSAP } from "@/plugins";
import useHeroAnimations from "./animations/useHeroAnimaitons";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface HeroAnimationWrapperProps {
  children: ReactNode;
}

export default function HeroAnimationWrapper({
  children,
}: HeroAnimationWrapperProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const { initTl } = useHeroAnimations(container);

  const isDesktop = useMediaQuery();

  useGSAP(
    () => {
      if (!isDesktop) {
        setIsReady(true);
      }

      if (!isReady) return;
      initTl.current?.play();
    },
    { dependencies: [isReady, isDesktop] },
  );

  return (
    <div ref={container} className="contents">
      {isDesktop && (
        <View
          key="desktop-3d"
          className="pointer-events-none fixed top-0 left-0 h-full w-full md:block"
          aria-hidden="true"
        >
          <Scene setIsReady={setIsReady} />
          <Bubbles />
        </View>
      )}

      {children}
    </div>
  );
}
