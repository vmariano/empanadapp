import React from 'react';
import './QuantitySelector.css'

export class QuantitySelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentAmount: this.props.amount};
        this.add = this.increment.bind(this);
        this.remove = this.decrement.bind(this);
    }

    increment() {
        this.setState({currentAmount: this.state.currentAmount + 1 });
    }

    decrement() {
        this.setState({currentAmount: this.state.currentAmount - 1 });
    }

    render() {
        return (
            <div className="quantity-selector">
                <button onClick={this.add}>+</button>
                <label>{this.state.currentAmount}</label>
                <button onClick={this.remove}>-</button>
            </div>
        );
    }

}