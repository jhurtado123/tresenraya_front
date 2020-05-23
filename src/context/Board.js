import React, {Component} from 'react';


export const BoardContext = React.createContext();

export const withBoardContext = (Comp) => {
  return class withBoardContext extends Component {
    render() {
      return (
        <BoardContext.Consumer>
          {({board, updateBoard, resetBoard}) => {
            return (
              <Comp board={board} updateBoard={updateBoard} resetBoard={resetBoard} {...this.props}/>
            )
          }}
        </BoardContext.Consumer>
      );
    }
  };
};

class BoardProvider extends Component {

  state = {
    board: [null, null, null, null, null, null, null, null, null],
  };

  updateBoard = (board) => {
    this.setState({
      board
    });
  };

  resetBoard = () => {
    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
    });
  };

  render() {
    const {children} = this.props;
    const {board} = this.state;
    return (
      <BoardContext.Provider value={{
        board,
        updateBoard: this.updateBoard,
        resetBoard: this.resetBoard
      }}>
        {children}
      </BoardContext.Provider>
    );
  }
}

export default BoardProvider;