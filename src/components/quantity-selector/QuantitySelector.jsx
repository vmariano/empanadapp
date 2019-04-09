import React from 'react';
import './QuantitySelector.css'

export class QuantitySelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentAmount: this.props.amount};
    }

    increment = () => {
        this.setState((state) => {
            return {currentAmount: state.currentAmount + 1}
        });
    };

    decrement = () => {
        this.setState((state) => {
            return {currentAmount: state.currentAmount - 1}
        });
    };

    render() {
        return (
            <span className="quantity-selector">
                <button onClick={this.increment}>+</button>
                <label>{this.state.currentAmount}</label>
                <button onClick={this.decrement}>-</button>
            </span>
        );
    }

}
