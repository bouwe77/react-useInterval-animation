import React, { useState } from "react";
import ReactDOM from "react-dom";
import useInterval from "./useInterval";
import Canvas from "./Canvas";
import Shape from "./Shape";

function App() {
  const speed = 100;
  const canvasWidth = 400;
  const canvasHeight = 400;
  const shapeSize = 20;
  let [x, setX] = useState(shapeSize);
  let [y, setY] = useState(shapeSize);

  useInterval(() => {
    // setX(x + 1);
    //setY(y + 1);
  }, speed);

  return (
    <Canvas width={canvasWidth} height={canvasHeight}>
      <Shape x={x} y={y} size={shapeSize} />
    </Canvas>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
