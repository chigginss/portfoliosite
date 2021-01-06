import React, { Component } from 'react';
import '../css/portfolio.scss';
import WelcomeArt from './WelcomeArt.js';
import styled from 'styled-components'

class Welcome extends Component {

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log(maxScroll)
        if (currentScrollPos < 400 && currentScrollPos < maxScroll) {
          this.setState({ opacity: '0' })
          // console.log(currentScrollPos)
        } else {
          this.setState({ opacity: '1' })
        }
      }
    }
  }

  render() {
    const ScrollDown = styled.span`    
        color: #6564DB;
        border-left: 3px solid #fff;
        border-bottom: 3px solid #fff;
        height: 24px;
        position: absolute;
        margin: 20px;
        width: 24px;
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
            <div className="welcome">
                <WelcomeArt />
                <div className="welcomeText">
                    <div className="hugeTitle">I'm Cierra!</div>
                    <p className="text">
                        I'm a CSSTH lord and full stack software developer based in San Francisco.
                    </p>
                    <div className="text">Animation made entirely with CSS</div>
                    <div className="scrollDown">
                        <a href="#about" style={{ display: `${this.props.hideChev}`}}>
                            <ScrollDown/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Welcome;