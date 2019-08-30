import React from "react";

export default ({ width, height, children }) => {
  const Background = () => <rect fill="Lightgray" width={width} height={height} />;

  return (
    <svg width={width} height={height}>
      <Background />
      {children}
    </svg>
  );
};
