import React, {Component} from 'react';
import STATUS from "../status";

class StatusRow extends Component {

  printStatus() {
    const {status} = this.props;
    switch (status) {
      case STATUS.YOUR_TURN:
        return <h2>Your turn!</h2>;
      case STATUS.SERVER_TURN:
        return <h2>Server turn!</h2>;
      case STATUS.ERROR:
        return <h2>Server error, please restart game.</h2>
    }
  }

  render() {
    return (
      <div className={'status-row'}>
        {this.printStatus()}
      </div>
    );
  }
}

export default StatusRow;