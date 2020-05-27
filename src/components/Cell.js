import React, {Component} from 'react';
import '../css/cell.css';
import {withStatusContext} from "../context/GameStatus";

class Cell extends Component {

  handleCellClick(position) {
    const {handleClick} = this.props;
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