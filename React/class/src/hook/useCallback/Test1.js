import React,{useState} from 'react';

  const Header = (props) => {
    console.log("Rendering header");
    return <div>{props.title}</div>;
};

//   const [count, setCount] = useState(0);
//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]); // Only recreate handleClick when count changes
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <ChildComponent onClick={handleClick} />
//     </div>
//   );
// }
// function ChildComponent({ onClick }) {
//   return (
//     <button onClick={onClick}>Increment</button>
//   );
// }

export default React.memo(Header)


// import React,{useState,useCallback} from 'react'
// import Title from './Title';
// import Count from './Count';
// import Button from './Button';

// function Test1() {
//   const [age,setage] = useState(20);
//   const [salary,setSalary] = useState(20000);

   
//     const incrementage = useCallback(() => {
//         setage(age + 1)
//     },[age])
//     const incrementsalary = useCallback(() => { 
//         setSalary(salary + 1000);
//     },[salary])

//   return (
//     <div>
//       <Title />
//       <Count  text="age" count={age} />
//       <Button handleClick={incrementage}>Increment Age</Button>
//       <Count  text="salary" count={salary} />
//       <Button handleClick={incrementsalary}>Increment salary</Button>
//     </div>
//   )
// }

// export default Test1;
