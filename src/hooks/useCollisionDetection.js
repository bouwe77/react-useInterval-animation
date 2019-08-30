import config from "../configuration";
import { useState } from "react";

export default (x, y) => {
  const [collisionDetected, setCollisionDetected] = useState(false);

  const c =
    x >= config.canvasWidth - config.shapeSize || y >= config.canvasHeight - config.shapeSize;
  if (c !== collisionDetected) setCollisionDetected(c);

  return collisionDetected;
};
