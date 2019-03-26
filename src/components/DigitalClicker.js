// Code DigitalClicker Component Here
import React from 'react';
 
export default class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  }

  onClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return(
      <button value={this.state.timesClicked} onClick={this.onClick}>{this.state.timesClicked}</button>
    )
  }

}