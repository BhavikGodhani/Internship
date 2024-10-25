import React, { useEffect, useState } from 'react'
import Test2 from './Test2';



const Test1 = () => {

    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((e) => e.json()).then((d) => setData(d));
    })
  return (
    <div>
        <ul>

      {
          data.map((val,idx) => {
            return <li id={val.id}>{val.name}</li>  
        })
    }
    </ul>
    </div>
  )
}

export default Test1


