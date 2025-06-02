'use client'

import { Canvas } from "@react-three/fiber";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Scene: React.FC<Props> = ({ children }) => {
  return (
    <Canvas
      orthographic
      camera={{
        up: [0, 0, 1],
        position: [300, -300, 300],
      }}
    >
      <ambientLight />
      <directionalLight position={[-100, -100, 200]} />

      {children}
    </Canvas>
  );
};
