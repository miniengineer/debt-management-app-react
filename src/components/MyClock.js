import React, { Component } from 'react';


export default class MyClock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    }
  }


  currentTime() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    setInterval(
      () => this.currentTime(), 1000
    );
  }

  render() {
    return (
      <div>
      <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
