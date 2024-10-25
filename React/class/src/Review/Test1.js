import React,{useState,useEffect} from 'react'

    const Test = () => {
        
        const[state,setState] = useState(0);

        useEffect(() => {
            const updateState = () => {
                setState((state) => {
                    const newState = 8;
                    console.log('updated state', newState);
                    return newState;
                });
            };
            updateState();
        }, []);
    return (
        <div>
        <h1>Hello World {state}</h1>
        </div>
    )
    }

    export default Test