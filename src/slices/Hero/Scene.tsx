import { Environment } from "@react-three/drei/core/Environment";
import FloatingCan from "@/components/ui/FloatingCan";
import type { Group } from "three";

import { useRef } from "react";

function Scene() {
  const can1 = useRef<Group>(null);
  const can2 = useRef<Group>(null);
  const can3 = useRef<Group>(null);
  const can4 = useRef<Group>(null);
  const can5 = useRef<Group>(null);

  const allCans = useRef<Group>(null);
  const heroCans = useRef<Group>(null);

  return (
    <group ref={allCans}>
      <group ref={heroCans}>
        <FloatingCan
          groupRef={can1}
          flavor="lemonLime"
          position={[-1, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[0, 0, 0]}
        />
        <FloatingCan
          groupRef={can2}
          flavor="strawberryLemonade"
          position={[-2, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[0, 0, 0]}
          floatingRange={[-1,1]}
        />
      </group>
      <FloatingCan
        groupRef={can3}
        flavor="blackCherry"
        position={[1, 0, 0]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
      />
      <FloatingCan
        groupRef={can4}
        flavor="grape"
        position={[2, 0, 0]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
        rotationIntensity={3}
      />
      <FloatingCan
        groupRef={can5}
        flavor="watermelon"
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
        floatSpeed={3}
      />

      <Environment files={["/hdrs/shanghai.jpg"]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 2, 5]} intensity={3.5} />
      <rectAreaLight position={[0, 0, 3]} intensity={0.5} color="#fbcf9d" />
      <spotLight
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
