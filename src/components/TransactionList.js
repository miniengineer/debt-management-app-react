import React, { Component } from "react";

class TransactionList extends Component {
  renderTransactionList = () => {
    return this.props.transactionsToShow.map(transaction => {
      return (
        <li>
          Transferred {transaction.amount} on {transaction.date}
        </li>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <ul>{this.renderTransactionList()}</ul>
      </React.Fragment>
    );
  }
}

export default TransactionList;
