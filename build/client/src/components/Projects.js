import React, { Component } from 'react';
import wday from '../videos/what_dragon_are_you.mp4';
import '../css/portfolio.scss';
import GitHubIcon from '../icons/GitHubIcon.js';
import InstagramIcon from '../icons/InstagramIcon.js';
import site from '../images/portfoliosite.jpg';
import newsflash from '../images/newsflash.jpg';

class Projects extends Component {

  render() {
    return (
      <div>
        <div className="projects">
          <div className="projectCardContainer">
            <div className='imageContainer'>
              <img className="image" src={site} alt="site" />
            </div>
            <div className='projectCardText'>
              <h2 className="projectTitle">Personal Site</h2>
              <p className="projectText">You're looking at it! A space to showcase personal projects, try out new frameworks, and be creative.</p>
              <div className="projectCardBottom">
                <p className="skillTitle">REACT EXPRESS.JS (S)CSS JEST</p>
                <a href='https://github.com/chigginss/portfoliosite'>
                    <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="projectCardContainer">
            <div className='projectCardText'>
              <h3 className="projectTitle">Instagram Effect: 'Which Dragon are You?'</h3>
              <p className="projectText">
                Effect iterates through and selects a dragon from popular games and movies. I made this for fun but generated thousands of impressions. 
              </p>
              <div className="projectCardBottom">
                <div className="skillTitle">SPARK AR STUDIO. MEDIA BY JENNIFER ARMSTRONG.</div>
                <a href='https://www.instagram.com/ar/705525493353127/'>
                    <InstagramIcon />
                </a>
              </div>
            </div>
            <video className="video" width="190" autoPlay loop >
            <source src={wday} type="video/mp4"/>
            </video>
          </div>
          <div className="projectCardContainer">
            <div className='imageContainer'>
              <img className="image" src={newsflash} alt="portrait" />
            </div>
            <div className='projectCardText'>
              <h2 className="projectTitle">
                Newsflash
              </h2>
              <p className="projectText">A web app that displays trending news in a D3.js visual that provides context for bias and popularity of the news outlet. Users can create accounts, create a list of favorite topics and share results.</p>
              <div className="projectCardBottom">
                <p className="skillTitle">PYTHON JQUERY D3.JS AJAX POSTGRES HTML CSS BOOTSTRAP JINJA2</p>
                <a href='https://github.com/chigginss/Newsflash'>
                    <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;