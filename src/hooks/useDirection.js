import { useState } from "react";
import c from "../constants";

export default () => {
  const initialXDirection = 1;
  const initialYDirection = 1;
  const [xDirection, setXDirection] = useState(initialXDirection);
  const [yDirection, setYDirection] = useState(initialYDirection);

  function changeDirection(direction) {
    switch (direction) {
      case c.LEFT:
        setXDirection(-1);
        setYDirection(0);
        break;
      case c.RIGHT:
        setXDirection(1);
        setYDirection(0);
        break;
      case c.UP:
        setXDirection(0);
        setYDirection(-1);
        break;
      case c.DOWN:
        setXDirection(0);
        setYDirection(1);
        break;
      default:
        setXDirection(0);
        setYDirection(0);
        break;
    }
  }

  function reset() {
    setXDirection(initialXDirection);
    setYDirection(initialYDirection);
  }

  return [xDirection, yDirection, changeDirection, reset];
};
