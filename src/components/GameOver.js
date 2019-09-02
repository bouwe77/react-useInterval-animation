import React from "react";

export default ({ tryAgain }) => (
  <>
    GAME OVER... :(
    <div>
      <button onClick={tryAgain}>Try again!</button>
    </div>
  </>
);
