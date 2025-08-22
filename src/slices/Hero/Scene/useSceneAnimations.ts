import { useGSAP } from "@/plugins";
import { RefObject } from "react";
import animateScene from "./Scene.animations";
import { Group } from "three";

export type SceneAnimationProps = {
  allCans: RefObject<Group | null>;
  heroCans: RefObject<Group | null>;
  can1: RefObject<Group | null>;
  can2: RefObject<Group | null>;
  can3: RefObject<Group | null>;
  can4: RefObject<Group | null>;
  can5: RefObject<Group | null>;
};

export type SceneAnimationResolvedProps = {
  allCans: RefObject<Group>;
  heroCans: RefObject<Group>;
  can1: RefObject<Group>;
  can2: RefObject<Group>;
  can3: RefObject<Group>;
  can4: RefObject<Group>;
  can5: RefObject<Group>;
};

const useSceneAnimations = (props: SceneAnimationProps) => {
  const { allCans, heroCans, can1, can2, can3, can4, can5 } = props;
  // const sceneTl = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      if (
        !heroCans.current ||
        !allCans.current ||
        !can1.current ||
        !can2.current ||
        !can3.current ||
        !can4.current ||
        !can5.current
      ) {
        return;
      }
      const resolved = props as SceneAnimationResolvedProps;
      animateScene(resolved);
    },
    {
      scope: allCans,
      dependencies: [],
    },
  );
  return {};
};

export default useSceneAnimations;
