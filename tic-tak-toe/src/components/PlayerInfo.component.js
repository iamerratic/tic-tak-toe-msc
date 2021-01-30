import React from 'react';

import './PlayerInfo.css';

function PlayerInfo({ player1, player2 }) {

    return (
        <div className="PlayerInfo">
            <div className="player">
                <h3>Player 1: </h3>
                <h4>{player1}</h4>
            </div>
            <div className="player">
                <h3>Player 2: </h3>
                <h4>{player2}</h4>
            </div>
        </div>
    );
}

export default PlayerInfo;