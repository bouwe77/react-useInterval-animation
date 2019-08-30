import React from "react";

export default ({ width, height, children }) => (
  <svg width={width} height={height}>
    <rect fill="Lightgray" width={width} height={height} />
    {children}
  </svg>
);
