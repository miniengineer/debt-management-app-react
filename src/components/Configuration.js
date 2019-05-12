import App from "./App";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

class Configuration extends Component {
  constructor() {
    super();
    this.state = {
      debt: 100,
      currency: "USD",
      isSubmitted: true
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

    if (isNaN(this.state.debt)) {
      alert("Please enter a NUMBER");
    } else {
      this.setState({
        isSubmitted: true
      });
    }
  }

  renderConfiguration() {
    return (
      <React.Fragment>
        <section className="jumbotron text-center">
          <div className="container">
            <Navbar expand="lg" variant="dark" bg="dark">
              <Navbar.Brand href="#">Configure Your App</Navbar.Brand>
            </Navbar>
            <Form>
              <Form.Group controlId="inputCurrencyForm.ControlSelect1">
                <Form.Label>
                  <h3> Select your currency</h3>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={event => this.submitCurrency(event)}
                >
                  <option>USD</option>
                  <option>EUR</option>
                  <option>JPY</option>
                  <option>AZN</option>
                  <option>RUB</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="inputTotalDebtForm.ControlTextarea1">
                <Form.Label>
                  <h3>Input your total debt</h3>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="1"
                  onChange={event => this.submitInitialDebt(event)}
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={event => this.submitInitialValues(event)}
              >
                Submit
              </Button>
            </Form>
          </div>
        </section>
      </React.Fragment>
    );
  }

  render() {
    if (this.state.isSubmitted === true) {
      return (
        <React.Fragment>
          <App
            initialCurrency={this.state.currency}
            initialDebt={this.state.debt}
          />
        </React.Fragment>
      );
    } else {
      return <div>{this.renderConfiguration()}</div>;
    }
  }
}

export default Configuration;
