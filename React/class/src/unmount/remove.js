import React, { useEffect } from 'react';

const WindowResizeListener = () => {

  let isToggled = false;

  const handleClick = () => {
    isToggled = !isToggled;
    console.log('Toggled:', isToggled); // This won't affect the UI
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isToggled ? 'Hide' : 'Show'} Feature
      </button>
    </div>
  );
};

export default WindowResizeListener;
//////////////////////////////////////////////
// import React,{Component} from "react";

// class Remove extends Component {
  
//     constructor(props){
//         super(props);
//         this.state = {show:true};
//     }
//     delHeader = () => {
//         this.setState({show:false})
//     }
    
//      render(){
//         let myheader;
//         if (this.state.show) {
//           myheader = <Child />;
//         }

//          return (
//         <div>
//         {myheader}
//         <button type="button" onClick={this.delHeader}>Delete Header</button>
//         </div>
//       );
      
//     }

// }

// class Child extends Component {
//     componentWillUnmount() {
//         alert("The component named Header  unmounted.");
//       }
      
//       render() {
//         return (
//           <h1 id="elem" className="name">Hello World!</h1>
//         );
//       }
// }


// export default Remove;