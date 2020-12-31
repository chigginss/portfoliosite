import React, { Component } from 'react';
import './portfolio.scss';

class Welcome extends Component {

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log(maxScroll)
        if (currentScrollPos < 400 && currentScrollPos < maxScroll) {
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
      <div className="about">
          <div className="about">
            <h1 className="hugeTitle">Hello, World!</h1>
            <h2 className="title">I'm Cierra!</h2>
            <p className="text">
              I'm an full stack software developer with 2+ years experience.
              Currently based in San Francisco, I work on web and mobile platforms.</p>
          </div>
          <a className="resumeButton" download="resume" href="resume.pdf" target="_blank">DOWNLOAD RESUME</a>
      </div>
    );
  }
}

export default Welcome;