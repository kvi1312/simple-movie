import React from 'react';

const LoadingSkeleton = (prop) => {
   return (
      <div className='skeleton' style={{height: prop.height,
      width:prop.width,}}>
         
      </div>
   );
};

export default LoadingSkeleton;