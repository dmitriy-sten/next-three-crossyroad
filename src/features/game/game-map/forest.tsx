import { Row } from "@/shared/types";
import React from "react";
import { Grass } from "./grass";
import { Tree } from "./tree";

interface Props {
  rowIndex: number;
  rowData: Extract<Row, { type: "forest" }>;
}

export const Forest: React.FC<Props> = ({ rowData, rowIndex }) => {
  return (
    <Grass rowIndex={rowIndex}>
      {rowData.trees.map((tree, index) => (
        <Tree key={index} tileIndex={tree.tileIndex} height={tree.height} />
      ))}
    </Grass>
  );
};
