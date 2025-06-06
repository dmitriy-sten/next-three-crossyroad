"use client";

import React from "react";
import { Grass } from "./grass";
import { MapRow } from "./row";
import { useStore } from "@/shared/stores/map";

interface Props {
  className?: string;
}

export const Map: React.FC<Props> = ({  }) => {
  const rows = useStore((state) => state.rows);
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
