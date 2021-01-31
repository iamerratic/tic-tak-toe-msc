import React from 'react';

import Square from './Square.component';
import './Board.css';


class Board extends React.Component {

    state = {
        type: 'X'
    };

    handleClick = () => {
        this.setState({
            type: '0'
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Change</button>
                <Square type={this.state.type} />
            </div>
        );
    }
}



export default Board;