import { useState } from "react";
import c from "../constants";

export default () => {
  const [gameStatus, setGameStatus] = useState(c.STOPPED);
  return [gameStatus, setGameStatus];
};
