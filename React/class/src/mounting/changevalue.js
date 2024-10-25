import React,{Component} from "react";


class Update1 extends Component{

constructor(props){
    super(props)
    this.state = {
        color:"red",
    }
}

componentDidUpdate(){
    document.getElementById("div2").innerHTML = "The Text Value is " + this.state.color
}

render(){
    return(<div>
        <h1>{this.state.color}</h1>
     <div id="div2"></div>
    </div>)
}

}

export default Update1
/////////////////////////////////////////////////////////////////////////////////////

// static getDerivedStateFromProps(prop,state){
//     return{color:prop.color}
// }
 
// componentDidMount(){    
//     setTimeout(() => {
//        this.setState({color:"blue"})     
//     }, 1000)
// }

// render(){
//     return(
//      <h1>{this.state.color}</h1>)
// }
////////////////////////////////////////////////////////////////////////////////////////
// constructor(props){
    //     super(props);
    //     this.state = {
    //         color : "blue"
    //     }
    //   }
      
    //   changeColor = () => {
    //    this.setState({color:"red"})
    //   }
    
    //   render(){
    //     return(
    //      <>
    //     <h1>{this.state.color}</h1>
    //     <button type="button" onClick={this.changeColor}>Click      </button>
    //      </>
    // )
    //   }
      
    


/////////////////////////////////////////////////////////////////////////////////////

// constructor(props){
//     super(props);

//     this.state = {
//         color:"Red",
//     }
//   }
// static getDerivedStateFromProps(props,state){
//     return state.color;
//   }
 
//   render(){
//      return( 
//         <>
//     <h1>Bhavik Godhani</h1>
//      <p>My favrit color {this.state.color}</p>
//         </>
//            )
//   }
