import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './portfolio.scss';
import About from './About.js';
import Contact from './Contact.js';
import Experience from './Experience.js';
import Header from './Header.js';

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
      <div className="content">
        <Header/>
        <About/>
        <Experience/>
        <Contact/>
        <div className="footer">Designed and built by Cierra Higgins</div>
      </div>
    );
  }
}

export default Home;