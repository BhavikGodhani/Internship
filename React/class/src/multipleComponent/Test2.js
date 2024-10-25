import React, { useState } from 'react'

import Test3 from"./Test3"

function Test2() {
 const [state1,setState1] = useState(true);
 
 const handleClick = () => {
    setState1(!state1);
 }


  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {state1 && <Test3 />}
    </div>
  )
}

export default Test2;