import React from "react";
import { Scene } from "./scene";
import { Player } from "./player";
import { Map } from "./game-map/map";

interface Props {
  className?: string;
}

export const Game: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex-1">
      <Scene>
        <Player />
        <Map />
      </Scene>
    </div>
  );
};
