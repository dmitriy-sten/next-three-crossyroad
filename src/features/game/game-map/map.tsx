import React from "react";
import { Grass } from "./grass";
import { rows } from "@/shared/metadata";
import { MapRow } from "./row";

interface Props {
  className?: string;
}

export const Map: React.FC<Props> = ({ className }) => {
  return (
    <>
      <Grass rowIndex={0} />

      {rows.map((rowData, index) => (
        <MapRow key={index} rowIndex={index + 1} rowData={rowData} />
      ))}
    </>
  );
};
