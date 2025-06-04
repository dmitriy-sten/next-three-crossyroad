import type { Row } from "@/shared/types";
import React from "react";
import { Forest } from "./forest";
import { CarLine } from "./car-line";
import { TruckLine } from "./truck-line";

type Props = {
  rowIndex: number;
  rowData: Row;
};

export const MapRow: React.FC<Props> = ({ rowIndex, rowData }) => {
  switch (rowData.type) {
    case "forest": {
      return <Forest rowData={rowData} rowIndex={rowIndex} />;
    }

    case "car": {
      return <CarLine rowData={rowData} rowIndex={rowIndex} />;
    }

    case "truck": {
      return <TruckLine rowData={rowData} rowIndex={rowIndex} />;
    }
  }
};
