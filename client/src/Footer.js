import React, { Component } from 'react';
import email from './images/gmail_35.png';
import github_logo from './images/github_35.png';
import linkedin_logo from './images/linkedin_35.png';
import './portfolio.scss';

class Header extends Component {
  render() {
    return (
        <div className="footer">
            <a href="mailto:cierramhiggins@gmail.com"><img src={email} className="icon" alt="logo"/></a>
            <a href='https://github.com/chigginss'><img src={github_logo} className="icon" alt="logo"/></a>
            <a href='https://www.linkedin.com/in/cierra-m-higgins/'><img src={linkedin_logo} className="icon" alt="logo" /></a>
        </div>
    );
  }
}

export default Header;