import React from 'react';

function getResult({ status, player1, player2 }) {

    switch (status) {
        case 0: return "Match is Drawn";
        case 1: return player1 + " is the Winner";
        case 2: return player2 + " is the winner";
        default: return null;
    }
}



function Feedback(props) {

    var result = getResult(props);

    return (
        <div>
            {result}
        </div>
    );
}


export default Feedback;