import React, { useState, useEffect } from 'react';

const ComponentDidMountExample = () => {
  const [count ,setcount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    // This code runs only once after the initial render
    console.log('Component did mount');
     
    document.title = `Count is ${count}`
    // Simulate fetching data from an API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));

    // Optional cleanup function
    return () => {
      console.log('Cleanup function if needed');
    };
},[]); // Empty dependency array

  return (
    <div>
      <button onClick={() => setcount(count => count +1)}>Click {count}</button>
      <h1>ComponentDidMount Example</h1>
      <p>Data: {data ? JSON.stringify(data) : 'Loading...'}</p>
    </div>
  );
};

export default ComponentDidMountExample;
