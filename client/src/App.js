import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './images/logo.svg';
import email from './images/gmail_35.png';
import github_logo from './images/github_35.png';
import hamburger_menu from './images/hamburger_menu.png';
import computer_graphic from './images/computer_logo.jpeg';
import linkedin_logo from './images/linkedin_35.png';
import wday from './videos/what_dragon_are_you.mp4';
import ajax from './icons/ajax-logo.png';
import aws from './icons/aws-logo.png';
import cypress from './icons/cypress-logo.png';
import d3 from './icons/d3.png';
import flask from './icons/flask-logo.png';
import html5 from './icons/HTML5-logo.png';
import css3 from './icons/icons8-css3-50.png';
import js from './icons/icons8-javascript-logo-50.png';
import json from './icons/icons8-json-50.png';
import nodejs from './icons/icons8-nodejs-32.png';
import python from './icons/icons8-python-26.png';
import react from './icons/icons8-react-100.png';
import sass from './icons/icons8-sass-50.png';
import jquery from './icons/jquery-logo.png';
import Photography from './Photography.js';
import './css/portfolio.scss';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches GET route in server.js from the Express server
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className='portfolioHome'>
        <link rel="stylesheet" type="text/css" href="./css/portfolio.scss" />
        <div className="hamburgerMenu">
          <img src={hamburger_menu} className="icon" alt="hamburger menu"/>
        </div>
        <div className='header'>
          <div><img src={computer_graphic} className="headerGraphic" alt="computer"/></div>
        </div>
        <div className="content">
          <h1 className="title">Hi, I'm Cierra Higgins</h1>
          <h2 className="title">Software Engineer with an English Degree.</h2>
          <p className="text">I'm an full stack software developer with 2+ years experience. Currently based in San Francisco, I work on web and mobile platforms.</p>
          <a className="resumeButton" href="mailto:cierramhiggins@gmail.com">CONTACT</a>
          <h3 className="bigTitle">Tech Stack</h3>
          <a className="resumeButton" download="resume" href="resume.pdf" target="_blank">Download Resume</a>
          <div className="experience">
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
                  <li>Analyzed media coverage and delivered PR insights exclusively for Microsoft’s Commercial (Office, Cloud, AI, IoT) Corporate (CEO, Culture) Consumer (XBOX, Windows, Surface) and Public Affairs teams.</li>
                  <li>Measured social data for Microsoft using Netbase, TweetReachPro and other social monitoring tools</li>
                  <li>Researched social media influencers and potential audiences using comScore and other tools</li>
                  <li>Assisted Business Intelligence team with data cleaning and providing terms for SQL queries</li>
                </ul>
              </div>
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
              <h2 className="position">Instagram Effect: 'Which Dragon are You?'</h2>
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
         <div className='contactInfo'>
          <a href="mailto:cierramhiggins@gmail.com"><img src={email} className="icon" alt="logo"/></a>
          <a href='https://github.com/chigginss'><img src={github_logo} className="icon" alt="logo"/></a>
          <a href='https://www.linkedin.com/in/cierra-m-higgins/'><img src={linkedin_logo} className="icon" alt="logo" /></a>
        </div>
        <div className="footer">Designed and built by Cierra Higgins</div>
      </div>
    );
  }
}

export default App;