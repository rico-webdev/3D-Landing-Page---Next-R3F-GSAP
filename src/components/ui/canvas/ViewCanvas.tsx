"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

const ViewCanvas = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        pointerEvents: "none",
        zIndex: 30,
        // overflow: "hidden",
      }}
      camera={{ fov: 30 }}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <View.Port />
    </Canvas>
  );
};

export default ViewCanvas;
