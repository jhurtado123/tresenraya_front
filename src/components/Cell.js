import React, {Component} from 'react';
import '../css/cell.css';
import {withStatusContext} from "../context/GameStatus";
import STATUS from "../status";

class Cell extends Component {

  handleCellClick(position) {
    const {handleClick, status} = this.props;
    if (status === STATUS.YOUR_TURN)
      handleClick(position);
  }

  render() {
    const {position, value} = this.props;
    return (
      <div className={'cell ' + value} onClick={() => this.handleCellClick(position)}/>
    );
  }
}

export default withStatusContext(Cell);