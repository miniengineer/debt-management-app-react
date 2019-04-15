import React, { Component } from 'react';

class TransactionList extends Component {

  renderTransactionList = () => {
    return this.props.transactionsToShow.map(transaction => {
      return <li>Transferred {transaction.amount} on {transaction.date}</li>;
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
