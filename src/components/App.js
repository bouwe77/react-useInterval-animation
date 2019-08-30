import React, { useEffect, useState } from "react";
import config from "../configuration";

import usePosition from "../hooks/usePosition";
import useDirection from "../hooks/useDirection";
import useCollisionDetection from "../hooks/useCollisionDetection";

import Canvas from "./Canvas";
import Shape from "./Shape";
import Buttons from "./Buttons";
import Score from "./Score";
import GameOver from "./GameOver";
import c from "../constants";

export default () => {
  const [xDirection, yDirection, changeDirection, resetDirection] = useDirection();
  const [x, y, stop, start] = usePosition(xDirection, yDirection);
  const collisionDetected = useCollisionDetection(x, y);
  const [gameStatus, setGameStatus] = useState(c.STARTED);

  useEffect(() => {
    if (collisionDetected) {
      setGameStatus(c.GAMEOVER);
    }
  }, [collisionDetected]);

  useEffect(() => {
    //// console.log(gameStatus);

    if (gameStatus === c.STARTING) {
      start();
      resetDirection();
    } else if (gameStatus === c.GAMEOVER) {
      stop();
    }
  }, [gameStatus, stop, start, resetDirection]);

  function restart2() {
    setGameStatus(c.STARTING);
  }

  return (
    <>
      {gameStatus === c.GAMEOVER ? (
        <GameOver restart={restart2} />
      ) : (
        //"jammer"
        <>
          <Canvas width={config.canvasWidth} height={config.canvasHeight}>
            <Shape x={x} y={y} size={config.shapeSize} />
          </Canvas>
          <div>
            <Buttons changeDirection={changeDirection} />
            <Score />
          </div>
        </>
      )}
    </>
  );
};
