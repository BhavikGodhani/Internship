import React,{Component} from "react";


class Welcome3 extends Component {
     constructor(prop){
        super();
        this.state = {
           color : "red",
        }
     }
     changeColor = () => {
       this.setState({color:"blue"});
     }
      render() {
        return (
          <div>
           <h1>Bhavik Godhani</h1>
           <p>My favrit {this.state.color}</p>
           <button type="button" onClick={this.changeColor}>Change color</button>
          </div>
        );
      }
    
    ///////////////////////////////////////////////////////////////////////////////
    //   render() {
    //     return  <div>
    //     <h1>My {this.state.brand}</h1>
    //     <p>
    //       It is a {this.state.color} and {this.state.model}
    //       from {this.state.year}.
    //     </p>
    //     <button type="button" onClick={this.changeColor}>
    //       Change color
    //     </button>
    //   </div>
    //   }
}

export default Welcome3
