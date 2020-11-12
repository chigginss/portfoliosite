import React, { Component } from 'react';
import wday from './videos/what_dragon_are_you.mp4';
import './portfolio.scss';

class Experience extends Component {

  render() {
    return (
      <div className="content">
        <h3 className="bigTitle">EXPERIENCE</h3>
        <div className="experienceCard">
          <div className="experienceCardHeader">
            <h2 className="position">Software Engineer</h2>
            <div className="company">Grokker</div>
            <div className="years">August 2018 - Present (2 Years)</div>
          </div>
          <div className='experineceCardText'>
            <ul>
              <li>Designed and implemented a myriad of features on web and mobile platforms for consumer and enterprise users</li>
              <li>Developed ‘Streaks’ feature, which was named a Top HR Product of 2019 by Human Resource Executive® Magazine</li>
              <li>Improved Web Accessibility to meet WCAG AA standards</li>
              <li>Designed and created admin tools for internal use</li>
              <li>Filled data requests and created reports for customer success teams</li>
            </ul>
          </div>
        </div>
        <div className="experienceCard">
          <div className="experienceCardHeader">
            <h2 className="position">Data Specialist</h2>
            <div className="company">WE Communications, Microsoft</div>
            <div className="years">October 2015 - November 2017 (2+ Years)</div>
          </div>
          <div className='experineceCardText'>
            <ul>
              <li>Analyzed media coverage and delivered PR insights exclusively for Microsoft Public Affairs teams.</li>
              <li>Measured social data for Microsoft using Netbase, TweetReachPro and other social monitoring tools</li>
              <li>Researched social media influencers and potential audiences using comScore and other tools</li>
              <li>Assisted Business Intelligence team with data cleaning and providing terms for SQL queries</li>
            </ul>
          </div>
        </div>
        <h3 className="bigTitle">PROJECTS</h3>
        <div className="experienceCard">
          <div className="experienceCardHeader">
            <h2>Personal Site</h2>
          </div>
          <div className='experineceCardText'>
            <p>This very site you are looking at now!</p>
            <p>Built with Node.js, React (Hooks, Router, React Test Library), SASS, HTML</p>
          </div>
        </div>
        <div className="experienceCard">
          <div className="experienceCardHeader">
            <h2 className="position center">Instagram Effect: 'Which Dragon are You?'</h2>
          </div>
          <div className='experineceCardText'>
            <video width="300" height="500" autoPlay loop >
              <source src={wday} type="video/mp4"/>
            </video>
            <p>Developed using Facebook's Spark AR Studio.</p>
          </div>
        </div>
        <div className="experienceCard">
          <div className="experienceCardHeader">
            <h2>Newsflash</h2>
            <div className="years">2018</div>
          </div>
          <div className='experineceCardText'>
            <p>My Final Project for HackBright Academy in 2018.</p>
            <p>Newsflash displays the most popular news breaking right now in a D3.js visual. Built with Javascript (jQuery, D3, AJAX), Python, HTML, CSS, Bootstrap and Jinja2.</p>
            <p>No longer live, but you can view the code on my <a href='https://github.com/chigginss/Newsflash'>GitHub</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;