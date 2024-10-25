
import React from 'react';

const   Test1 = () => {

    const handleClick =  (e) => {
           console.log(e.value);
    }

  return (
    <div>
      <input type="text" onClick={() => handleClick()}/>
    </div>
  );
}
export default Test1