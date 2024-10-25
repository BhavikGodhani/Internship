import React, { useEffect, useState } from 'react'

function ClickCount() {
    const [clickcount,setclickcount] = useState(0);
    const [name,setname] = useState("")
    
    useEffect(() => {
        console.log("By default Beheviour");
    },[])
  return (
    <div>
     <h1>Click Logger</h1>
     <input type='text' value={name} onChange={e => setname(e.target.value)} />
     <button onClick={() => setclickcount(count => count + 1)}>{clickcount} Click</button>
    </div>
  )
}

export default ClickCount

//////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';

// function ExampleComponent() {
//     const [isVisible, setIsVisible] = useState(true);

//     useEffect(() => {
//         console.log("Component mounted");
//         return () => {
//             console.log("Component will unmount");    
//             };
//     }, []); 

//     const toggleVisibility = () => {
//         setIsVisible(prev => !prev);
//     };

//     return (
//         <div>
//             <h1>Component Lifecycle Example</h1>
//             {isVisible && <ChildComponent />}
//             <button onClick={toggleVisibility}>
//                 {isVisible ? "Hide Child Component" : "Show Child Component"}
//             </button>
//         </div>
//     );
// }

// function ChildComponent() {
//     useEffect(() => {
//         console.log("ChildComponent updated");
//         return () => {
//             console.log("ChildComponent will unmount");
//         };
//     }, []); 
//     return (
//         <div>
//             <p>ChildComponent</p>
//         </div>
//     );
// }

// export default ExampleComponent;


/////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';

// function UserDetails({ userId }) {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 await new Promise(resolve => setTimeout(resolve, 1000));
//                 const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//                 const data = await response.json();
//                 setUserData(data);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         fetchUserData(); 
//     }, [userId]);

   
//     if (!userData) {
//         return <p>Loading...</p>;
//     }
//     return (
//         <div>
//             <h2>User Details</h2>
//             <p><strong>Name:</strong> {userData.name}</p>
//             <p><strong>Email:</strong> {userData.email}</p>
//             <p><strong>Phone:</strong> {userData.phone}</p>
//             <p><strong>Website:</strong> {userData.website}</p>
//         </div>
//     );
// }

// function ExampleComponent() {
//     const [userId, setUserId] = useState(1);

//     const handleChangeUserId = () => {
//         const newUserId = Math.floor(Math.random() * 10) + 1; 
//         setUserId(newUserId);
//     };

//     return (
//         <div>
//             <h1>User Details Example</h1>
//             <button onClick={handleChangeUserId}>Fetch Random User</button>
//             <UserDetails userId={userId} />
//         </div>
//     );
// }