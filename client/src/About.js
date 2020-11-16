import React, { Component } from 'react';
import BarChart from './BarChart.js';
import './portfolio.scss';

class About extends Component {

  render() {
    return (
      <div className="content">
          <h1 className="title">Hi, I'm Cierra Higgins</h1>
          <h2 className="title">Software Engineer with an English Degree.</h2>
          <div className="about">
              <p className="text">
                I'm an full stack software developer with 2+ years experience.
                Currently based in San Francisco, I work on web and mobile platforms.</p>
          </div>
          <a className="resumeButton" download="resume" href="resume.pdf" target="_blank">Download Resume</a>
          <h3 className="bigTitle">Tech Stack</h3>
          <BarChart/>
      </div>
    );
  }
}

export default About;