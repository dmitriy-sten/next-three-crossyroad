"use client";

import { tileSize } from "@/shared/constants";
import * as THREE from "three";
import { Wheel } from "./wheel";
import { useRef } from "react";
import useVehicleAnimation from "@/shared/hooks/use-vehicle-animation";
import { useHitDetection } from "@/shared/hooks/use-hit-detection";

type Props = {
  rowIndex: number;
  initialTileIndex: number;
  direction: boolean;
  speed: number;
  color: THREE.ColorRepresentation;
};

export function Car({
  rowIndex,
  initialTileIndex,
  direction,
  speed,
  color,
}: Props) {
  const car = useRef<THREE.Group>(null);
  useVehicleAnimation(car, direction, speed);
  useHitDetection(car, rowIndex)

  return (
    <group
      ref={car}
      position-x={initialTileIndex * tileSize}
      rotation-z={direction ? 0 : Math.PI}
    >
      <mesh castShadow receiveShadow position={[0, 0, 12]}>
        <boxGeometry args={[60, 30, 15]} />
        <meshLambertMaterial color={color} flatShading />
      </mesh>
      <mesh castShadow receiveShadow position={[-6, 0, 25.5]}>
        <boxGeometry args={[33, 24, 12]} />
        <meshLambertMaterial color={0xffffff} flatShading />
      </mesh>
      <Wheel x={-18} />
      <Wheel x={18} />
    </group>
  );
}
