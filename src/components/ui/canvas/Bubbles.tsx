"use client";

import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

// using Object3D as a temporary container to efficiently calculate and apply positions and scales for each bubble instance
// InstancedMesh has no individual child objects, so we use this Object3D to manage each bubble's transformations
// dummy is used to create a matrix for each bubble and write it back to the instanced mesh
const dummy = new THREE.Object3D();

export function Bubbles({
  count = 300,
  speed = 1,
  bubbleSize = 0.04,
  opacity = 0.3,
  repeat = true,
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // create an array with individual bubble speeds (Float32Array for GPU efficiency)
  const bubbleSpeed = useRef(new Float32Array(count));
  const minSpeed = speed * 0.001;
  const maxSpeed = speed * 0.005;

  // create a sphere geometry and a transparent material for the bubbles
  const geometry = new THREE.SphereGeometry(bubbleSize, 16, 16);
  const material = new THREE.MeshStandardMaterial({
    transparent: true,
    opacity,
  });

  // runs once on mount to initialize and randomly place all bubbles
  useEffect(() => {
    // access the instanced mesh
    const mesh = meshRef.current;
    if (!mesh) {
      return;
    }

    const maxPosition = 4;
    // create {count} number of bubbles in random locations
    for (let i = 0; i < count; i++) {
      dummy.position.set(
        gsap.utils.random(-maxPosition, maxPosition),
        gsap.utils.random(-maxPosition, maxPosition),
        gsap.utils.random(-maxPosition, maxPosition),
      );

      // updateMatrix() must be called so that dummy.matrix reflects the current position/rotation/scale
      dummy.updateMatrix();
      // apply the updated dummy matrix to the instanced mesh at index i
      mesh.setMatrixAt(i, dummy.matrix);

      // random bubble speed
      bubbleSpeed.current[i] = gsap.utils.random(minSpeed, maxSpeed);
    }

    mesh.instanceMatrix.needsUpdate = true;
    return () => {
      // clean up when the component unmounts (or when dependencies change)
      // dispose of geometry and material to free GPU memory
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
    };
  }, [count, minSpeed, maxSpeed]);

  // useFrame runs on every animation frame
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    // assign current body color to bubbles so bubble color matches the background
    material.color = new THREE.Color(document.body.style.backgroundColor);

    for (let i = 0; i < count; i++) {
      // get the matrix of the bubble at index i
      meshRef.current.getMatrixAt(i, dummy.matrix);
      // extract the position from the 4x4 matrix
      dummy.position.setFromMatrixPosition(dummy.matrix);

      // Move bubble upwards by its speed
      dummy.position.y += bubbleSpeed.current[i];

      // Reset bubble position if it moves off the top of the screen
      if (dummy.position.y > 4 && repeat) {
        dummy.position.y = -2; // Reset to bottom
        dummy.position.x = gsap.utils.random(-4, 4);
        dummy.position.z = gsap.utils.random(0, 4);
      }

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    // Mark the instance matrix as needing an update, so the new positions of the bubbles are rendered.
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
      position={[0, 0, 0]}
      material={material}
      geometry={geometry}
    ></instancedMesh>
  );
}
