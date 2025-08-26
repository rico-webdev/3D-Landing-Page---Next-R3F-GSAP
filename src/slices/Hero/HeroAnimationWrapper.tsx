// HeroAnimationWrapper.tsx
"use client";

import { ReactNode, useRef, useEffect } from "react";
import useHeroAnimations from "./animations/useHeroAnimaitons";
import { View } from "@react-three/drei";
import Scene from "@/slices/Hero/Scene/Scene";
import { Bubbles } from "@/components/ui/canvas/Bubbles";

export default function HeroAnimationWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const container = useRef<HTMLDivElement | null>(null);
  const { initTl } = useHeroAnimations(container);

  useEffect(() => {
    initTl.current?.play();
  }, [initTl]);

  return (
    <div ref={container} className="contents">
      <View className="pointer-events-none fixed top-0 left-0 hidden h-full w-full md:block">
        <Scene />
        <Bubbles />
      </View>
      {children}
    </div>
  );
}
