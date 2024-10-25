import React, { useState } from 'react'

const Childright = ({onDataInput}) => {
  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');
  const [items,setItems] = useState([]);

  const handleAdd =  () => {
    if (rollNo && name) {
      const newEntry = { rollNo, name };
          
      setItems([...items,newEntry]);

      const updatedData = JSON.stringify(items);
      // console.log(updatedData);
  
      onDataInput(updatedData);

      setRollNo('');
      setName('');
  }
  }
  return (
    <div>
      <input  type='text' placeholder='Roll no'  value={rollNo}  onChange={(e) => setRollNo(e.target.value)}  />
      <input  type='text' placeholder='Name'     value={name}    onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

    </div>
  )
}

export default Childright
