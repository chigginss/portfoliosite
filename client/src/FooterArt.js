import React, { Component } from 'react';
import './portfolio.scss';
import email from './images/gmail_35.png';
import github_logo from './images/github_35.png';
import linkedin_logo from './images/linkedin_35.png';

class FooterArt extends Component {

    render() {
        return (  
        <div class="main">
            <div class="footerArt">
              <span class="absolute star-footer" style={{ right: '300px', 'margin-top': '90px'}}></span>
              <span class="absolute star-footer" style={{ left: '190px', 'margin-top': '2px'}}></span>
              <span class="absolute star-footer" style={{ right: '90px', 'margin-top': '90px'}}></span>
              <span class="absolute star-footer" style={{ left: '90px', 'margin-top': '30px'}}></span>
              <span class="absolute star-footer" style={{ right: '500px', 'margin-top': '25px'}}></span>
              <span class="absolute star-footer"></span>
              <span class="absolute star-footer" style={{ left: '350px', 'margin-top': '50px'}}></span>
              <span class="absolute star-footer" style={{ left: '600px', 'margin-top': '80px'}}></span>
              <span class="absolute star-footer" style={{ left: '300px', 'margin-top': '20px'}}></span>
              <span class="absolute moon"></span>
              <div className="footer">
                <a href="mailto:cierramhiggins@gmail.com"><img src={email} className="icon" alt="logo"/></a>
                <a href='https://github.com/chigginss'><img src={github_logo} className="icon" alt="logo"/></a>
                <a href='https://www.linkedin.com/in/cierra-m-higgins/'><img src={linkedin_logo} className="icon" alt="logo" /></a>
              </div>
              <span class="footerText">Designed and built by Cierra Higgins</span>
            </div>
          </div>
        );
    };
};

export default FooterArt;