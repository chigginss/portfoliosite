import React, { Component } from 'react';
import wday from './videos/what_dragon_are_you.mp4';
import './portfolio.scss';
import github_logo from './images/github_35.png';
import site from './site-pic.jpg';
import newsflash from './newsflash.jpg';

class Projects extends Component {

  render() {
    return (
      <div>
        <div className="projects">
          <div className="projectCardContainer">
            <img className="image" src={site} alt="site" />
            <div className='projectCardText'>
              <h2 className="projectTitle">Personal Site</h2>
              <p className="projectText">This very site you are looking at now!</p>
              <div className="projectCardBottom">
                <p className="skillTitle">React Express.js SASS</p>
                <a href='https://github.com/chigginss/Newsflash'><img src={github_logo} className="icon" alt="logo"/></a>
              </div>
            </div>
          </div>
          <div className="projectCardContainer">
            <div className='projectCardText'>
              <h3 className="projectTitle">Instagram Effect: 'Which Dragon are You?'</h3>
              <p className="projectText">
                Effect iterates through and "selects" a dragon from popular games and movies. Generated thousands of impressions. 
                View the effect <a href="https://www.instagram.com/ar/705525493353127/" className="link">on Instagram.</a>
              </p>
              <div className="skillTitle">Spark AR Studio. Graphics by Jennifer Armstrong.</div>
            </div>
            <video className="video" width="190" autoPlay loop >
            <source src={wday} type="video/mp4"/>
            </video>
          </div>
          <div className="projectCardContainer">
            <img className="image" src={newsflash} alt="portrait" />
            <div className='projectCardText'>
              <h2 className="projectTitle">
                Newsflash
              </h2>
              <p className="projectText">My Final Project for HackBright Academy in 2018. Newsflash displays the most popular news breaking right now in a D3.js visual.</p>
              <div className="projectCardBottom">
                <p className="skillTitle">Python jQuery D3.js AJAX HTML CSS Bootstrap Jinja2</p>
                <a href='https://github.com/chigginss/Newsflash'><img src={github_logo} className="icon" alt="logo"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;