import React from 'react';

import './Square.css';

function Square({ type }) {

    return (
        <div className="Square">{type}</div>
    );
}


export default Square;