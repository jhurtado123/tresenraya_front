import React, {Component} from 'react';
import './css/app.css';
import Board from "./components/Board";
import StatusRow from "./components/StatusRow";
import STATUS from "./status";
import {withStatusContext} from "./context/GameStatus";
import gameApiClient from "./services/apiManager/game";
import GeneralStatusRow from "./components/GeneralStatusRow";

class App extends Component {

  handleNextTurn = (board, handleComputerMove) => {
    console.log(this.props);
    const {changeStatus} = this.props;
    if (board.filter(position => position === 'x').length === board.filter(position => position === 'c').length) {
      changeStatus(STATUS.YOUR_TURN);
    } else {
      changeStatus(STATUS.SERVER_TURN);
      this.moveComputerPlayer(board, handleComputerMove);
    }
  };

  moveComputerPlayer = async (board, handleComputerMove) => {
    const {changeStatus} = this.props;
    try {
      const {data: {newBoard}} = await gameApiClient.computerMove(board);
      handleComputerMove(newBoard);
    } catch (e) {
      changeStatus(STATUS.ERROR);
    }
  };


  render() {
    return (
      <div className="container game-wrapper">
        <GeneralStatusRow/>
        <Board handleNextTurn={this.handleNextTurn}/>
        <StatusRow/>
      </div>
    );
  }
}

export default withStatusContext(App);
