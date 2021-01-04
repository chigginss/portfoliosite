import React, { Component, useState } from 'react';
// components
import About from './About.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
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
        margin: 40px;


        :hover {
            background-color: #6564DB;
            color: #ffffff;
            text-decoration: none
        }
    `;

    return (
        <div>
            <div className="content">
                <Header/>
                <SideBar />
                <Welcome hideChev={this.state.hideChev} />
                <div className="mainSection" style={{ opacity: `${this.state.opacity}`}}>
                    <div className="sectionHeader">1. About</div>
                    <About/>
                    <div id="experience"  className="sectionHeader">2. Experience</div>
                    <div className="experience">
                      <Experience/>
                    </div>
                    <StyledButton download="resume" href="resume.pdf" target="_blank">DOWNLOAD RESUME</StyledButton>
                    <div id="projects" className="sectionHeader">3. Projects</div>
                    <Projects />
                    <div id="contact" className="sectionHeader">4. CONTACT</div>
                    <div className="contact">
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
            <span class="star-one"></span>
            <span class="star-two"></span>
            <div class="moon"></div>
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