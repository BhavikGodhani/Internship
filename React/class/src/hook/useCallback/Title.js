

import React, { useState, useCallback } from 'react';
function Title() {

    const [inputValue, setInputValue] = useState('');
  
    const handleChange = useCallback((e) => {
      console.log("xcvhjl");
      setInputValue(e.target.value);
    },[]);
  
    return(
      <>
     <input type="text" value={inputValue} onChange={handleChange} />
     {inputValue}
      </>
   )
  };


export default Title
