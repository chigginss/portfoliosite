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
                  <div className="skillTitle">LANGUAGES</div>
                  <div>JavaScript (ES6)</div>
                  <div>HTML</div>
                  <div>(S)CSS</div>
                  <div>Python</div>
                  <div>MongoDB</div>
                  <div>PostGres</div>
                </div>
                <div className="column">
                  <div className="skillTitle">LIBRARIES AND FRAMEWORKS</div>
                  <div>Node.js</div>
                  <div>React</div>
                  <div>React Native</div>
                  <div>Jest</div>
                  <div>Flask</div>
                </div>
                <div className="column">
                  <div className="skillTitle">TOOLS</div>
                  <div>Git / GitHub</div>
                  <div>Linux</div>
                  <div>Jira</div>
                  <div>Confluence</div>
                  <div>Jenkins</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;