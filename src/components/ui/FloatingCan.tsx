import SodaCan, { SodaCanProps } from "@/components/ui/SodaCan";
import { Float } from "@react-three/drei";
import type { Group } from "three";

type Props = {
  groupRef?: React.RefObject<Group | null>;
  flavor?: SodaCanProps["flavor"];
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  floatIntensity?: number;
  floatingRange?: [number, number];
  rotationIntensity?: number;
  floatSpeed?: number;
  children?: React.ReactNode;
};

const FloatingCan = ({
  groupRef,
  flavor = "blackCherry",
  floatIntensity = 0.5,
  floatingRange = [-0.5, 0.5],
  rotationIntensity = 1,
  floatSpeed = 1.5,
  children,
  ...props
}: Props) => {
  return (
    <group ref={groupRef} {...props}>
      <Float
        floatIntensity={floatIntensity}
        floatingRange={floatingRange}
        rotationIntensity={rotationIntensity}
        speed={floatSpeed}
      >
        {children}
        <SodaCan flavor={flavor} />
      </Float>
    </group>
  );
};

export default FloatingCan;
