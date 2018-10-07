import React, { Component } from 'react';
var recognizeMic = require('watson-speech/speech-to-text/recognize-microphone');

class PenPal extends Component {
  constructor() {
    super();
    this.state = {
      emailBody: ''
    };

    this.textArea = React.createRef();
  }


  connectTranscribe = () => {
    fetch('http://localhost:5000/auth')
      .then(function (response) {
        return response.text();
      }).then(function (token) {
        console.log('is this stuff working???????', token);
        var stream = recognizeMic({
          token: token,
          outputElement: `#output` // CSS selector or DOM Element
        });

        stream.on('error', function (err) {
          console.log(err);
        });

        // document.querySelector('#stop').onclick = function () {
        //   stream.stop();
        // };

      }).catch(function (error) {
        console.log(error);
      });
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ emailBody: value });
  }

  render() {
    const { emailBody } = this.state;
    console.log(this.textArea);
    console.log(this.stream);

    return (
      <div>
        <button onClick={this.connectTranscribe}>Start</button>
        <button onClick={this.connectTranscribe}>Stop</button>
        <textarea id="output" style={{ display: 'block' }}onChange={this.handleChange} value={emailBody} ref={this.textArea} />
      </div>
    );
  }
}

export default PenPal;
