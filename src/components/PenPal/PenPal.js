import React, { Component } from 'react';

import './PenPal.css';

const recognizeMic = require(
  'watson-speech/speech-to-text/recognize-microphone',
);

class PenPal extends Component {
  state = {
    emailBody: '',
    isRecording: false,
  };

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
          const emailText = document.querySelector('#output').value;
          this.setState({ isRecording: false, emailBody: emailText });
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
      <div className="content-wrapper pen-pal">
        <button type="button" className={`start-button button-large ${isRecording ? 'recording-active' : ''}`} onClick={this.startStream}>
          Start
        </button>
        <button id="stop" className="button-large" type="button">
          Stop
        </button>
        <textarea
          id="output"
          className="email-text-area"
          name="emailBody"
          value={emailBody}
          onChange={this.handleChange}
        />
        <input type="submit" onClick={this.sendEmail} className="button-large" />
      </div>
    );
  }
}

export default PenPal;
