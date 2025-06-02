'use client'
import { Bounds } from "@react-three/drei";
import React from "react";

interface Props {
  className?: string;
}

export const Player: React.FC<Props> = ({ className }) => {
  return (
    <Bounds fit clip observe margin={10}>
      <mesh position={[0, 0, 10]}>
        <boxGeometry args={[15, 15, 20]} />
        <meshLambertMaterial color={0xffffff} flatShading />
      </mesh>
    </Bounds>
  );
};
