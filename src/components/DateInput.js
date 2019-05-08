import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DateInput extends React.Component {
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

export default DateInput;
