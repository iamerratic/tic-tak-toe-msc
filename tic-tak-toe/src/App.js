import React from 'react';

import PlayerInfo from './components/PlayerInfo.component';
import Turn from './components/Turn.component';
import Board from './components/Board.component';
import Feedback from './components/Feedback.component';

function App() {
  return (
    <div>
      <PlayerInfo player1="Keshav" player2="xyz" />
      <Turn name="Keshav" />
      <Board />
      <Feedback />
    </div>
  );
}

export default App;
