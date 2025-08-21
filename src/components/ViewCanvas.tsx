"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei/core/Environment";
import FloatingCan from "@/components/ui/FloatingCan";
import type { Group } from "three";

import React, { useRef } from "react";

type Props = {};

const ViewCanvas = (props: Props) => {
  const can1 = useRef<Group>(null);
  const can2 = useRef<Group>(null);
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        pointerEvents: "none",
        zIndex: 30,
        overflow: "hidden",
      }}
      camera={{ fov: 30 }}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <FloatingCan
        groupRef={can1}
        position={[1, 0, 0]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
      />
      <FloatingCan
        groupRef={can2}
        position={[-1, 0, 0]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
      />
      <Environment files={["/hdrs/lobby.hdr"]} />
    </Canvas>
  );
};

export default ViewCanvas;
