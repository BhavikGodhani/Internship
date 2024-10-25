import Mousemove from "./Mousemove"
import React, { useState } from 'react'

function HookMouse() {
    const [display,setdisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setdisplay(!display)}>Click</button>
      {display && < Mousemove/>}
    </div>
  )
}

export default HookMouse
