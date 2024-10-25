// import React, { useState, useEffect } from 'react';

// const fetchData = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Item 1", "Item 2", "Item 3"]);
//         }, 2000);
//     });
// };

// // Custom hook for subscription
// const useSubscription = (subscribe) => {
//     useEffect(() => {
//         const unsubscribe = subscribe();

//         return () => {
//             unsubscribe();
//         };
//     }, [subscribe]);
// };

// const ComplexComponent = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [count, setCount] = useState(0);

//     // Fetch data on mount and update state
//     useEffect(() => {
//         const loadData = async () => {
//             const result = await fetchData();
//             setData(result);
//             setLoading(false);
//         };

//         loadData();
//     }, []); 

//     // Effect for count changes
//     useEffect(() => {
//         console.log(`Count has been updated to ${count}`);
//     }, [count]); 
    
//     // Custom hook usage example
//     useSubscription(() => {
//         console.log("Subscribed");
//         // Return an unsubscribe function
//         return () => {
//             console.log("Unsubscribed");
//         };
//     });

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>Data</h1>
//             <ul>
//                 {data.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//             <button onClick={() => setCount(count + 1)}>Increment Count</button>
//             <p>Count: {count}</p>
//         </div>
//     );
// };

// export default ComplexComponent;


import React from 'react';

function Greeting() {
  var name = 'Alice'; // This is a regular variable, not part of state
   var modify = name;
  return (
    <div>
      <p>Hello, {modify}!</p>
    </div>
  );
}

export default Greeting;