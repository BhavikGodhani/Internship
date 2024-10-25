import React, { Component } from 'react'
import Context3 from "./context3"
import UserContext from "./context1"

class Context4 extends Component {
  render() {
    return (<div>
     Component E content {this.context}
     <Context3 />
    </div>
    )
  }
}

Context4.contextType= UserContext;

export default Context4