import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center flex-col max-w-lg">
      <span className="number">404</span>
      <span className="text-center">
        Ooops...
        <br />
        Page Not Found
      </span>
    </div>
  );
};

export default NotFound;
