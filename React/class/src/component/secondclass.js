import React,{Component} from "react";


class Welcome1 extends Component {  
      constructor(props) {
          super(props);
          this.state = {favoritecolor: "red",
          };
        }
        // static getDerivedStateFromProps(props,state){
        //     return{favoritecolor: state.favcol}
        // }
        // componentDidMount() {
        //    setTimeout(() => {
        //     this.setState({favoritecolor: "yellow"})
        //    },1000)
        // }
        getSnapshotBeforeUpdate(prevProps, prevState) {
          document.getElementById("div1").innerHTML =
          "Before the update, the favorite was " + prevState.favoritecolor;
        }
        componentDidUpdate() {
          document.getElementById("div2").innerHTML =
          "The updated favorite is " + this.state.favoritecolor;
        }
        render() {
          return (
            <div>
              <h1>My Favorite Color is {this.state.favoritecolor}</h1>
              <div id="div1"></div>
              <div id="div2"></div>
            </div>
          );
        }
  }
  
  export default Welcome1
  
  
  
  
  
  ///////////////////////////////////////////////////////////////////////
  
   // constructor(props) {
    //   super(props);
    //   this.state = {favoritecolor: "red"};
    // }
    // static getDerivedStateFromProps(props, state) {
    //   return {favoritecolor: props.favcol };
    // }
    // changeColor = () => {
    //   this.setState({favoritecolor: "blue"});
    // }
    // render() {
    //   return (
    //     <div>
    //     <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    //     <button type="button" onClick={this.changeColor}>Change color</button>
    //     </div>
    //   );
// }

// export default Welcome1


// constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red",

//     };
//   }
//     static getDerivedStateFromProps(props, state) {
//       return {favoritecolor: state.favcol };
//     }

//     shouldComponentUpdate() {
//       return false;
//     }
//     changeColor = () => {
//       this.setState({favoritecolor: "blue"});
//     }

//   render() {
//     return (
//       <>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </>
//     );
//   }



///////////////////////////////////////////////////////////////////////

 // constructor(props) {
  //   super(props);
  //   this.state = {favoritecolor: "red"};
  // }
  // static getDerivedStateFromProps(props, state) {
  //   return {favoritecolor: props.favcol };
  // }
  // changeColor = () => {
  //   this.setState({favoritecolor: "blue"});
  // }
  // render() {
  //   return (
  //     <div>
  //     <h1>My Favorite Color is {this.state.favoritecolor}</h1>
  //     <button type="button" onClick={this.changeColor}>Change color</button>
  //     </div>
  //   );