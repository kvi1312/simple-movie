import React from "react";

const Button = ({ onClick, className, type = "button", bgColor = "primary", children }) => {
   let bgClassName = `bg-primary'
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
