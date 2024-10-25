import React, { Component } from "react"


class PureCompent extends Component{
    constructor(props){
        super(props)
    }
     
    render(){
        return(<div>{this.props.name}</div>)
        }
}

export default PureCompent