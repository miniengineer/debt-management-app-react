import React, { Component } from 'react';

class InputForm extends Component {

  constructor() {
    super();
    this.state = {
      newTransaction: null
    };
  }

  onFormSubmitted(event) {
    event.preventDefault();

    const transaction = this.state.newTransaction;

    this.props.callBackFromParent(transaction);

    this.setState({
      newTransaction: ''
    })
  }

  newTransaction(event) {
      this.setState({
        newTransaction: event.target.value
      });
  }


  render() {
    return (
      <div>
      <form onSubmit={(event) => this.onFormSubmitted(event)}>
      <input onChange={(event) => this.newTransaction(event)} id='newTransaction' name='newTransaction' value={this.state.newTransaction} />
      <button type='submit'>Add Transaction</button>
      </form>
      </div>
    );
  }

}

export default InputForm;
