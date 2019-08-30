import React, { useEffect, useState } from "react";

import Game from "./Game";
import GameOver from "./GameOver";
import c from "../constants";
import useGame from "../hooks/useGame";

export default () => {
  const [gameStatus] = useGame();
  return <>{gameStatus === c.GAMEOVER ? <GameOver /> : <Game />}</>;
};
