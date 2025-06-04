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
      <Grass rowIndex={-1} />
      <Grass rowIndex={-2} />
      <Grass rowIndex={-3} />
      <Grass rowIndex={-4} />

      {rows.map((rowData, index) => (
        <MapRow key={index} rowIndex={index + 1} rowData={rowData} />
      ))}
    </>
  );
};
