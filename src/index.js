import React, { useState } from "react";
import ReactDOM from "react-dom";
import useInterval from "./useInterval";
import Canvas from "./Canvas";
import Shape from "./Shape";

function App() {
  const speed = 60;
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

  useInterval(
    () => {
      setX(x + 1);
      setY(y + 1);
    },
    { speed }
  );

  return (
    <Canvas>
      <Shape x={x} y={y} />
    </Canvas>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
