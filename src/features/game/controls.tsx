"use client";

import useEventListeners from "@/shared/hooks/use-event-listeners";
import { queueMove } from "@/shared/stores/player";
import React from "react";

interface Props {
  className?: string;
}

const btnStyle =
  "w-full h-10 bg-white border border-gray-300 cursor-pointer outline-none shadow-lg";

export const Controls: React.FC<Props> = ({  }) => {
  useEventListeners();

  return (
    <div
      id="controls"
      className={
        "absolute bottom-[20px] min-w-full flex items-end justify-center"
      }
    >
      <div className="grid grid-cols-[50px_50px_50px] gap-[10px]">
        <button
          style={{ gridColumn: "1/-1" }}
          className={btnStyle}
          onClick={() => queueMove("forward")}
        >
          ▲
        </button>
        <button className={btnStyle} onClick={() => queueMove("left")}>
          ◄
        </button>
        <button className={btnStyle} onClick={() => queueMove("backward")}>
          ▼
        </button>
        <button className={btnStyle} onClick={() => queueMove("right")}>
          ►
        </button>
      </div>
    </div>
  );
};
