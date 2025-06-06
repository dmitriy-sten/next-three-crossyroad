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

export function Truck({
  rowIndex,
  initialTileIndex,
  direction,
  speed,
  color,
}: Props) {
  const truck = useRef<THREE.Group>(null);
  useVehicleAnimation(truck, direction, speed);
  useHitDetection(truck, rowIndex);

  return (
    <group
      ref={truck}
      position-x={initialTileIndex * tileSize}
      rotation-z={direction ? 0 : Math.PI}
    >
      <mesh receiveShadow castShadow position={[-15, 0, 25]}>
        <boxGeometry args={[70, 35, 35]} />
        <meshLambertMaterial color={0xb4c6fc} flatShading />
      </mesh>

      <mesh receiveShadow castShadow position={[35, 0, 20]}>
        <boxGeometry args={[30, 30, 30]} />
        <meshLambertMaterial color={color} flatShading />
      </mesh>

      <Wheel x={-35} />
      <Wheel x={5} />
      <Wheel x={37} />
    </group>
  );
}
