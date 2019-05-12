import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';


class AlertDismissable extends Component {

  constructor(props) {
    super(props);

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

export default AlertDismissable;
