import React,{useReducer} from 'react'
const initialValue = {
    firstcounter:0,secondcounter:10,
};
const reducer = (state,action) => {
    switch (action.type) {
        case "increment":
            return {...state,firstcounter : state.firstcounter + action.value};
        case "decrement":
            return {...state,firstcounter : state.firstcounter - action.value};
        case "increment2":
                return {...state,secondcounter : state.secondcounter + action.value};
        case "decrement2":
                return {...state,secondcounter : state.secondcounter - action.value};;    
        case 'reset':
            return initialValue;
        default:
            return state;
    }
}
function Test2() {
   const [count,dispatch] = useReducer(reducer,initialValue);
  return (
    <div>
        <div>Count:- {count.firstcounter}</div>
        <div>Count2:-{count.secondcounter}</div>
      <button onClick={() => dispatch({type:"increment",value:1})}>Increment</button>
      <button onClick={() => dispatch({type:"decrement",value:1})}>Decrement</button>
      <br/>
      <button onClick={() => dispatch({type:"increment2",value:2})}>Increment2</button>
      <button onClick={() => dispatch({type:"decrement2",value:2})}>Decrement2</button>
      <button onClick={() => dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default Test2