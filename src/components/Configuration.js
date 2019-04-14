import App from './App';

import React, { Component } from 'react';

class Configuration extends Component {

  constructor() {
    super();
    this.state = {
      debt: 0,
      currency: '',
      isSubmitted: false
    };
  }

  submitInitialDebt(event) {
    this.setState({
      debt: event.target.value
    })
  }

  submitCurrency(event) {
    this.setState({
      currency: event.target.value
    })
  }

   submitInitialValues(event) {
     event.preventDefault();

     this.setState({
       isSubmitted: true
     });
   }


  renderConfiguration() {
      return (
        <div>
        <h2>Please input your current debt</h2>
        <input type = 'text' onChange = {(event) => this.submitInitialDebt(event)}/>
        <h2>Please input your country's currency</h2>
        <input type = 'text' onChange = {(event) => this.submitCurrency(event)} />
        <button onClick = {(event) => this.submitInitialValues(event)}>submit</button>
        </div>
      );
  }

  render() {
    if (this.state.isSubmitted === true) {
      return (
        <div>
        <App initialCurrency = {this.state.currency} initialDebt = {this.state.debt}  />
        </div>
      );
    } else {
      return (
        <div>
        {this.renderConfiguration()}
        </div>
      );
    }
  }

}

export default Configuration;
