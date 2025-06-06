"use client";

import { Canvas } from "@react-three/fiber";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Scene: React.FC<Props> = ({ children }) => {
  return (
    <Canvas
      className="border flex-1"
      shadows
      orthographic
      camera={{
        up: [0, 0, 1],
        position: [600, -600, 600],
      }}
    >
      <ambientLight />
      {/* <DirectionalLight /> */}

      {children}
    </Canvas>
  );
};
