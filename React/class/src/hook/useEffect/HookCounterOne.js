import React, { useState, useEffect } from 'react';

function ExampleComponent({ someProp }) {
  const [someState, setSomeState] = useState([]);

 
  useEffect(() => {
    console.log('useEffect triggered');
    fetch('https://dummyjson.com/todos')
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched:', data);
        setSomeState(data.todos);
      });

    return () => {
      console.log('Clean-up function');
    };
  }, []); 
  
  return (
    <div>
          <h1>SomeProp: {someProp}</h1> 
 <ul>
        {someState.map(todo => (
          <li key={todo.id}>
            {todo.id} - {todo.todo}:-{todo.userId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleComponent;
