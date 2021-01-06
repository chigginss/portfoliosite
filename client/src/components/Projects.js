import React, { Component } from 'react';
import wday from '../videos/what_dragon_are_you.mp4';
import '../css/portfolio.scss';
import GitHubIcon from '../icons/GitHubIcon.js';
import site from '../images/site-pic.jpg';
import newsflash from '../images/newsflash.jpg';

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
                <p className="skillTitle">REACT EXPRESS.JS SASS</p>
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
                Effect iterates through and "selects" a dragon from popular games and movies. Generated thousands of impressions. 
                View the effect <a href="https://www.instagram.com/ar/705525493353127/" className="link">on Instagram.</a>
              </p>
              <div className="skillTitle">SPARK AR STUDIO. GRAPHICS BY JENNIFER ARMSTRONG.</div>
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