import React from 'react';
import './Step.css';

function Step(props) {
    return(
        <form>
            <label htmlFor="number">Krok:</label>
            <input onChange={props.stepMethod} type="number" name="number" min="1"></input>
        </form>
    )
}

export default Step;