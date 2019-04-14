import React, { Component } from 'react';

class TransactionList extends Component {

  renderTransactionList = () => {
    return this.props.transactionsToShow.map(transaction => {
      return <li>{transaction.amount}</li>;
    })
  }

  render() {
    return (
      <div>
      <ul>{this.renderTransactionList()}</ul>
      </div>
    );
  }

}

export default TransactionList;
