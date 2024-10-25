// import { useEffect } from "react";

// const CompExample = () => {

//   useEffect(() => {

//     alert("This code will execute when the component is mounted");

//   });

//   return <h1> Hello World! </h1>;

// };

// export default CompExample;


// import React, { useState } from 'react';

// function NameComponent() {
//   const [name, setName] = useState('');

//   const alertName = () => {
//     alert(name);
//   };

//   const handleNameInput = e => {
//     setName(e.target.value);
//   };

//   return (
//     <div>
//       <h3>This is a Functional Component</h3>
//       <input
//         type="text"
//         onChange={handleNameInput}
//         value={name}
//         placeholder="Your Name"
//       />
//       <button onClick={alertName}>
//         Alert
//       </button>
//     </div>
//   );
// };

// export default NameComponent;

// import React, {useEffect } from 'react'

// function Test1() {
//     const [messages, setMessages] = useState([]);
  
//     useEffect(() => {
//       // Create WebSocket connection.
// const socket = new WebSocket("ws://localhost:8080");

// // Connection opened
// socket.addEventListener("open", (event) => {
//   socket.send("Hello Server!");
// });

// // Listen for messages
// socket.addEventListener("message", (event) => {
//   console.log("Message from server ", event.data);
//   setMessages(prevMessages => [...prevMessages, event.data]);
// });
  
//       return () => {
//         socket.close();
//       };
//     }, []);
  
//     return (
//       <div>
//         <h2>Messages</h2>
//         <ul>
//           {messages.map((msg, index) => (
//             <li key={index}>{msg}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
  


  
import { useReducer } from "react";


    const myReducer = (prevState, action) => {
        let array;
        switch (action.type) {
            case 'ADD':
                array = [...prevState];
                array.push(action.payload);
                return array;
            case 'REMOVE':
                array = [...prevState];
                array.pop();
                return array;
            case 'CLEAR':
                return prevState = [];
            default:
                break;
        }
    };
    
    const Test1 = props => {
        const [state, dispatcher] = useReducer(myReducer, ['initial value']);
        console.log(state);
    
        // Three different state triggers
        const addHandler = () => {
            dispatcher({ type: 'ADD', payload: Math.round((Math.random() * 100 + 100)) });
        };
        const removeHandler = () => {
            dispatcher({ type: 'REMOVE' });
        };
        const clearHandler = () => {
            dispatcher({ type: 'CLEAR' });
        };
    
        return (
            <>
                <hr />
                <h2>useReducer use case</h2>
                <h3>Manage multiple states: modify an array</h3>
                <button onClick={addHandler}>[+] Add random value to array</button>
                <button style={{ margin: "0 2rem" }} onClick={removeHandler}>[-] Remove last value from array</button>
                <button onClick={clearHandler}>[x] Clear array</button>
                <p>Shopping cart array:</p>
                <p><b>{state.length === 0 && '(empty)'}{state.join(' - ')}</b></p>
            </>
        );
    };

  export default Test1