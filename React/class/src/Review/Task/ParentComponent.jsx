
import React, { useState } from 'react'
import Childleft from './Childleft';
import Childright from './Childright';

const ParentComponent = () => {
  const [state,setState] = useState("[]");

  const handleDataUpdate = (string) => {
      setState(string);
  };

  return (
    <div>
      <Childleft  data={state}/>
      <Childright onDataInput={handleDataUpdate}/>
    </div>
  )
}

export default ParentComponent
