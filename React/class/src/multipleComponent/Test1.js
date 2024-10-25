import React, { useState } from 'react';
import Test2 from './Test2';

function Test1() {
  const [showTest2, setShowTest2] = useState(true);

  const handleClick = () => {
    setShowTest2(!showTest2); 
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {showTest2 && <Test2 />} 
    </div>
  );
}

export default Test1;
