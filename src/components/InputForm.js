import React, { Component } from "react";
import DateInput from "./DateInput";
import AlertDismissable from "./AlertDismissable";
import axios from "axios";

export default class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      newTransaction: "",
      date: "",
      inputError: []
    };
  }

  //sending inputted value to parent element
  onFormSubmitted(event) {
    event.preventDefault();

    if (this.state.newTransaction === "") {
      this.setState({
        inputError: ["Please enter a transaction number!!!!!!!"]
      });
    } else if (isNaN(this.state.newTransaction)) {
      this.setState({
        inputError: ["Please make sure you are entering a NUMBER!!!!!!!!!!!"]
      });
    } else if (this.state.date.getTime() > new Date().getTime()) {
      this.setState({
        inputError: ["YOU CAN NOT TRANSFER MONEY IN THE FUTURE!!!!!!!"]
      });
      //creating an object to send it to parent APP component
    } else {
      const transaction = {
        amount: this.state.newTransaction,
        date: this.state.date
      };

      this.props.callBackFromParent(transaction);

      //clear input form after submitted
      this.setState({
        newTransaction: ""
      });
    }
  }

  newTransaction(event) {
    this.setState({
      newTransaction: event.target.value
    });
  }

  getInputtedDay = selectedDate => {
    this.setState({
      date: selectedDate
    });
  };

  //show alert in case input is empty
  showError = () => {
    if (this.state.inputError.length > 0) {
      return <AlertDismissable errorType={this.state.inputError} />;
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.onFormSubmitted(event)}>
          <input
            onChange={event => this.newTransaction(event)}
            id="newTransaction"
            name="newTransaction"
            value={this.state.newTransaction}
          />
          <DateInput callBackFromInputForm={this.getInputtedDay} />
          <button className="inputButton" type="submit">
            Add Transaction
          </button>
        </form>
        <br />
        {this.showError()}
      </div>
    );
  }
}
