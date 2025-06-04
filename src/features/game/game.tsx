import React from "react";
import { Scene } from "./scene";
import { Player } from "./player";
import { Map } from "./game-map/map";
import { Controls } from "./controls";

interface Props {
  className?: string;
}

export const Game: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex-1 relative">
      <Scene>
        <Player />
        <Map />
      </Scene>
      <Controls />
    </div>
  );
};
