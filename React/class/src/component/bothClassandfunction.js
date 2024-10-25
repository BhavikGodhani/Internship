import React, { Component } from 'react'

const BothClassandfunction = React.memo(function BothClassandfunction(props) {
    console.log("Rendered Unstable Component");

  return (
    <div>
      <h1>{props.value}</h1>
    </div>
  )
})

class Class extends Component{
state = {
    value : 1 ,
}
componentDidMount(){
    setInterval(() => {
  this.setState(() => {
    return {value : 1};
  })
    },0);
}
render(){
    return(
        <>
         <BothClassandfunction value={this.state.value} />
        </>
    )
}

}

export default Class

