import React from 'react';

import Square from './Square.component';
import './Board.css';

function Board() {

    return (
        <div className="Board">
            <Square type="X" />
            <Square type="X" />
            <Square type="X" />
            <Square type="X" />
            <Square type="X" />
            <Square type="X" />
            <Square type="X" />
            <Square type="X" />
            <Square type="X" />
        </div>
    );
}


export default Board;