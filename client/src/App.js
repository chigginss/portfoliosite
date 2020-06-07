import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
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
          <h1 className="title">Hi, I'm Cierra</h1>
          <Router>
            <div className='navigation'>
              <nav className='routes'>
                  <div className='route'><Link to="/">ABOUT</Link></div>
                  <div className='route'><Link to="/experience">EXPERIENCE</Link></div>
                  <div className='route'><Link to="/projects">PROJECTS</Link></div>
                  <div className='route'><Link to="/photography">PHOTOGRAPHY</Link></div>
                  <div className='route'><Link to="/contact">CONTACT</Link></div>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/experience">
                  <Experience />
                </Route>
                <Route path="/photography">
                  <AllPhotography />
                </Route>
                <Route path="/contact">
                  <Contact />
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
    <img src={logo} className="logo" alt="logo" />
    <p className="title">I'm an full stack engineer with a passion for design. I work on mobile, web and game design.</p></div>;
}

function Experience() {
  return <div className='routeContent'><h2>Experience And Projects</h2>
  <h3>Tech Stack</h3>
  <p>Javascript (Node.js), Python, React Native, React, Express, Cypress, jQuery, SCSS/CSS, HTML5, Flask, AJAX, D3.js, AWS</p>
  <h3>Work Experience</h3>
  <p>Software Engineer (fullstack) -- Grokker</p>
  <h4>Data Specialist -- WE Communications, Microsoft</h4>
  <p>- Analyzed media coverage and delivered PR insights exclusively for Microsoft’s Commercial (Office, Cloud, AI, IoT) Corporate (CEO, Culture) Consumer (XBOX, Windows, Surface) and Public Affairs teams.
- Measured social data for Microsoft using Netbase, TweetReachPro and other social monitoring tools
- Researched social media influencers and potential audiences using comScore and other tools
- Assisted Business Intelligence team with data cleaning and providing terms for SQL queries</p>
  <h3>Education</h3>
  </div>;
}

function Projects() {
  return <div className='routeContent'>
    <div>
      <h3>Portfolio Site</h3>
      <p>this site right here!</p>
      <h3>CSSTH Lord Site</h3>
      <p>WIP</p>
    </div>
  </div>;
}

function Contact() {
  return <div className='routeContent'>
    <a href="mailto:cierramhiggins@gmail.com">email me!</a>
    <a href='https://github.com/chigginss'>Github</a>
    <a href='https://www.linkedin.com/in/cierra-m-higgins/'>linkedin</a>
  </div>;
}

function AllPhotography() {
  return <Photography/>;
}

export default App;