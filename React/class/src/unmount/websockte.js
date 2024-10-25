import React, { Component } from 'react';

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
    this.timerID = null;
    this.socket = new WebSocket('ws://example.com/socket');
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1
      }));
    }, 1000);
 
    setTimeout(() => {
        clearInterval(this.timerID);
        alert("stop")
    }, 5000);   
    this.socket.onmessage = function(event) {
        console.log(event);
      console.log('Message from server ', event.data);
    };
}

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    return (
      <div>
        <h1>Timer: {this.state.time} seconds</h1>   
      </div>
    );
  }
}

export default TimerComponent;
