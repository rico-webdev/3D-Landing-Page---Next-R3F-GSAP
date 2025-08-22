import { Environment } from "@react-three/drei/core/Environment";
import FloatingCan from "@/components/ui/FloatingCan";

import { useRef } from "react";
import useSceneAnimations from "./useSceneAnimations";

import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper, PointLightHelper } from "three";
import type { DirectionalLight, Group, SpotLight } from "three";
import { directPointLight } from "three/tsl";

function Scene() {
  const can1 = useRef<Group>(null);
  const can2 = useRef<Group>(null);
  const can3 = useRef<Group>(null);
  const can4 = useRef<Group>(null);
  const can5 = useRef<Group>(null);

  const allCans = useRef<Group>(null);
  const heroCans = useRef<Group>(null);

  const directLightRef = useRef<DirectionalLight>(null);
  const pointLightRef = useRef<SpotLight>(null);

  const FLOATING_SPEED = 1.5;

  useSceneAnimations({ allCans, heroCans, can1, can2, can3, can4, can5 });

  useHelper(directLightRef, DirectionalLightHelper, 0.5, "hotpink");
  useHelper(pointLightRef, PointLightHelper, 0.5, "cyan");

  return (
    <group ref={allCans}>
      <group ref={heroCans}>
        <FloatingCan
          groupRef={can1}
          flavor="lemonLime"
          floatSpeed={FLOATING_SPEED}
          position={[-1, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[0, 0, 0]}
        />
        <FloatingCan
          groupRef={can2}
          flavor="strawberryLemonade"
          floatSpeed={FLOATING_SPEED}
          position={[-2, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[0, 0, 0]}
        />
      </group>
      <FloatingCan
        groupRef={can3}
        flavor="blackCherry"
        floatSpeed={FLOATING_SPEED}
        position={[1, 0, 0]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
      />
      <FloatingCan
        groupRef={can4}
        flavor="grape"
        floatSpeed={FLOATING_SPEED}
        position={[2, 0, 0]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
        rotationIntensity={3}
      />
      <FloatingCan
        groupRef={can5}
        flavor="watermelon"
        floatSpeed={FLOATING_SPEED}
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
      />

      <Environment files={["/hdrs/shanghai.jpg"]} />
      <ambientLight intensity={0.8} />
      <directionalLight
        ref={directLightRef}
        position={[0, 2, 5]}
        intensity={1.5}
      />
      <spotLight
        ref={pointLightRef}
        position={[0, -3, 0]}
        intensity={50.5}
        angle={Math.PI / 2}
        penumbra={2}
        color="#fbcf9d"
      />
    </group>
  );
}

export default Scene;
