import React,{useState} from "react";

function Clickcount(){
    const inialValue = 0;
const [count,setCount] = useState(inialValue);
const [count1,setCount1] = useState(inialValue);
 



 return (
     <>
     {count}
<button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count - 1)}>Decrement</button>
<button onClick={() => setCount(inialValue)}>Reset</button>
  {count1}
  <button onClick={() => setCount1(count1 + 1)}>Increment</button>
<button onClick={() => setCount1(count1 - 1)}>Decrement</button>
<button onClick={() => setCount1(inialValue)}>Reset</button>
    </>
)
}



export default Clickcount;