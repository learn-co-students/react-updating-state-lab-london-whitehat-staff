// Code DigitalClicker Component Here

import React from 'react';
 
class DigitalClicker extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      timesClicked: 0
    };
  }
 
  handleClick = () => {
      let clickAdd = this.state.timesClicked +1
    this.setState({
      timesClicked: clickAdd
    })
  }
  
 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
 
export default DigitalClicker;
