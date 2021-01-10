import React, { Component } from 'react';
import '../css/portfolio.scss';

class Contact extends Component {

  render() {
    return (
      <div className="content">
        <div className="contact" id="contact">
            <h1 className="title">Let's Chat!</h1>
            <div className="about">I'm always happy to connect-- I'll do my best to get back to you quickly.</div>
            <a className="resumeButton" href="mailto:cierramhiggins@gmail.com">Contact Me</a>
        </div>
      </div>
    );
  }
}

export default Contact;