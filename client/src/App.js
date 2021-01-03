import React, { Component, useState } from 'react';
// components
import About from './About.js';
import Experience from './Experience.js';
import Welcome from './Welcome.js';
// images and scss
import styled from 'styled-components'
import email from './images/gmail_35.png';
import github_logo from './images/github_35.png';
import linkedin_logo from './images/linkedin_35.png';
import './portfolio.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      showFooter: false,
      opacity: '0',
      apiResponse: '',
      hideChev: false
    };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        if (currentScrollPos < 200 && currentScrollPos < maxScroll) {
          this.setState({ opacity: '0', hideChev: 'block' })
        } else {
          this.setState({ opacity: '1', hideChev: 'none' })
        }

        if (currentScrollPos === maxScroll) {
          this.setState({showFooter: true});
        }
      }
    }
  }

  render() {

    const StyledButton = styled.a`
        color: #6564DB;
        background-color: transparent;
        border: 1px solid #6564DB;
        border-radius: 10px;
        font-size: 18px;
        font-family: 'Bungee', cursive;
        padding: 10px;
        text-decoration: none;
        margin: 10px;


        :hover {
            background-color: #ffffff;
            text-decoration: none
        }
    `;

    const ScrollDown = styled.span`    
        color: #6564DB;
        position: absolute;
        width: 24px;
        height: 24px;
        border-left: 3px solid #fff;
        border-bottom: 3px solid #fff;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: sdb04 2s infinite;
        animation: sdb04 2s infinite;
        box-sizing: border-box;
        @-webkit-keyframes sdb04 {
            0% {
                -webkit-transform: rotate(-45deg) translate(0, 0);
            }
            20% {
                -webkit-transform: rotate(-45deg) translate(-10px, 10px);
            }
            40% {
                -webkit-transform: rotate(-45deg) translate(0, 0);
            }
        }

        @keyframes sdb04 {
            0% {
                transform: rotate(-45deg) translate(0, 0);
            }
            20% {
                transform: rotate(-45deg) translate(-10px, 10px);
            }
            40% {
                transform: rotate(-45deg) translate(0, 0);
            }
        }
    `;

    return (
        <div>
            <div className="content">
                <Header/>
                <div className="about">
                    <SideBar/>
                    <Welcome/>
                    <div className="scrollDown">
                        <a href="#about" style={{ display: `${this.state.hideChev}`}}>
                            <ScrollDown/>
                        </a>
                    </div>
                    <div className="hide" style={{ opacity: `${this.state.opacity}`}}>
                        <About/>
                        <StyledButton download="resume" href="resume.pdf" target="_blank">DOWNLOAD RESUME</StyledButton>
                        <Experience/>
                    </div>
                    <div className="contact" id="contact">
                        <h1 className="title">Let's Chat!</h1>
                        <div className="text">I'm currently not looking for work, but I would love to connect.</div>
                        <StyledButton href="mailto:cierramhiggins@gmail.com">CONTACT ME</StyledButton>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
  }
}

function Footer() {
    return (
        <div>
            <div className="footer">
                <a href="mailto:cierramhiggins@gmail.com"><img src={email} className="icon" alt="logo"/></a>
                <a href='https://github.com/chigginss'><img src={github_logo} className="icon" alt="logo"/></a>
                <a href='https://www.linkedin.com/in/cierra-m-higgins/'><img src={linkedin_logo} className="icon" alt="logo" /></a>
            </div>
            <div className="footerText">Designed and built by Cierra Higgins</div>
        </div>
    );
}

function Header() {
    const [open, setOpen] = useState(false);
  
    return (
        <div className="headerBar">
            <div className="headerContainer">
                <div className="headerName">CIERRA HIGGINS</div>
            </div>
            <div className="headerLinks">
                <a href="#about" className="headerLink">About</a>
                <a href="#experience" className="headerLink">Experience</a>
                <a href="#projects" className="headerLink">Projects</a>
                <a href="#contact" className="headerLink">Contact</a>
            </div>
            <div className={open ? 'burgerOpen' : 'burgerClosed'} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={open ? 'menuOpen' : 'menuClosed'}>
                <a href="#about" onClick={() => setOpen(!open)}>About</a>
                <a href="#experience" onClick={() => setOpen(!open)}>Experience</a>
                <a href="#projects" onClick={() => setOpen(!open)}>Projects</a>
                <a href="#contact" onClick={() => setOpen(!open)}>Contact</a>
            </div>
        </div>
    );
}

function SideBar() {
    return (
        <div className="headerContent">
          <div className='header'>
            <div className="contactInfo">
              <a href="mailto:cierramhiggins@gmail.com"><img src={email} className="icon" alt="logo"/></a>
              <a href='https://github.com/chigginss'><img src={github_logo} className="icon" alt="logo"/></a>
              <a href='https://www.linkedin.com/in/cierra-m-higgins/'><img src={linkedin_logo} className="icon" alt="logo" /></a>
            </div>
          </div>
        </div>
    );
}
  
export default App;