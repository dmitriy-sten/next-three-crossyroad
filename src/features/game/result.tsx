"use client";

import { useGameStore } from "@/shared/stores/game";
import React from "react";

interface Props {
  className?: string;
}

export const Result: React.FC<Props> = ({  }) => {
  const { score, status, reset } = useGameStore();

  if (status === "running") return null;

  return (
    <div className="absolute size-full top-0 flex items-center justify-center">
      <div className="flex flex-col items-center bg-white p-5">
        <h1 className="font-semibold">Game Over</h1>
        <p className="mb-3">Your score: {score}</p>
        <button
          className="bg-red-500 py-4 px-12 cursor-pointer"
          onClick={reset}
        >
          Retry
        </button>
      </div>
    </div>
  );
};
