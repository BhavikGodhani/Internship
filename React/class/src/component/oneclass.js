import React,{Component} from "react";


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
 changeColor = () => {
 this.setState({color:"green"});
 }
      render() {
        return  <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} and {this.state.model}
          from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
      }
}

export default Welcome
