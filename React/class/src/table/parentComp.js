import React, { Component } from "react"


class ParentComp extends Component{
    constructor(props){
        super(props)
    }
     
     
    render(){
        return(<p>{this.props.name}</p>)
        }
}

export default ParentComp