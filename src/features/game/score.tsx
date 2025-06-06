'use client'

import { useGameStore } from "@/shared/stores/game";
import React from "react";

interface Props {
  className?: string;
}

export const Score: React.FC<Props> = ({ className }) => {
  const { score } = useGameStore();

  return (
    <div className={"absolute top-5 left-5 text-7xl text-slate-500"}>{score}</div>
  );
};
