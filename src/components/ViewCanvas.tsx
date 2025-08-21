"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei/core/Environment";

type Props = {};

const ViewCanvas = (props: Props) => {

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
      <Environment files={["/hdrs/lobby.hdr"]} />
    </Canvas>
  );
};

export default ViewCanvas;
