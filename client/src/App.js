import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './images/logo.svg';
import email from './images/email.png';
import github_logo from './images/github_icon.png';
import computer_graphic from './images/computer_graphic.jpg';
import linkedin_logo from './images/linkedin_logo.png';
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
import './App.css';

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
        <Router>
          <div className='header'>
            <div><img src={computer_graphic} className="headerGraphic" alt="computer"/></div>
            <div className='topHeader'>
              <a href="mailto:cierramhiggins@gmail.com"><img src={email} className="icon" alt="logo"/></a>
              <a href='https://github.com/chigginss'><img src={github_logo} className="icon" alt="logo"/></a>
              <a href='https://www.linkedin.com/in/cierra-m-higgins/'><img src={linkedin_logo} className="icon" alt="logo" /></a>
            </div>
            <div className='navigation'>
              <nav className='routes'>
                  <div className='route'><Link className='headerLink' to="/">ABOUT</Link></div>
                  <div className='route'><Link className='headerLink' to="/experience">EXPERIENCE</Link></div>
                  <div className='route'><Link className='headerLink' to="/photography">PHOTOGRAPHY</Link></div>
              </nav>
            </div>
          </div>
            <div className="content">
              <Switch>
                <Route path="/experience">
                  <Experience />
                </Route>
                <Route path="/photography">
                  <AllPhotography />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

function Home() {
  return <div className='routeContent'>
    <h1 className="title">Hi, I'm Cierra Higgins</h1>
    <h2 className="title">Software Engineer with an English Degree.</h2>
    <p className="text">I'm an full stack software developer with 2+ years experience. Currently based in San Francisco, I work on web and mobile platforms.</p>
    <a className="resumeButton" href="mailto:cierramhiggins@gmail.com">CONTACT</a>
  </div>;
}

function Experience() {
  return <div className='routeContent'>
  <h3>Tech Stack</h3>
  <div>
    <img src={nodejs} className="skill" alt="logo" />
    <img src={react} className="skill" alt="logo" />
    <img src={jquery} className="skill" alt="logo" />
    <img src={python} className="skill" alt="logo" />
    <img src={css3} className="skill" alt="logo" />
    <img src={ajax} className="skill" alt="logo" />
    <img src={html5} className="skill" alt="logo" />
    <img src={cypress} className="skill" alt="logo" />
    <img src={d3} className="skill" alt="logo" />
    <img src={flask} className="skill" alt="logo" />
    <img src={js} className="skill" alt="logo" />
    <img src={json} className="skill" alt="logo" />
    <img src={sass} className="skill" alt="logo" />
  </div>
  <a className="resumeButton" href="resume.pdf" target="_blank">View Resume</a>
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
  <h3>PROJECTS</h3>
  <div className="experienceCard">
    <div className="experienceCardHeader">
      <h2 className="position">Personal Site</h2>
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
      <h2 className="position">Newsflash</h2>
      <div className="years">2018</div>
    </div>
    <div className='experineceCardText'>
      <p>My Final Project for HackBright Academy in 2018.</p>
      <p>Newsflash displays the most popular news breaking right now in a D3.js visual. Built with Javascript (jQuery, D3, AJAX), Python, HTML, CSS, Bootstrap and Jinja2.</p>
      <p>No longer live, but you can view the code on my <a href='https://github.com/chigginss/Newsflash'>GitHub</a></p>
    </div>
  </div>
  </div>;
}

function AllPhotography() {
  return <Photography/>;
}

export default App;