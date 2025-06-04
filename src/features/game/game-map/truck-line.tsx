import { Row } from "@/shared/types";
import React from "react";
import { Road } from "./road";
import { Truck } from "./truck";

interface Props {
  rowIndex: number;
  rowData: Extract<Row, { type: "truck" }>;
}

export const TruckLine: React.FC<Props> = ({ rowData, rowIndex }) => {
  return (
    <Road rowIndex={rowIndex}>
      {rowData.vehicles.map((vehicle, index) => (
        <Truck
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
