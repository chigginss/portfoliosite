import React, { Component } from 'react';
import '../css/portfolio.scss';
import '../css/welcomeart.scss';
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
        <div>
            <div>
              <span className="absolute star-footer" style={{ right: '300px', 'marginTop': '90px'}}></span>
              <span className="absolute star-footer" style={{ left: '190px', 'marginTop': '2px'}}></span>
              <span className="absolute star-footer" style={{ right: '90px', 'marginTop': '90px'}}></span>
              <span className="absolute star-footer" style={{ left: '90px', 'marginTop': '30px'}}></span>
              <span className="absolute star-footer" style={{ right: '500px', 'marginTop': '25px'}}></span>
              <span className="absolute star-footer"></span>
              <span className="absolute star-footer" style={{ left: '350px', 'marginTop': '50px'}}></span>
              <span className="absolute star-footer" style={{ left: '600px', 'marginTop': '80px'}}></span>
              <span className="absolute star-footer" style={{ left: '300px', 'marginTop': '20px'}}></span>
              <span className="absolute moon"></span>
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
              <span className="footerText">Designed and built by Cierra Higgins</span>
            </div>
          </div>
        );
    };
};

export default FooterArt;