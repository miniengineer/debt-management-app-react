import App from "./App";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Configuration extends Component {
  constructor() {
    super();
    this.state = {
      debt: 0,
      currency: "",
      isSubmitted: false
    };
  }

  submitInitialDebt(event) {
    this.setState({
      debt: Number(event.target.value)
    });
  }

  submitCurrency(event) {
    this.setState({
      currency: event.target.value
    });
  }

  submitInitialValues(event) {
    event.preventDefault();

    this.setState({
      isSubmitted: true
    });
  }

  renderConfiguration() {
    return (
      <React.Fragment>
        <section class="jumbotron text-center">
          <div class="container">
            <h3 class="jumbotron-heading">Please fill-in the following:</h3>
            <input
              type="text"
              onChange={event => this.submitInitialDebt(event)}
            />
            <h3>Please input your country's currency</h3>
            <input type="text" onChange={event => this.submitCurrency(event)} />
            <Button
              variant="primary"
              onClick={event => this.submitInitialValues(event)}
            >
              Submit
            </Button>
          </div>
        </section>
      </React.Fragment>
    );
  }

  render() {
    if (this.state.isSubmitted === true) {
      return (
        <div>
          <App
            initialCurrency={this.state.currency}
            initialDebt={this.state.debt}
          />
        </div>
      );
    } else {
      return <div>{this.renderConfiguration()}</div>;
    }
  }
}

export default Configuration;
