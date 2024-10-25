// import React, { useRef, useEffect, useState } from 'react';

// export default function MeasureComponent() {
//   const divRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     if (divRef.current) {
//       setDimensions({
//         width: divRef.current.offsetWidth,
//         height: divRef.current.offsetHeight,
//       });
//     }
//   }, []);

//   return (
//     <div ref={divRef}>
//       <p>Width: {dimensions.width}px</p>
//       <p>Height: {dimensions.height}px</p>
//     </div>
//   );

// }

import React, { useEffect, useState } from 'react'

const Test1 = () => {
  const [state,setState] = useState(1);

  useEffect(() => {
    setState(3);
    console.log(state);
  })
  use
  return (
    <div>
      
    </div>
  )
}

export default Test1
