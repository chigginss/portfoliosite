import React, { Component } from 'react';
import '../css/portfolio.scss';
import LinkedInIcon from '../icons/LinkedInIcon.js';
import GitHubIcon from '../icons/GitHubIcon.js';
import MailIcon from '../icons/MailIcon.js';

class FooterArt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHovered: true
        };
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true })
    }    

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
                <a href='https://github.com/chigginss'>
                    <GitHubIcon />
                </a>
                <a href='https://www.linkedin.com/in/cierra-m-higgins/'>
                    <LinkedInIcon />
                </a>
                <a href="mailto:cierramhiggins@gmail.com">
                    <MailIcon />
                </a>
              </div>
              <span class="footerText">Designed and built by Cierra Higgins</span>
            </div>
          </div>
        );
    };
};

export default FooterArt;