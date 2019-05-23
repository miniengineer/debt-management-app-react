import React, { Component } from "react";
import axios from "axios";
import "../index.css";

class GetData extends Component {
  constructor() {
    super();
    this.state = {
      peopleInSpace: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.get("https://www.mocky.io/v2/5ce645ea3300004a007313ae").then(data => {
      let result1 = data.data.people.map(person => {
        return person.name;
      });
      this.setState({
        peopleInSpace: result1
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="button__container">
          <h4>
            And while you're figuring out how to repay your debts, some people
            are exploring the universe!
          </h4>
          <button onClick={this.handleClick} className="button">
            Show me these lucky bastards!
          </button>

          <p>{this.state.peopleInSpace}</p>
        </div>
      </React.Fragment>
    );
  }
}
export default GetData;
