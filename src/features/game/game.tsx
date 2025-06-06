import React from "react";
import { Scene } from "./scene";
import { Player } from "./player";
import { Map } from "./game-map/map";
import { Controls } from "./controls";
import { Score } from "./score";
import { Result } from "./result";

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
      <Score/>
      <Controls />
      <Result/>
    </div>
  );
};
