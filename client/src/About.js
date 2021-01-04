import React, { Component } from 'react';
import './portfolio.scss';
import portrait from './portrait1.jpg';

class About extends Component {

  render() {
    return (
      <div id="about" className="about">
        <div className="aboutMeContainer">
          <img className="portrait" src={portrait} alt="portrait" />
          <div className="aboutMe">
            <h2 className="title">I'm a bugcatcher</h2>
            <p className="meText">
              I'm an full stack software developer with 2+ years experience.
              Currently based in San Francisco, I work on web and mobile platforms.
              Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <p className="meText">
              Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
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
                <div className="skillTitle">FRAMEWORKS</div>
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
    );
  }
}

export default About;