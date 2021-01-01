import React, { Component } from 'react';
import './portfolio.scss';
import About from './About.js';
import Experience from './Experience.js';
import Header from './Header.js';
import SideBar from './SideBar.js';
import Footer from './Footer.js';
import Welcome from './Welcome.js';
import styled from 'styled-components'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      showFooter: false,
      opacity: '0',
      apiResponse: 'YEY',
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
        // console.log(maxScroll)
        if (currentScrollPos < 200 && currentScrollPos < maxScroll) {
          this.setState({ opacity: '0', hideChev: 'block' })
          // console.log(currentScrollPos)
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
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
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
                    <a href="#about" style={{ display: `${this.state.hideChev}`}}>
                        <ScrollDown/>
                    </a>
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
                <div className="footer">
                    <Footer/>
                </div>
                <div className="footerText">Designed and built by Cierra Higgins</div>
            </div>
        </div>
    );
  }
}

export default App;