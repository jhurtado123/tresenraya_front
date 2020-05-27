import React, {Component} from 'react';
import Cell from "./Cell";
import '../css/board.css';
import STATUS from "../status";
import gameApiClient from "../services/apiManager/game";
import {withStatusContext} from "../context/GameStatus";
import {withBoardContext} from "../context/Board";

class Board extends Component {

  handleCellClick = (position) => {
    const {board, updateBoard, status} = this.props;
    if (board[position] || status !== STATUS.YOUR_TURN ) return;

    board[position] = 'x';

    updateBoard(board);
    this.checkBoardStatus();
  };

  checkBoardStatus = async () => {
    const {changeStatus, handleNextTurn, board} = this.props;

    changeStatus(STATUS.WAITING);
    try {
      const {data: {status}} = await gameApiClient.checkBoardStatus(board);
      if (status === STATUS.BOARD_CHECKED) {
        handleNextTurn(board, this.handleComputerMove);
      } else {
        changeStatus(status);
      }
    } catch (e) {
      changeStatus(STATUS.ERROR);
    }
  };

  handleComputerMove = (positions) => {
      const {updateBoard} = this.props;
      updateBoard(positions);
      this.checkBoardStatus();
  };


  render() {
    const {board} = this.props;
    return (
      <div className={'game-board'}>
        <div className={'row'}>
          <Cell position={0} value={board[0]} handleClick={this.handleCellClick}/>
          <Cell position={1} value={board[1]} handleClick={this.handleCellClick}/>
          <Cell position={2} value={board[2]} handleClick={this.handleCellClick}/>
        </div>
        <div className={'row'}>
          <Cell position={3} value={board[3]} handleClick={this.handleCellClick}/>
          <Cell position={4} value={board[4]} handleClick={this.handleCellClick}/>
          <Cell position={5} value={board[5]} handleClick={this.handleCellClick}/>
        </div>
        <div className={'row'}>
          <Cell position={6} value={board[6]} handleClick={this.handleCellClick}/>
          <Cell position={7} value={board[7]} handleClick={this.handleCellClick}/>
          <Cell position={8} value={board[8]} handleClick={this.handleCellClick}/>
        </div>
      </div>
    );
  }
}

export default withBoardContext(withStatusContext(Board));