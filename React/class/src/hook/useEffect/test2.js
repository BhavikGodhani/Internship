import React, { useEffect, useState } from 'react'

 function Test2() {

 const [username,setusername] = useState("johndoe");

 const [firstname,setfirstname] = useState("John");

 const [lastname,setlastname] = useState("Doe");

  useEffect(() => {
    setInterval(() => { 
        setusername("bhavikgodhani")
        setfirstname("bhavik")
       setlastname("godhani")
    }, 5000);
  })



 const handleButton = () => {
    console.log(username,firstname,lastname);
 }
const handleusername = (e) => {
  setusername(e.target.value)
}
const handlefirstname = (e) => {
    setfirstname(e.target.value)
}
const handlelastname = (e) => {
setlastname(e.target.value)
}
  return (
    <div>
      <input type='text' onChange={handleusername} value={username} />
      <input type='text' onChange={handlefirstname} value={firstname} />
      <input type='text' onChange={handlelastname} value={lastname} />
       
       <button onClick={handleButton}>Click</button>
    </div>
  )
}

export default Test2