import React from "react";

const LoadingSkeleton = (prop) => {
  return (
    <div
      className="skeleton"
      style={{
        height: prop.height,
        width: prop.width ,
        borderRadius: prop.radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
