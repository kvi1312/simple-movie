import React from 'react';

const Button = ({onClick, className, children}) => {
   return (
      <div>
         <button
          onClick={}
          className=`py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto ${className}`
        >
         {children}
        </button>
      </div>
   );
};

export default Button;