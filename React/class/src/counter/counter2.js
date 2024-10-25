import React from "react";
import UpdatedComponent from "./UpdatedCounter";

class Counter2 extends React.Component {
    render() {
        const { count, increment, name } = this.props; // Destructure name prop
        return (
            <button onClick={increment}>
                {name} Click {count}
            </button>
        );
    }
}

export default UpdatedComponent(Counter2,5); 
