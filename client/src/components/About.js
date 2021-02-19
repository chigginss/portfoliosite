import React, { Component } from 'react';
import '../css/portfolio.scss';
import portrait from '../images/portrait1.jpg';

class About extends Component {

  render() {
    return (
      <div className="about">
        <div className="leftTitle">Hi! I'm Cierra</div>
        <div className="aboutMeContainer">
          <img className="portrait" src={portrait} alt="portrait" />
          <div className="aboutMe">
            <p className="meText">I'm a Software Engineer currently located in San Francisco. I enjoy creating highly responsive applications and websites.</p>
            <p className="meText">
              I received my B.A. in English Literature (with a focus in International Affairs) at <a className="link" href="https://www.lclark.edu/">Lewis & Clark College</a>. 
              After graduation, I completed<a className="link" href="https://hackbrightacademy.com/"> Hackbright Academy's </a> 
              Software Engineering course. For the last few years, I've worked as an Software Engineer at 
              <a className="link" href="grokker.com"> Grokker.</a></p>
              <p className="meText">When I'm not coding, I love going on hikes, playing video games and working on photo and video projects.</p>
              <div className="columnContainer">
                <div className="column">
                  <div className="skillTitle">JAVASCRIPT (ES6)</div>
                  <div className="skillTitle">PYTHON</div>
                  <div className="skillTitle">MONGODB</div>
                  <div className="skillTitle">(S)CSS</div>
                  <div className="skillTitle">HTML</div>
                  <div className="skillTitle">POSTGRESQL</div>
                </div>
                <div className="column">
                  <div className="skillTitle">NODE.JS</div>
                  <div className="skillTitle">REACT</div>
                  <div className="skillTitle">REACT NATIVE</div>
                  <div className="skillTitle">EXPRESS.JS</div>
                  <div className="skillTitle">JEST</div>
                  <div className="skillTitle">D3.JS</div>
                </div>
                <div className="column">
                  <div className="skillTitle">AWS</div>
                  <div className="skillTitle">GIT</div>
                  <div className="skillTitle">LINUX</div>
                  <div className="skillTitle">SHELL SCRIPTING</div>
                  <div className="skillTitle">JIRA</div>
                  <div className="skillTitle">CONFLUENCE</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;