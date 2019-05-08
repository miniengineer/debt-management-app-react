import React, { Component } from "react";

class TransactionList extends Component {
  renderTransactionList = () => {
    let previousMonth = "";
    let options = { month: "long", day: "numeric", year: "numeric" };
    return this.props.transactionsToShow.map((transaction, i) => {
      let formattedDate = transaction.date.toLocaleDateString("en-US", options);
      let currentMonth = formattedDate.split(" ");
      if (currentMonth[0] !== previousMonth) {
        previousMonth = currentMonth[0];
        return (
          <li key = {i}>
          <h3>{currentMonth[0]}</h3>
            Transferred {transaction.amount} on {formattedDate}
          </li>
        );
      } else {
        return (
          <li key = {i}>
            Transferred {transaction.amount} on {formattedDate}
          </li>
        );
      }
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
