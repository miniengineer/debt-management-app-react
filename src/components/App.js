import React, { Component } from "react";
import InputForm from "./InputForm";
import TransactionList from "./TransactionList";
import MyClock from "./MyClock";

class App extends Component {
  constructor() {
    super();
    this.state = {
      totalDebt: 0,
      transactionList: []
    };
  }

  //set the initial value for totalDebt
  componentDidMount() {
    this.setState({
      totalDebt: this.props.initialDebt
    });
  }

  //getting inputted transaction from child component
  onFormSubmitted = newTransaction => {
    var newTransactionList = [...this.state.transactionList, newTransaction];
    newTransactionList.sort((a, b) => a.date.getTime() - b.date.getTime());
    this.setState({
      transactionList: newTransactionList,
      totalDebt: this.state.totalDebt - newTransaction.amount
    });
  };

  render() {
    return (
      <React.Fragment>
      <section className="jumbotron text-center">
        <div className="container">
        <h3>The clock is ticking</h3> <MyClock />
        <h4>
          Your Total Debt is {this.props.initialCurrency} {this.state.totalDebt}
        </h4>
        <InputForm callBackFromParent={this.onFormSubmitted} />
        <TransactionList transactionsToShow={this.state.transactionList} />
        </div>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
