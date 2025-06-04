import { tileSize, tilesPerRow } from '@/shared/constants';
import React, { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    rowIndex: number;
  }
  
  export const Road: React.FC<Props> = ({ children, rowIndex }) => {
    return (
      <group position-y={rowIndex * tileSize}>
        <mesh receiveShadow>
          <planeGeometry args={[tilesPerRow * tileSize, tileSize]} />
          <meshLambertMaterial color={0x454a59} flatShading />
        </mesh>
  
        {children}
      </group>
    );
  };
  