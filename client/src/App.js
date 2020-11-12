import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import email from './images/gmail_35.png';
import github_logo from './images/github_35.png';
import linkedin_logo from './images/linkedin_35.png';
import './portfolio.css';
import BarChart from './BarChart.js';
import Header from './Header.js';
import About from './About.js';
import Experience from './Experience.js';

class Home extends Component {
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
        <Header/>
        <About/>
        <Experience/>
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

export default Home;