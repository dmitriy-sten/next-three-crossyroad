"use client";
import usePlayerAnimation from "@/shared/hooks/use-player-animation";
import { Bounds } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { DirectionalLight } from "./directional-light";
import { setRef } from "@/shared/stores/player";

interface Props {
  className?: string;
}

export const Player: React.FC<Props> = ({ className }) => {
  const player = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const camera = useThree((state) => state.camera);

  usePlayerAnimation(player);

  useEffect(() => {
    if (!player.current) return;
    if (!lightRef.current) return;

    player.current.add(camera);
    lightRef.current.target = player.current;

    setRef(player.current);
  });

  return (
    <Bounds fit clip observe margin={10}>
      <group ref={player}>
        <group>
          <mesh receiveShadow castShadow position={[0, 0, 10]}>
            <boxGeometry args={[15, 15, 20]} />
            <meshLambertMaterial color={0xffffff} flatShading />
          </mesh>

          <mesh position={[0, 0, 21]} castShadow receiveShadow>
            <boxGeometry args={[2, 4, 2]} />
            <meshLambertMaterial color={0xf0619a} flatShading />
          </mesh>
        </group>
        <DirectionalLight ref={lightRef} />
      </group>
    </Bounds>
  );
};
