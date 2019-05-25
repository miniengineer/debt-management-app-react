import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class CurrencyRates extends Component {
  render() {
    if (this.props.currencyRates == null) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h4>Currency Exchange Rates</h4>
        <h5>Date: {this.props.currencyRates.date}</h5>
        <h5> Base: {this.props.currencyRates.base}</h5>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>JPY </td>
              <td>
                {parseFloat(this.props.currencyRates.rates.JPY).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>
                {parseFloat(this.props.currencyRates.rates.EUR).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>GBP</td>
              <td>
                {parseFloat(this.props.currencyRates.rates.GBP).toFixed(2)}
              </td>
              <tr />
            </tr>
            <td>RUB</td>
            <td>{parseFloat(this.props.currencyRates.rates.RUB).toFixed(2)}</td>
            <tr />
          </tbody>
        </Table>
      </div>
    );
  }
}
export default CurrencyRates;
