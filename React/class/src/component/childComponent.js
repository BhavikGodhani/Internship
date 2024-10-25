
// import React, { useEffect, useState } from 'react';

// function ChildComponent({user}) {
//     const [header, setheader] = useState("hi my name is bhavik");
//     useEffect(() => {
//       const interval =   setInterval(() => {
//              setheader(`hi my name is ${user}`);
//         }, 1000);

//         return () => clearInterval(interval);
//     },[user])

//     const handleHeaderInput = e => {
//         setheader(e.target.value);
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 onChange={handleHeaderInput}
//                 value={header}
//             />
//             <h3 id="header">This is a Class Component</h3>
//         </div>
//     );
// }

// function ParentComponent(){
//        const [user,setuser] = useState("Bhavik");
        
//        const handleChangeUser = () => {
//         setuser("New User");
//     };
//     return(
//            <>
//      <ChildComponent  user ={user}/>
//      <button onClick={handleChangeUser}>Click</button>
//            </>
//     )
// }

// export default ParentComponent


///////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from 'react';

// function ChildComponent() {
//     const [header, setheader] = useState("hi my name is bhavik");
//     //   state = {
//     //     header: 'Welcome to React Hooks'
//     //   }
//     useEffect(() => {
//         setTimeout(() => {
//             const newheader = document.querySelectorAll('#header')[0];
//             newheader.innerHTML = header
//         }, 1000);
//     })
//     //   componentDidMount() {
//     //     const header = document.querySelectorAll('#header')[0];
//     //     setTimeout(() => {
//     //       header.innerHTML = this.state.header;
//     //     }, 3000);
//     //   }
//     //   componentDidUpdate() {
//     //     const node = document.querySelectorAll('#header')[0];
//     //     node.innerHTML = this.state.header;
//     //   }

//     const handleHeaderInput = e => {
//         setheader(e.target.value);
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 onChange={handleHeaderInput}
//                 value={header}
//             />
//             <h3 id="header">This is a Class Component</h3>
//         </div>
//     );
// }


// export default ChildComponent;


//////////////////////////////////////////////////////////////////////////////////
import React from "react";

function ChildCompent(props){
    return (
        <div>
            <button onClick={() => props.greetHandler("Child")}>greetParent</button>
        </div>
    )
}

export default ChildCompent