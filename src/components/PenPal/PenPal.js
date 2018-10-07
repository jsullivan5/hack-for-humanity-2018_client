import React, { Component } from 'react';

const recognizeMic = require(
  'watson-speech/speech-to-text/recognize-microphone',
);

class PenPal extends Component {
  constructor(props) {
    super(props);
    this.textArea = React.createRef();
    this.state = {
      emailBody: '',
    };
  }


  startStream = () => {
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

        document.querySelector('#stop').onclick = () => {
          stream.stop();
        };
      }).catch((error) => {
        console.error(error);
      });
  }

  sendEmail = () => {
    const { emailBody } = this.state;

    if (emailBody === '') return;

    fetch(
      'http://localhost:5000/email', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: emailBody,
        }),
      },
    )
      .then(res => console.log(`Status: ${res.status}`))
      .catch(error => console.error(error));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { emailBody } = this.state;

    return (
      <div>
        <button type="button" onClick={this.startStream}>
          Start
        </button>
        <button id="stop" type="button">
          Stop
        </button>
        <textarea id="output" name="emailBody" value={emailBody} onChange={this.handleChange} style={{ display: 'block' }} />
        <input type="submit" onClick={this.sendEmail} />
      </div>
    );
  }
}

export default PenPal;
