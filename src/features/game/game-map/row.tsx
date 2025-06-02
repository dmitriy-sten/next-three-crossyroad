import type { Row } from "@/shared/types";
import React from "react";
import { Forest } from "./forest";

type Props = {
  rowIndex: number;
  rowData: Row;
};

export const MapRow: React.FC<Props> = ({ rowIndex, rowData }) => {
  switch (rowData.type) {
    case "forest": {
      return <Forest rowData={rowData} rowIndex={rowIndex} />;
    }
  }
};
