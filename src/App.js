import React, {Component} from 'react';
import './css/app.css';
import Board from "./components/Board";
import StatusRow from "./components/StatusRow";
import STATUS from "./status";


class App extends Component {

  state = {
    status: STATUS.YOUR_TURN,
  };

  handleStatusChange = (status) => {
    this.setState({
      status,
    })
  };

  render() {
    const {status} = this.state;
    return (
      <div className="container game-wrapper">
        <Board status={status} changeStatus={this.handleStatusChange}/>
        <StatusRow status={status}/>
      </div>
    );
  }
}

export default App;
