import React, { useState } from 'react'

 function FormOrObject() {
const [items,setitems] = useState([]);

const additem = () =>{
    setitems([...items ,{
        id:items.length,
        value: Math.floor(Math.random() * 10) + 2,
    }])
}

return(
    <div>
        <button onClick={additem}>Add a Number</button>
        <ul>
            {
                items.map(item => <li key={item.id}>{item.value}</li>)
            }
        </ul>
    </div>
)
}

export default FormOrObject


// const [isactive,setactive] = useState(false);

// return(
//     <>
//     <h1>isactive:{isactive ? 'true' : 'false'}</h1>
//     <button onClick={() => setactive(!isactive)}>
//     Toggle
//   </button>
//     </>
// )

/////////////////////////////////////////////////////////////////////////////
//     const [name,setname] = useState({firstname:"",lastname :""});
//   return (
//     <div>
      
//       <form>
//         <input type='text' value={name.firstname} onChange={e => setname({...name ,firstname : e.target.value}) }/>
//         <input type='text' value={name.lastname} onChange={e => setname({...name,lastname : e.target.value}) }/>
//         <h2>FirstName :- {name.firstname}</h2>
//         <h2>LastName:- {name.lastname}</h2>
//       </form>
//     </div>
//   )