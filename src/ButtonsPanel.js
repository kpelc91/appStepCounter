import React from 'react';
import './ButtonsPanel.css';

function ButtonsPanel(props) {
    return(
        <div className="buttons-panel">
            <button onClick={() => {props.buttonMethod('add');}}>Add {props.stateStepValue}</button>
            <button onClick={() => {props.buttonMethod('reinit');}}>Relnit</button>
            <button onClick={() => {props.buttonMethod('reset');}}>Reset</button>
            <button></button>
        </div>
    );
}

export default ButtonsPanel;