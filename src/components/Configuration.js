import App from './App';
import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ConfigurationInput from './ConfigurationInput';



class Configuration extends Component {

  constructor() {
    super();
    this.state = {
      debt: 0,
      currency: '',
      isSubmitted: false
    };
  }



  submitInitialDebt(event) {
    this.setState({
      debt: Number(event.target.value)
    })
  }

  submitCurrency(event) {
    this.setState({
      currency: event.target.value
    })
  }

   submitInitialValues(event) {
     event.preventDefault();

     this.setState({
       isSubmitted: true
     });
   }


  renderConfiguration() {
      return (
        <div>
        <AppBar position="static" color = "primary">
        <Toolbar>
          <Typography component="h4" variant="display2" color = "inherit" >
            Configure Your App
          </Typography>
        </Toolbar>
      </AppBar>
      <h2>Please fill-in the following:</h2>
      <ConfigurationInput></ConfigurationInput>

        <input type = 'text' onChange = {(event) => this.submitInitialDebt(event)}/>
        <h2>Please input your country's currency</h2>
        <input type = 'text' onChange = {(event) => this.submitCurrency(event)} />
        <Button variant="outlined" color="primary" onClick = {(event) => this.submitInitialValues(event)}>
        Submit
        </Button>
        </div>
      );
  }

  render() {
    if (this.state.isSubmitted === true) {
      return (
        <div>
        <App initialCurrency = {this.state.currency} initialDebt = {this.state.debt}  />
        </div>
      );
    } else {
      return (
        <div>
        {this.renderConfiguration()}
        </div>
      );
    }
  }

}

export default Configuration;
