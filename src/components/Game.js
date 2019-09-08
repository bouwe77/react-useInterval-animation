import React, { useEffect, useState, useCallback } from "react";
import config from "../configuration";

import useInterval from "../hooks/useInterval";
import usePosition from "../hooks/usePosition";
import useDirection from "../hooks/useDirection";
import useCollisionDetection from "../hooks/useCollisionDetection";

import GameOver from "./GameOver";
import Canvas from "./Canvas";
import Shape from "./Shape";
import Buttons from "./Buttons";
import Score from "./Score";
import c from "../constants";

export default () => {
  const [xDirection, yDirection, changeDirection, resetDirection] = useDirection();
  const [x, y, updatePosition, resetPosition] = usePosition();
  const [collisionDetected] = useCollisionDetection(x, y);
  const [gameStatus, setGameStatus] = useState(c.STARTED);
  const [speed, setSpeed] = useState(null);

TODO De game werkt niet meer want deze useEffects zitten elkaar in de weg.
Als ik de deps fix dan moet ik useCallback gebruiken.
Waarschijnlijk is de oplossing dat ik een custom hook maak die de game status regelt
zodat ik minder last heb van dependencies en zo... Dat was toen ook zo bij de 
useTimeline custom hook van nitwit. Toen ik daar een hook van maakte loste ik zomaar
al mijn useEffect/useCallback gedoe op. Wat daarbij ook funest was was dat ik minder
verschillende useEffects ging gebruiken.

  const start = () => {
    resetPosition();
    resetDirection();
    setSpeed(100);
  };

  useEffect(() => {
    start();
  }, []);

  function stop() {
    setSpeed(null);
  }

  useInterval(() => {
    updatePosition(xDirection, yDirection);
  }, speed);

  useEffect(() => {
    if (collisionDetected) {
      setGameStatus(c.GAMEOVER);
    }
  }, [collisionDetected]);

  useEffect(() => {
    if (gameStatus === c.GAMEOVER) {
      stop();
    }
  }, [gameStatus]);

  return (
    <>
      <Canvas width={config.canvasWidth} height={config.canvasHeight}>
        <Shape x={x} y={y} size={config.shapeSize} />
      </Canvas>
      <div>
        <Buttons changeDirection={changeDirection} />
        <Score />
      </div>

      {gameStatus === c.GAMEOVER ? <GameOver tryAgain={start} /> : null}
    </>
  );
};
