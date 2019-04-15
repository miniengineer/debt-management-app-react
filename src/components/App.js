import React, { Component } from 'react';
import InputForm from './InputForm';
import TransactionList from './TransactionList';


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
      totalDebt: this.props.initialDebt,
    })
  }


 //getting inputted transaction from child component
  myCallback = (dataFromChild) => {
    this.setState({
      transactionList: [...this.state.transactionList, dataFromChild],
      totalDebt: this.state.totalDebt - dataFromChild.amount
    });
  }


  render() {
      return (
        <div>
        <h2>TotalDebt: {this.props.initialCurrency} {this.state.totalDebt}</h2>
        <InputForm callBackFromParent = {this.myCallback}/>
        <TransactionList transactionsToShow = {this.state.transactionList} />
        </div>
      );
    }

}

export default App;
