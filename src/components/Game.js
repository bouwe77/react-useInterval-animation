import React, { useEffect, useState } from "react";
import config from "../configuration";

import usePosition from "../hooks/usePosition";
import useDirection from "../hooks/useDirection";
import useCollisionDetection from "../hooks/useCollisionDetection";

import Canvas from "./Canvas";
import Shape from "./Shape";
import Buttons from "./Buttons";
import Score from "./Score";
import c from "../constants";

export default () => {
  const [xDirection, yDirection, changeDirection, resetDirection] = useDirection();
  const [x, y, start, stop] = usePosition(xDirection, yDirection);
  const [collisionDetected] = useCollisionDetection(x, y);
  const [gameStatus, setGameStatus] = useState(c.STARTED);

  useEffect(() => {
    if (collisionDetected) {
      setGameStatus(c.GAMEOVER);
    }
  }, [collisionDetected]);

  // useEffect(() => {
  //   if (gameStatus === c.STARTING) {
  //     resetDirection();
  //     start();
  //   } else if (gameStatus === c.GAMEOVER) {
  //     stop();
  //   }
  // }, [gameStatus, stop, start, resetDirection]);

  function restart2() {
    setGameStatus(c.STARTING);
  }

  return (
    <>
      <Canvas width={config.canvasWidth} height={config.canvasHeight}>
        <Shape x={x} y={y} size={config.shapeSize} />
      </Canvas>
      <div>
        <Buttons changeDirection={changeDirection} />
        <Score />
      </div>
    </>
  );
};
