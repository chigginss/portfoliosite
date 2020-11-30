import React, { Component } from 'react';
import './portfolio.scss';

class About extends Component {

  render() {
    return (
      <div className="content">
        <div className="contact" id="contact">
            <h1 className="title">CONTACT</h1>
            <div className="about">I'm currently not looking for work, but I'm always happy to chat! Feel free to reach out.</div>
            <a className="resumeButton" href="mailto:cierramhiggins@gmail.com">Contact Me</a>
        </div>
      </div>
    );
  }
}

export default About;