import React, { useState } from "react";
import ReactDOM from "react-dom";
import useInterval from "./useInterval";

function App() {
  let [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
