import React, { Component } from "react";
import { ReactComponent as DeleteImg } from "../Images/delete.svg";

export default class TransactionList extends Component {
  renderTransactionList = () => {
    let previousMonth = "";
    return this.props.transactionsToShow.map((transaction, i) => {
      console.log(transaction.date);
      let formattedDate = transaction.date.toLocaleDateString(
        "en-US",
        { month: "long", day: "numeric", year: "numeric" }
      );
      let currentMonth = formattedDate.split(" ");
      if (currentMonth[0] !== previousMonth) {
        previousMonth = currentMonth[0];
        return (
          <li key={i}>
            <h3>{currentMonth[0]}</h3>
            <DeleteImg
              onClick={() => this.props.deleteTransaction(transaction)}
            />
            Transferred {transaction.amount} on {formattedDate}
          </li>
        );
      } else {
        return (
          <li key={i}>
            <DeleteImg
              onClick={event => this.props.deleteTransaction(transaction)}
            />
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
