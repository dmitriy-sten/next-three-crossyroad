import { Row } from "@/shared/types";
import React from "react";
import { Car } from "./car";
import { Road } from "./road";

interface Props {
  rowIndex: number;
  rowData: Extract<Row, { type: "car" }>;
}

export const CarLine: React.FC<Props> = ({ rowData, rowIndex }) => {
  return (
    <Road rowIndex={rowIndex}>
      {rowData.vehicles.map((vehicle, index) => (
        <Car
          key={index}
          rowIndex={rowIndex}
          initialTileIndex={vehicle.initialTileIndex}
          direction={rowData.direction}
          speed={rowData.speed}
          color={vehicle.color}
        />
      ))}
    </Road>
  );
};
