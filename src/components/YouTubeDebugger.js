// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react';
 
export default class YouTubeDebugger extends React.Component {
  state = {
     errors: [], 
     user: null, 
     settings: { bitrate: 8, video: { resolution: '1080p' } }
  } 

  bitrateOnClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionOnClick = () => {
    this.setState({
      settings: {
        bitrate: this.state.settings.bitrate,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return(
      <div>
      <button className='bitrate' 
      onClick={this.bitrateOnClick}>
      {this.state.settings.bitrate}
      </button>

      <button className='resolution' 
      onClick={this.resolutionOnClick}>{this.state.settings.video.resolution}
      </button>
      </div>
    )
  }

}