import React, {Component} from 'react';
import {withStatusContext} from "../context/GameStatus";
import STATUS from "../status";
import '../css/generalStatus.css';

class GeneralStatusRow extends Component {

  getGeneralStatus = () => {
    const {status} = this.props;
    console.log('aa',status);

    if (status === STATUS.YOUR_TURN || status === STATUS.SERVER_TURN || status === STATUS.WAITING ) {
      return 'Game in progress';
    } else if (status === STATUS.ERROR) {
      return 'Error!'
    } else {
      return 'Game finished';
    }
  };

  render() {
    return (
      <div className={'general-status'}>
        <h3>{this.getGeneralStatus()}</h3>
      </div>
    );
  }
}

export default withStatusContext(GeneralStatusRow);