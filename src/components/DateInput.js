import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class DateInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.props.callBackFromInputForm(date);

    this.setState({
      selectedDate: date
    });
  }

  componentDidMount() {
    this.props.callBackFromInputForm(this.state.selectedDate);
  }

  render() {
    return (
      <DatePicker
        selected={this.state.selectedDate}
        onChange={this.handleChange}
      />
    );
  }
}
