import React, { Component } from 'react';
var recognizeMic = require('watson-speech/speech-to-text/recognize-microphone');

class PenPal extends Component {
  constructor(props) {
    super(props);
    this.textArea = React.createRef();
    this.state = {
      emailBody: ''
    };
  }


  startStream = () => {
    fetch('http://localhost:5000/auth')
      .then(function (response) {
        return response.text();
      }).then(async function (token) {
        console.log('is this stuff working???????', token);
        const stream = await recognizeMic({
          token: token,
          outputElement: '#output',
        });

        stream.on('error', function (err) {
          console.log(err);
        });

        document.querySelector('#stop').onclick = function () {
          console.log('stop');
          stream.stop();
        };

      }).catch(function (error) {
        console.log(error);
      });
  }

  endStream = stream => {
    stream.stop();
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ emailBody: value });
  }

  render() {
    const { emailBody } = this.state;
    console.log(this.textArea.current);
    console.log(this.stream);

    return <div>
        <button onClick={this.startStream}>Start</button>
        <button id="stop" ref={this.textArea}>
          Stop
        </button>
        <textarea id="output" style={{ display: 'block' }} onChange={this.handleChange} value={emailBody} />
      </div>
  }
}

export default PenPal;
