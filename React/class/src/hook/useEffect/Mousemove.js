import React, { useEffect, useState } from 'react'

 function Mousemove() {
    const [x,setx] = useState(0);
    const [y,sety] = useState(0);

   const logbutton = e  => {
     console.log("Mouse Event");
     setx(e.clientX);
     sety(e.clientY)
   }

    useEffect(() => {
         console.log("UseEffect called");
         document.addEventListener("mousemove",logbutton)

        return () => {
            document.removeEventListener("mousemove",logbutton)
        } 
 },[])
  return (
    <div>
       Hooks X - {x} Y - {y}
    </div>
  )
}

export default Mousemove;