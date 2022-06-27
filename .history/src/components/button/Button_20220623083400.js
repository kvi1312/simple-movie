import React from 'react';

const Button = () => {
   return (
      <div>
         <button
          onClick={() => navigate(`/movie/${id}`)}
          className="py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto"
        >
          Watch now
        </button>
      </div>
   );
};

export default Button;