import React, {Component} from 'react';
import STATUS from "../status";


export const GameStatusContext = React.createContext();

export const withStatusContext = (Comp) => {
  return class withStatusContext extends Component {
    render() {
      return (
        <GameStatusContext.Consumer>
          {({status, changeStatus}) => {
            return (
              <Comp status={status} changeStatus={changeStatus}  {...this.props}/>
            );
          }}
        </GameStatusContext.Consumer>
      );
    }
  };
};

class GameStatusProvider extends Component {

  state = {
    status: STATUS.YOUR_TURN,
  };

  changeStatus = (status) => {
    this.setState({
      status
    })
  };

  render() {
    const {children} = this.props;
    const {status} = this.state;
    return (
      <GameStatusContext.Provider value={{
        status,
        changeStatus: this.changeStatus
      }}>
        {children}
      </GameStatusContext.Provider>
    );
  }
}

export default GameStatusProvider;