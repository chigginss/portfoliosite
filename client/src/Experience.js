import React, { Component } from 'react';
import wday from './videos/what_dragon_are_you.mp4';
import './portfolio.scss';
import ExperienceCard from './ExperienceCard.js';
import github_logo from './images/github_35.png';
import site from './site-pic.jpg';
import newsflash from './newsflash.jpg';

class Experience extends Component {

  render() {
    return (
      <div>
        <div id="experience">
          <ExperienceCard
            position={'Software Engineer'}
            company={'Grokker'}
            date={'August 2018 - Present (2+ Years)'}
            texts={[
              'Designed and implemented a myriad of features on web and mobile platforms for consumer and enterprise users',
              'Improved Web Accessibility to meet WCAG AA standards',
              'Designed and created admin tools for internal use'
            ]}
          />
          <ExperienceCard
            position={'Data Specialist'}
            company={'WE Communications, Microsoft'}
            date={'October 2015 - November 2017 (2+ Years)'}
            texts={[
              'Analyzed media coverage and delivered PR insights exclusively for Microsoft Public Affairs teams.',
              'Generated reports using PowerBI, Netbase, TweetReachPro and other tools',
              'Assisted Business Intelligence team with data cleaning and providing terms for SQL queries'
            ]}
          />
          <ExperienceCard
            position={'Full Stack Web Engineer'}
            company={'Hackbright Academy'}
            date={'March 2018 - May 2018'}
            texts={[
              'Accelerated 12-week software engineering program for women. Hackbright is highly selective (5% acceptance rate).',
              'Studied computer science fundamentals, object-oriented design, agile development and best practices.',
              'Designed, developed and deployed a web app.'
            ]}
          />
        </div>
        <div id="projects" className="projects">
          <div className="projectCardContainer">
            <h2 className="projectTitle">Personal Site</h2>
            <div className='projectCardText'>
              <img className="image" src={site} alt="site" />
              <p className="projectText">This very site you are looking at now!</p>
              <div className="projectCardBottom">
                <p className="skillTitle">React Express.js SASS</p>
                <a href='https://github.com/chigginss/Newsflash'><img src={github_logo} className="icon" alt="logo"/></a>
              </div>
            </div>
          </div>
          <div className="projectCardContainer">
            <h2 className="projectTitle">Instagram Effect: 'Which Dragon are You?'</h2>
            <video width="150" autoPlay loop >
              <source src={wday} type="video/mp4"/>
            </video>
            <div className='projectCardText'>
              <p className="projectText">
                I conceptualized and developed this effect just for fun, 
                but I ended up generating thousands of impressions. Developed using Facebook's Spark AR Studio with graphics by Jennifer Armstrong. 
                View the effect <a href="https://www.instagram.com/ar/705525493353127/" className="headerLink">on Instagram.</a>
              </p>
            </div>
          </div>
          <div className="projectCardContainer">
            <div className="projectTitle">
              <h2>Newsflash</h2>
            </div>
            <div className='projectCardText'>
             <img className="image" src={newsflash} alt="portrait" />
              <p className="projectText">My Final Project for HackBright Academy in 2018. Newsflash displays the most popular news breaking right now in a D3.js visual.</p>
              <div className="projectCardBottom">
                <p className="skillTitle">Python jQuery D3 AJAX HTML CSS Bootstrap Jinja2</p>
                <a href='https://github.com/chigginss/Newsflash'><img src={github_logo} className="icon" alt="logo"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;