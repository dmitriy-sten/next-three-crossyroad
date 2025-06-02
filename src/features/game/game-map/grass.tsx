import { tileSize, tilesPerRow } from "@/shared/constants";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  rowIndex: number;
}

export const Grass: React.FC<Props> = ({ children, rowIndex }) => {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh>
        <boxGeometry args={[tilesPerRow * tileSize, tileSize, 3]} />
        <meshLambertMaterial color={0xbaf455} flatShading />
      </mesh>

      {children}
    </group>
  );
};
