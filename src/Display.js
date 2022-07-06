import React from 'react';
import './Display.css';

function Display(props) {

    return(
        <span className="value">{props.displayValue}</span>
    );
}

export default Display;