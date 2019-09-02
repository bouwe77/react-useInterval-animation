import { useState } from "react";
import config from "../configuration";

export default () => {
  const initialX = config.shapeSize;
  const initialY = config.shapeSize;
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);

  function updatePosition(xDirection, yDirection) {
    setX(x + xDirection);
    setY(y + yDirection);
  }

  function reset() {
    setX(initialX);
    setY(initialY);
  }

  return [x, y, updatePosition, reset];
};
