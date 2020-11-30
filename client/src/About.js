import React, { Component } from 'react';
import './portfolio.scss';

class About extends Component {

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log(maxScroll)
        if (currentScrollPos < 200 && currentScrollPos < maxScroll) {
          this.setState({ opacity: '0' })
          // console.log(currentScrollPos)
        } else {
          this.setState({ opacity: '1' })
        }
      }
    }
  }

  render() {
    return (
      <div id="about" className="about">
          <div className="about">
            <h1 className="title">Hi, I'm Cierra Higgins</h1>
            <h2 className="title">Software Engineer with an English Degree.</h2>
            <p className="text">
              I'm an full stack software developer with 2+ years experience.
              Currently based in San Francisco, I work on web and mobile platforms.</p>
          </div>
          <a className="resumeButton" download="resume" href="resume.pdf" target="_blank">Download Resume</a>
      </div>
    );
  }
}

export default About;