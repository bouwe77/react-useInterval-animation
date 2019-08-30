import React from "react";
import c from "../constants";

export default ({ changeDirection }) => (
  <>
    <button onClick={() => changeDirection(c.UP)}>{c.UP}</button>
    <button onClick={() => changeDirection(c.LEFT)}>{c.LEFT}</button>
    <button onClick={() => changeDirection(c.RIGHT)}>{c.RIGHT}</button>
    <button onClick={() => changeDirection(c.DOWN)}>{c.DOWN}</button>
    <button onClick={() => changeDirection(c.NOWHERE)}>PAUSE</button>
  </>
);
