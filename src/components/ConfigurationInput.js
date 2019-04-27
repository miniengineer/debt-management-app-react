import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, TextField } from '@material-ui/core/';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class OutlinedTextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    totalDebt: '',
    currency: 'JPY',
  };

  changeName = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  changeTotalDebt = totalDebt => event => {
    this.setState({
      [totalDebt]: event.target.value,
    });
  };

  changeCurrency = currency => event => {
    this.setState({
      [currency]: event.target.value,
    });
  };



  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.changeName('name')}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-number"
          label="Number"
          value={this.state.totalDebt}
          onChange={this.changeTotalDebt('totalDebt')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.changeCurrency('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

      </form>
    );
  }
}


  OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(OutlinedTextFields);
