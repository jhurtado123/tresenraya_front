import React, {Component} from 'react';
import '../css/cell.css';

class Cell extends Component {


  render() {
    const {position, handleClick, value} = this.props;
    return (
      <div className={'cell ' + value} onClick={() => handleClick(position)}/>
    );
  }
}

export default Cell;