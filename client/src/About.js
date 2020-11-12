import React, { Component } from 'react';
import './portfolio.scss';

class About extends Component {

  render() {
    return (
      <div className="content">
          <h1 className="title">Hi, I'm Cierra Higgins</h1>
          <h2 className="title">Software Engineer with an English Degree.</h2>
          <p className="text">I'm an full stack software developer with 2+ years experience. Currently based in San Francisco, I work on web and mobile platforms.</p>
          <a className="resumeButton" href="mailto:cierramhiggins@gmail.com">CONTACT</a>
          <h3 className="bigTitle">Tech Stack</h3>
          <a className="resumeButton" download="resume" href="resume.pdf" target="_blank">Download Resume</a>
      </div>
    );
  }
}

export default About;