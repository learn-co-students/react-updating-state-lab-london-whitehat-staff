// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component {
    constructor(props) {
        super(props) 
        this.state ={
            timesClicked: 0
        }
    }


    countIncrease = () => {
       let count;
       count= this.state.timesClicked +1
            this.setState({timesClicked: count})

    }

    render() {
        return (
            <div>
                <button onClick={this.countIncrease}>{this.state.timesClicked}</button>
            </div>
        )
    }
}