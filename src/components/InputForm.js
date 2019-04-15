import React, { Component } from 'react';
import DateInput from './DateInput';

class InputForm extends Component {

  constructor() {
    super();
    this.state = {
      newTransaction: '',
      date: ''
    };
  }

  //sending inputted value to parent element
  onFormSubmitted(event) {
    event.preventDefault();

    const transaction = {amount: this.state.newTransaction, date: this.state.date};

    this.props.callBackFromParent(transaction);

    //clear input form after submitted
    this.setState({
      newTransaction: ''
    })
  }

  newTransaction(event) {
      this.setState({
        newTransaction: Number(event.target.value)
      });
  }

  getInputtedDay = (dataFromDateInput) => {
    this.setState({
      date: dataFromDateInput
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={(event) => this.onFormSubmitted(event)}>
      <input onChange={(event) => this.newTransaction(event)} id='newTransaction' name='newTransaction' value={this.state.newTransaction} />
      <DateInput callBackFromParent = {this.getInputtedDay}/>
      <button type='submit'>Add Transaction</button>
      </form>
      </div>
    );
  }

}

export default InputForm;
