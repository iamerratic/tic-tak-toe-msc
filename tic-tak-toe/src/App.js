import React from 'react';

import PlayerInfo from './components/PlayerInfo.component';
import Turn from './components/Turn.component';
import Board from './components/Board.component';
import Feedback from './components/Feedback.component';
import Start from './components/Start.component';

class App extends React.Component {

  state = {
    player1: null,
    player2: null,
    chance: null,
    status: -1,
    isGameOn: false,
  };

  getPlayersInfo = (player1, player2) => {
    this.setState({
      player1: player1,
      player2: player2,
      isGameOn: true
    });
  };

  render() {

    var { player1, player2, chance, status, isGameOn } = this.state;

    return isGameOn ? (
      <div>
        <PlayerInfo player1={player1} player2={player2} />
        <Turn chance={chance} />
        <Board />
        <Feedback status={status} player1={player1} player2={player2} />
      </div>
    ) : <Start getPlayersInfo={this.getPlayersInfo} />;
  }
}

export default App;
