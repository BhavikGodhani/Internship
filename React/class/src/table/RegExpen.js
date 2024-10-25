import React, { Component,PureComponent } from "react";
import PureCompent from "./pureComponent";
import ParentComp from "./parentComp";
import Memocomp from "../functionComponent/Memocomp";


class RegExp extends PureComponent{

    constructor(props){
        super(props)
        this.state = {
            name:"Bhavik"
        }
    }
 componentDidMount(){
    console.log("*****************Pure Component ***********************************");
     setInterval(() => {
       this.setState({name:"bhavik"});   
    },2000)
}

render(){
    return(
        <>
         <h1>Parent Element</h1>
         <Memocomp name={this.state.name}/>
        </>
    )
}

}

export default RegExp;