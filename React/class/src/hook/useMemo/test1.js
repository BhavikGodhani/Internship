// import React, { useMemo, useState } from 'react';

// function ExpensiveComponent({ data }) {
//   // Simulate an expensive calculation
//   const calculateResult = (data) => {
//     // Simulating a heavy computation
//     let result = 0;
//     for (let i = 0; i < 1000000; i++) {
//       result += data;
//     }
//     return result;
//   };

//   // Memoize the result of the expensive calculation
//   const memoizedResult = useMemo(() => calculateResult(data), [data]);

//   return <div>Result: {memoizedResult}</div>;
// }

// function Data() {
//   const [data, setData] = useState(1);
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div>
//       <ExpensiveComponent data={data} />
//       <button onClick={() => setData(data + 1)}>Change Data</button>
//       <button onClick={() => setToggle(!toggle)}>Toggle</button>
//     </div>
//   );
// }

// export default Data;

// import React, { useMemo, useState } from 'react';

// export default function ItemList({ items }) {
//   const [search, setSearch] = useState('');
//   const [count,setCount] = useState(0);

//   const filteredItems = useMemo(() => {
//     if (!Array.isArray(items)) {
//       return [];

//     }
//     return items.filter(item => item.toLowerCase().includes(search.toLowerCase()));
//   }, [items, search]);

//   // Increment function
//   const Increment = () => {
//     setCount(prevCount => prevCount + 1); // Use functional update to ensure you are working with the latest state
//   };

//   return (
//     <div>
//       {count}
//       <input 
//         type="text" 
//         placeholder="Search items" 
//         value={search} 
//         onChange={(e) => setSearch(e.target.value)} 
//       />
//      <button onClick={Increment}>Click</button>
//       <ul>
//         {filteredItems.map(item => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useState, useMemo } from 'react';

const ChildComponent = ({ data, onClick }) => {
  console.log('ChildComponent re-rendered');
  return (
    <div>
      <button onClick={onClick}>Click me</button>
      <p>{data}</p>
    </div>
  );
};

const ParentComponent = () => {
  const [data, setData] = useState('Some data');
  const [count, setCount] = useState(0);

  // Memoize the props passed to ChildComponent
  const memoizedProps = useMemo(() => ({
    data,
    onClick: () => setCount(count + 1)
  }), [data, count]);

  return (
    <div>
      <ChildComponent {...memoizedProps} />
      <button onClick={() => setData('Updated data')}>Update Data</button>
    </div>
  );
};

export default ParentComponent