// import React from 'react'

// function  Button({handleclick,children}) {

//     console.log("Rendering button ",children);
//   return (
//     <div>
//        <button onClick={handleclick}>{children}</button>
//     </div>
//   )
// }

// export default React.memo(Button)

import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click Me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  },[]);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
    </div>
  );
};

export default ParentComponent;
