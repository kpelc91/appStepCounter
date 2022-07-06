import React, {Component} from 'react';
import './Counter.css';

import Display from './Display';
import Step from './Step';
import ButtonsPanel from './ButtonsPanel';
import Clock from './Clock';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 1
        };
    }

    stepValueChange = (e) => {
        this.setState({
            stepValue: +e.target.value
        })
        console.log(this.state.stepValue);
    }

    changeValue = (action) => {

        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += prevState.stepValue;
            }   else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            }   else {
                currentCounterValue = 0;
            }

            return({
                counterValue: currentCounterValue
            });
        });
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return({
                showClock: !prevState.showClock
            });
        })
    }


    render() {

        let clockElement = '';

        if (this.state.showClock) {
            clockElement = <Clock toggleClockMethod={this.toggleClock}/>;
        } else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>;
        }

        return (
            <div className="counter">
                Licznik:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} stateStepValue={this.state.stepValue}/>
                <Step stepMethod={this.stepValueChange} />
                {clockElement}
            </div>
        );
    }
}

export default Counter;