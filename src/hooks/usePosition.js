import { useState } from "react";
import useInterval from "./useInterval";
import config from "../configuration";

export default (xDirection, yDirection) => {
  const initialX = config.shapeSize;
  const initialY = config.shapeSize;
  const initialSpeed = config.speed;
  const [speed, setSpeed] = useState(initialSpeed);
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);

  useInterval(() => {
    setX(x + xDirection);
    setY(y + yDirection);
  }, [speed]);

  function start() {
    setX(initialX);
    setY(initialY);
    setSpeed(initialSpeed);
  }

  function stop() {
    setSpeed(null);
  }

  return [x, y, stop, start];
};
