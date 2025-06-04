"use client";
import usePlayerAnimation from "@/shared/hooks/use-player-animation";
import { Bounds } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";

interface Props {
  className?: string;
}

export const Player: React.FC<Props> = ({ className }) => {
  const player = useRef<THREE.Group>(null);
  usePlayerAnimation(player);

  return (
    <Bounds fit clip observe margin={10}>
      <group ref={player}>
        <mesh receiveShadow castShadow position={[0, 0, 10]}>
          <boxGeometry args={[15, 15, 20]} />
          <meshLambertMaterial color={0xffffff} flatShading />
        </mesh>

        <mesh position={[0, 0, 21]} castShadow receiveShadow>
          <boxGeometry args={[2, 4, 2]} />
          <meshLambertMaterial color={0xf0619a} flatShading />
        </mesh>
      </group>
    </Bounds>
  );
};
