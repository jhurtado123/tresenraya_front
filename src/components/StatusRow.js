import React, {Component} from 'react';
import STATUS from "../status";
import '../css/statusRow.css';
import {withStatusContext} from "../context/GameStatus";
import {withBoardContext} from "../context/Board";

class StatusRow extends Component {

  handleResetButtonClick = () => {
    const {changeStatus, resetBoard} = this.props;
    changeStatus(STATUS.YOUR_TURN);
    resetBoard();
  };

  printRestartButton() {
      return <button onClick={this.handleResetButtonClick}>Restart game</button>
  }

  printStatus = () => {
    const {status} = this.props;
    switch (status) {
      case STATUS.YOUR_TURN:
        return <h2>Your turn!</h2>;
      case STATUS.SERVER_TURN:
        return <h2>Server turn...</h2>;
      case STATUS.ERROR:
        return (
          <React.Fragment>
            <h2>Server error, please restart game.</h2>
            {this.printRestartButton()}
          </React.Fragment>);
      case STATUS.WIN:
        return (
          <React.Fragment>
            <h2>You win</h2>
            {this.printRestartButton()}
          </React.Fragment>);
      case STATUS.LOOSE:
        return (
        <React.Fragment>
          <h2>You loose</h2>
          {this.printRestartButton()}
        </React.Fragment>);
      case STATUS.TIE:
        return (
          <React.Fragment>
            <h2>Tie :/</h2>
            {this.printRestartButton()}
          </React.Fragment>);
      default:
        return;
    }
  };

  render() {
    return (
      <div className={'status-row'}>
        {this.printStatus()}
      </div>
    );
  }
}

export default withBoardContext(withStatusContext(StatusRow));