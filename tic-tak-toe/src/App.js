import React from 'react';

import PlayerInfo from './components/PlayerInfo.component';
import Turn from './components/Turn.component';
import Board from './components/Board.component';
import Feedback from './components/Feedback.component';

function App() {
  return (
    <div>
      <PlayerInfo />
      <Turn />
      <Board />
      <Feedback />
    </div>
  );
}

export default App;
