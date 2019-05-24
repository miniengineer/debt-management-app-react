import React, { Component } from "react";
import InputForm from "./InputForm";
import TransactionList from "./TransactionList";
import MyClock from "./MyClock";
import ShowPeopleInSpace from "./ShowPeopleInSpace";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      totalDebt: 0,
      transactionList: [],
      peopleInSpace: []
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

  //API call to get the names of astronauts
  getAstronautsNames() {
    axios.get("https://www.mocky.io/v2/5ce645ea3300004a007313ae").then(data => {
      this.setState({
        peopleInSpace: data.data.people
      });
      console.log(this.state.peopleInSpace);
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="jumbotron text-center">
          <div className="container">
            <h3>The clock is ticking</h3> <MyClock />
            <h4>
              Your Total Debt is {this.props.initialCurrency}{" "}
              {this.state.totalDebt}
            </h4>
            <InputForm callBackFromParent={this.onFormSubmitted} />
            <TransactionList transactionsToShow={this.state.transactionList} />
            <div className="button__container">
              <h4>
                And while you're figuring out how to repay your debts, some
                people are exploring the universe!
              </h4>
              <button
                onClick={event => this.getAstronautsNames(event)}
                className="button"
              >
                Show me these lucky bastards!
              </button>
            </div>
            <ShowPeopleInSpace peopleInSpace={this.state.peopleInSpace} />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
