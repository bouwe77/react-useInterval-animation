import React from "react";

export default ({ restart }) => (
  <>
    GAME OVER... :(
    <div>
      <button onClick={restart}>Try again!</button>
    </div>
  </>
);
