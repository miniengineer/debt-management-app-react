import React, { Component } from "react";
import InputForm from "./InputForm";
import TransactionList from "./TransactionList";
import MyClock from "./MyClock";

class App extends Component {
  constructor() {
    super();
    this.state = {
      totalDebt: 0,
      transactionList: [],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  }

  //set the initial value for totalDebt
  componentDidMount() {
    this.setState({
      totalDebt: this.props.initialDebt
    });
  }

  //getting inputted transaction from child component
  myCallback = dataFromChild => {
    var newState = [...this.state.transactionList, dataFromChild];
    newState.sort((a, b) => {
      a.date = a.date.split(" ");
      b.date = b.date.split(" ");
      return (
        this.state.months.indexOf(a.date[0]) -
        this.state.months.indexOf(b.date[0])
      );
    });
    this.setState({
      transactionList: newState,
      totalDebt: this.state.totalDebt - dataFromChild.amount
    });
  };

  render() {
    return (
      <React.Fragment>
        <MyClock />
        <h2>
          TotalDebt: {this.props.initialCurrency} {this.state.totalDebt}
        </h2>
        <InputForm callBackFromParent={this.myCallback} />
        <TransactionList transactionsToShow={this.state.transactionList} />
      </React.Fragment>
    );
  }
}

export default App;
