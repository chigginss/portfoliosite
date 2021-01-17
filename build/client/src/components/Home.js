import React, { Component, useState } from 'react';
// components
import About from './About.js';
import Divider from './Divider.js';
import Experience from './Experience.js';
import FooterArt from './FooterArt.js';
import Projects from './Projects.js';
import Welcome from './Welcome.js';
// Content
import Resume from '../content/CierraHigginsResume.pdf';
// SVG components
import LinkedInIcon from '../icons/LinkedInIcon.js';
import GitHubIcon from '../icons/GitHubIcon.js';
import MailIcon from '../icons/MailIcon.js';
// SCSS
import styled from 'styled-components'
import '../css/portfolio.scss';

class Home extends Component {

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
      fetch("http://localhost:8080/")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  UNSAFE_componentWillMount() {
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
        } else if (currentScrollPos < maxScroll + 30) {
          this.setState({showFooter: false});
        }
      }
    }
  }

  render() {

    const StyledButton = styled.a`
        color: #FFCF99;
        background-color: transparent;
        border: 1px solid #FFCF99;
        border-radius: 10px;
        font-size: 18px;
        font-family: 'Bungee', cursive;
        padding: 10px;
        text-decoration: none;
        margin-top: 20px;

        :hover {
            color: #354674;
            border: 1px solid #354674;
            text-decoration: none
        }

        @media (max-width: 600px) {
          margin-top: 90px;
        }
    `;

    return (
        <div className="content">
          <Header/>
          <div style={{ opacity: this.state.showFooter ? '0' : '1'}}>
            <SideBar />
          </div>
          <Welcome hideChev={this.state.hideChev} />
          <div className="mainSection fadeIn" style={{ opacity: `${this.state.opacity}`}}>
            <Divider text={'ABOUT'}/>
            <About/>
            <Divider text={'EXPERIENCE'}/>
            <Experience/>
            <StyledButton download="resume" href={Resume} target="_blank">DOWNLOAD RESUME</StyledButton>
            <Divider text={'PROJECTS'}/>
            <Projects />
            <Divider text={'CONTACT'}/>
            <div className="contact">
                <h1 className="centerTitle">Let's Chat!</h1>
                <div className="text">I'm always happy to connect. I'll do my best to get back to you quickly.</div>
                <StyledButton href="mailto:cierramhiggins@gmail.com">CONTACT ME</StyledButton>
            </div>
          </div>
          <FooterArt />
      </div>
    );
  }
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
          <div className='sideBar'>
            <div className="contactInfo">
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
          </div>
        </div>
    );
}
  
export default Home;