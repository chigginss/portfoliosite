import React, { Component } from 'react';
import '../css/portfolio.scss';

class Contact extends Component {

  render() {
    return (
      <div className="content">
        <div className="contact" id="contact">
            <h1 className="title">Let's Chat!</h1>
            <div className="about">I'm currently not looking for work, but I would love to connect.</div>
            <a className="resumeButton" href="mailto:cierramhiggins@gmail.com">Contact Me</a>
        </div>
      </div>
    );
  }
}

export default Contact;