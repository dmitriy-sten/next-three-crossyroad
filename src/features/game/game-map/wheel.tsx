import React from "react";

interface Props {
  x: number;
}

export const Wheel: React.FC<Props> = ({ x }) => {
  return (
    <mesh position={[x, 0, 6]}>
      <boxGeometry args={[12, 33, 12]} />
      <meshLambertMaterial color={0x333333} flatShading />
    </mesh>
  );
};
