import React, { Component, useState } from 'react';
// components
import About from './About.js';
import Divider from './Divider.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import Welcome from './Welcome.js';
import FooterArt from './FooterArt.js';
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
        margin: 40px;


        :hover {
            background-color: rgb(23, 41, 90);
            color: #ffffff;
            text-decoration: none
        }
    `;

    return (
        <div>
            <div className="content">
                <Header/>
                <div style={{ opacity: this.state.showFooter ? '0' : '1'}}>
                  <SideBar />
                </div>
                <Welcome hideChev={this.state.hideChev} />
                <div className="mainSection" style={{ opacity: `${this.state.opacity}`}}>
                    <Divider text={'ABOUT'}/>
                    <About/>
                    <Divider text={'EXPERIENCE'}/>
                    <Experience/>
                    <StyledButton download="resume" href="resume.pdf" target="_blank">DOWNLOAD RESUME</StyledButton>
                    <Divider text={'PROJECTS'}/>
                    <Projects />
                    <Divider text={'CONTACT'}/>
                    <div className="contact">
                        <h1 className="title">Let's Chat!</h1>
                        <div className="text">I'm currently not looking for work, but I would love to connect.</div>
                        <StyledButton href="mailto:cierramhiggins@gmail.com">CONTACT ME</StyledButton>
                    </div>
                </div>
                <FooterArt />
            </div>
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