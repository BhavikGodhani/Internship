// import React from 'react';
// Regular functional component
// function ExpensiveComponent({ data }) {
//   console.log('Rendering ExpensiveComponent');
//   // Expensive rendering logic
//   return <div>{data}</div>;
// }

// // Memoized version of the component
// const MemoizedExpensiveComponent = React.memo(ExpensiveComponent);

// function ParentComponent() {
//   const [count, setCount] = React.useState(0);
//   const [data, setData] = React.useState('Some Data');

//   return (
//     <div>
//       {count}
//       <MemoizedExpensiveComponent data={data} />
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <button onClick={() => setData(data === 'Some Data' ? 'Other Data' : 'Some Data')}>Change Data</button>
//     </div>
//   );
// }

// export default ParentComponent;



//////////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import Todos from "./Todos";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount(c => c + 1);
  };

  const addTodo = () => {
    setTodos(t => [...t, `todo ${t.length + 1}`]);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
};

export default Memo;
