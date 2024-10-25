import React,{Component} from "react";
import ChildCompent from "./childComponent";

class ParentComponent extends Component{
  constructor(props){
    super(props)
    
    this.state = {
        parentName:"Parent"
    }
}
greetParent(baby){
    alert(`Hello ${this.state.parentName} from ${baby}`)
}

render(){
    return(<div>
        <ChildCompent greetHandler={this.greetParent.bind(this)} />
    </div>)
}
}

export default ParentComponent