import React, { Component } from "react";
import InputForm from "./InputForm";
import TransactionList from "./TransactionList";
import MyClock from "./MyClock";
import CurrencyRates from "./CurrencyRates";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      totalDebt: 0,
      transactionList: [],
      currencyRates: null
    };

    this.deleteTransaction = this.deleteTransaction.bind(this);
  }

  //set the initial value for totalDebt
  componentDidMount() {
    //API call to get currency exchange rate
    axios.get("https://api.exchangeratesapi.io/latest?base=USD").then(data => {
      this.setState({
        currencyRates: data.data,
        totalDebt: this.props.initialDebt
      });
    });
  }

  //getting inputted transaction from child component
  onFormSubmitted = newTransaction => {
    var newTransactionList = [...this.state.transactionList, newTransaction];
    newTransactionList.sort((a, b) => a.date.getTime() - b.date.getTime());

    //edit the date and send inputted transaction data to DB
    let dateOptions = { month: "long", day: "numeric", year: "numeric" };
    axios.post("https://5cdfa066fc90670014267af7.mockapi.io/transactions", {
      amount: newTransaction.amount,
      date: newTransaction.date.toLocaleDateString("en-US", dateOptions)
    });

    this.setState({
      transactionList: newTransactionList,
      totalDebt: this.state.totalDebt - newTransaction.amount
    });
  };

  deleteTransaction(transactionToDelete) {
    let afterDeleted = this.state.transactionList.filter(transaction => {
      return transaction !== transactionToDelete;
    });
    this.setState({
      transactionList: afterDeleted
    });
  }

  render() {
    return (
      <Container>
        <section className="jumbotron text-center">
          <Row>
            <Col>
              <CurrencyRates currencyRates={this.state.currencyRates} />
            </Col>
            <Col>
              <h4>The clock is ticking</h4> <MyClock />
              <h5>
                Total Debt {this.props.initialCurrency} {this.state.totalDebt}
              </h5>
              <InputForm callBackFromParent={this.onFormSubmitted} />
              <TransactionList
                transactionsToShow={this.state.transactionList}
                deleteTransaction={this.deleteTransaction}
              />
            </Col>
          </Row>
          <footer>Copyright 2019 MiniApps Inc.</footer>
        </section>
      </Container>
    );
  }
}
