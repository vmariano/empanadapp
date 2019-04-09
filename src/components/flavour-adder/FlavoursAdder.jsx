import React, {Component} from 'react';
import {QuantitySelector} from "../quantity-selector/QuantitySelector";
import "./FlavoursAdder.css"

export class FlavoursAdder extends Component {
    render() {
        return (
            <p className="flavour-adder">
                <i className="em em-information_source"/>
                <label> {this.props.flavour} </label>
                <QuantitySelector amount={this.props.amount}/>
            </p>
        )
    }
}


