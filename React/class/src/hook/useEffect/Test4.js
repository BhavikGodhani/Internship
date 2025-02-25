

/////////////////////////////////////////////////USe Effetct live example 

import { useEffect, useState } from "react"

    const array = [
        { key: '1', type: 'planet', value: 'Tatooine' },
        { key: '2', type: 'planet', value: 'Alderaan' },
        { key: '3', type: 'starship', value: 'Death Star' },
        { key: '4', type: 'starship', value: 'CR90 corvette' },
        { key: '5', type: 'starship', value: 'Star Destroyer' },
        { key: '6', type: 'person', value: 'Luke Skywalker' },
        { key: '7', type: 'person', value: 'Darth Vader' },
        { key: '8', type: 'person', value: 'Leia Organa' },
    ];
    
    const Test4 = props => {
        const [inputValue, setInputValue] = useState('');
        const [inputType, setInputType] = useState('');
        const [filteredArray, setFilteredArray] = useState(array);
    
        const inputValueHandler = e => {
            setInputValue(e.target.value);
        };
    
        const inputTypeHandler = e => {
            setInputType(e.target.value);
        };
    
        useEffect(() => {
            setFilteredArray((_) => {
                const newArray = array.filter(item => item.value.includes(inputValue)).filter(item => item.type.includes(inputType));
                  console.log(newArray);
                return newArray;
            });
        }, [inputValue, inputType]);
    
        // Prepare array to be rendered
        const listItems = filteredArray.map((item) =>
            <>
                <tr>
                    <td style={{ border: '1px solid lightgray', padding: '0 1rem' }}>{item.type}</td>
                    <td style={{ border: '1px solid lightgray', padding: '0 1rem' }} > {item.value}</td>
                </tr >
            </>
        );
    
        return (
            <>
                <hr />
                <h2>useEffect use case</h2>
                <h3>Running on state change: live filtering</h3>
                <form style={{ maxWidth: '23rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <label htmlFor="input-type">Filter by <b>type</b></label><br />
                        <input type="text" id="input-type" autoComplete="off" onChange={inputTypeHandler} style={{ height: '1.5rem', width: '10rem', marginTop: '1rem' }} />
                    </div>
                    <div>
                        <label htmlFor="input-value">Filter by <b>value</b></label><br />
                        <input type="text" id="input-value" autoComplete="off" onChange={inputValueHandler} style={{ height: '1.5rem', width: '10rem', marginTop: '1rem' }} />
                    </div>
                </form>
                <br />
                <table style={{ width: '20rem', border: '1px solid gray', padding: '0 1rem' }}>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                    </tr>
                    {listItems}
                </table>
            </>
        );
    };

    export default Test4