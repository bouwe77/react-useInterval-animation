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
