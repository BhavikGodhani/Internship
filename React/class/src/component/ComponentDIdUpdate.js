
import React, { Component } from 'react';
// import Chart from 'chart.js';


 export default class ComponentDIdUpdate extends Component {
    state = {
        localData: 'Some Data'
      };
    
      componentWillUnmount() {
        this.setState({ localData: null }); // Clear or reset local state
      }
    
      render() {
        return <div>Local Data: {this.state.localData}</div>;
      }
    }


