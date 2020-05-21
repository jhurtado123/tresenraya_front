import React, {Component} from 'react';
import Cell from "./Cell";
import '../css/board.css';
import STATUS from "../status";
import gameApiClient from "../services/apiManager/game";

class Board extends Component {

  state = {
    positions: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
  };

  handleCellClick = (position) => {
    const {positions} = this.state;
    const {changeStatus} = this.props;
    positions[position] = !position[position] && 'x';

    this.setState({
      positions,
    }, async () => {
      changeStatus(STATUS.SERVER_TURN);
      try {
        const {reponse: {board}} = await gameApiClient.computerMove();
        this.setState({
          positions: board,
        })
      } catch (e) {
        changeStatus(STATUS.ERROR);
      }
    });
  };

  render() {
    const {positions} = this.state;
    return (
      <div className={'game-board'}>
        <div className={'row'}>
          <Cell position={0} value={positions[0]} handleClick={this.handleCellClick}/>
          <Cell position={1} value={positions[1]} handleClick={this.handleCellClick}/>
          <Cell position={2} value={positions[2]} handleClick={this.handleCellClick}/>
        </div>
        <div className={'row'}>
          <Cell position={3} value={positions[3]} handleClick={this.handleCellClick}/>
          <Cell position={4} value={positions[4]} handleClick={this.handleCellClick}/>
          <Cell position={5} value={positions[5]} handleClick={this.handleCellClick}/>
        </div>
        <div className={'row'}>
          <Cell position={6} value={positions[6]} handleClick={this.handleCellClick}/>
          <Cell position={7} value={positions[7]} handleClick={this.handleCellClick}/>
          <Cell position={8} value={positions[8]} handleClick={this.handleCellClick}/>
        </div>
      </div>
    );
  }
}

export default Board;