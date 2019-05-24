import React, { Component } from "react";

class ShowPeopleInSpace extends Component {
  renderAstronauts = () => {
    return this.props.peopleInSpace.map((person, i) => {
      console.log(person);
      return (
        <li key={i}>
          {person.name} is currently on the board of {person.craft} craft
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <ul>{this.renderAstronauts()}</ul>
      </div>
    );
  }
}
export default ShowPeopleInSpace;
