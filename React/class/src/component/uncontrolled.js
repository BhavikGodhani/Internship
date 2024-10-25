import React,{useRef} from "react";

function UncontrolledComponent() {
   
    const inputRef = useRef(null)
    
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Input value - ",inputRef.current.value);
        }}
      >
        <div>
          <label>Uncontrolled input </label>
          <input type="date" name="data" id="date-input" ref={inputRef} />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }

export default UncontrolledComponent;