import { tileSize } from "@/shared/constants";
import React from "react";

interface Props {
  tileIndex: number;
  height: number;
}

export const Tree: React.FC<Props> = ({ tileIndex, height }) => {
  return (
    <group position-x={tileIndex * tileSize}>
      <mesh position-z={height / 2 + 20}>
        <boxGeometry args={[30, 30, height]} />
        <meshLambertMaterial color={0x7aa21d} flatShading />
      </mesh>
      <mesh position-z={10}>
        <boxGeometry args={[15, 15, 20]} />
        <meshLambertMaterial color={0x4d2629} flatShading />
      </mesh>
    </group>
  );
};
