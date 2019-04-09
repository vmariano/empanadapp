import React, {Component} from 'react';
import {FlavoursAdder} from "../flavour-adder/FlavoursAdder";
import "./GridSelector.css"

export class GridSelector extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> {
                this.props.data.map((flavour, key) => {
                    return <FlavoursAdder key={key} flavour={flavour.name} description={flavour.description} amount={0}/>
                })
            }</div>
        )
    }

}