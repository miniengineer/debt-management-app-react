import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';


export default class AlertDismissable extends Component {

  constructor() {
    super();

    this.state = {
      show: true
    };
  }

  render() {
    const onClose = (event) => this.setState({ show: false });

    return (
      <>
      <Alert dismissible variant="danger" show = {this.state.show} onClick = {(event) => onClose(event)} >
      {this.props.errorType}
     </Alert>
      </>
    );
  }

}
