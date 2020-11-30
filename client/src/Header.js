import React, { Component } from 'react';
import computer_graphic from './images/computer_logo.jpeg';
import email from './images/gmail_35.png';
import github_logo from './images/github_35.png';
import linkedin_logo from './images/linkedin_35.png';
import './portfolio.scss';

class Header extends Component {
  render() {
    return (
        <div className="headerContent">
          <div className='header'>
            <div>
              <img src={computer_graphic} className="headerGraphic" alt="computer"/>
            </div>
            <div className="contactInfo">
              <a href="mailto:cierramhiggins@gmail.com"><img src={email} className="icon" alt="logo"/></a>
              <a href='https://github.com/chigginss'><img src={github_logo} className="icon" alt="logo"/></a>
              <a href='https://www.linkedin.com/in/cierra-m-higgins/'><img src={linkedin_logo} className="icon" alt="logo" /></a>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;