import React, { Component } from 'react';

import './PenPal.css';

const recognizeMic = require(
  'watson-speech/speech-to-text/recognize-microphone',
);

class PenPal extends Component {
  constructor(props) {
    super(props);
    this.textArea = React.createRef();
    this.state = {
      emailBody: '',
      isRecording: false,
    };
  }


  startStream = () => {
    this.setState({ isRecording: true });

    fetch('http://localhost:5000/auth')
      .then(response => response.text())
      .then((token) => {
        const stream = recognizeMic({
          token,
          outputElement: '#output',
        });

        stream.on('error', (err) => {
          console.log(err);
        });

        document.querySelector('#stop').onclick = () => { // TODO: Get rid of this vanilla js with refs API
          this.setState({ isRecording: false });
          stream.stop();
        };
      }).catch((error) => {
        console.error(error);
      });
  }

  sendEmail = () => {
    // TODO: Get rid of this vanilla js with refs API
    const value = document.querySelector('#output').value || '';

    if (value === '') return;

    fetch(
      'http://localhost:5000/email', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: value,
        }),
      },
    )
      .then((res) => {
        console.log(`Status: ${res.status}`);
        this.setState({ emailBody: '' });
      })
      .catch(error => console.error(error));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { emailBody, isRecording } = this.state;

    return (
      <div className="content-wrapper">
        <button type="button" className={`start-button ${isRecording ? 'recording-active' : ''}`} onClick={this.startStream}>
          Start
        </button>
        <button id="stop" type="button">
          Stop
        </button>
        <textarea
          id="output"
          className="email-text-area"
          name="emailBody"
          value={emailBody}
          onChange={this.handleChange}
        />
        <input type="submit" onClick={this.sendEmail} />
      </div>
    );
  }
}

export default PenPal;
