import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './images/logo.svg';
import email from './images/email.png'
import github_logo from './images/github_icon.png'
import linkedin_logo from './images/linkedin_logo.png'
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
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
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
            <div className=''>
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
    <h1 className="title">Hi, I'm Cierra</h1>
    <img src={logo} className="logo" alt="logo" />
    <p className="text">I'm an full stack software engineer with 2+ years experience. I work on web, mobile and game design.</p>
    <p className="text">I'm not your typical engineer--Previously, I worked as a photographe, PR data analyst, and interned for a US senator. I also have a degree in English Literature.</p>
    <p className="text">I love gaming (Dark Souls, The Last of Us, The Witcher, BOTW). </p>
    <p className="text">I grew up in Montana and love spending time in nature. </p>
    <p className="text">To To view my work as a photographer, view the 'Photography' Tab.</p></div>;
}

function Experience() {
  return <div className='routeContent'><h2 className="title">I'm an established engineer with diverse experience.</h2>
  <a className="resumeButton" href="resume.pdf" target="_blank">View Resume</a>
  <h3>Tech Stack</h3>
  <p className='paragraph'>Javascript (Node.js), Python, React Native, React, Express, Cypress, jQuery, SCSS/CSS, HTML5, Flask, AJAX, D3.js, AWS</p>
  <h3>WORK</h3>
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
      <h2 className="position">CSSth Lord</h2>
      <div className="years">In Progress</div>
    </div>
    <div className='experineceCardText'>
      <p>A current project I am working on to create a CSS Star Wars meme generator.</p>
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