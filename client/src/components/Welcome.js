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
        align-items: center;
        border-left: 3px solid #FFCF99;
        border-bottom: 3px solid #FFCF99;
        color: #111D4A;
        display: flex;
        height: 24px;
        justify-content: center;
        position: relative;
        margin: 30px;
        width: 24px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: sdb04 2s infinite;
        animation: sdb04 2s infinite;
        box-sizing: border-box;

        &:hover {
            border-left: 3px solid #354674;
            border-bottom: 3px solid #354674;
        }

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

        @media (max-width: 600px) {
            margin: 72px;
        }
    `;  
    return (
        <div>
            <div className="welcome">
                <WelcomeArt />
                <div className="welcomeText">
                    <div className="hugeTitle">Cierra Higgins</div>
                    <p className="text">
                       FULL STACK SOFTWARE ENGINEER
                    </p>
                    <div className="skillTitle">ANIMATION MADE WITH CSS</div>
                    <a className="scrollDown" href="#about" style={{ display: `${this.props.hideChev}`}}>
                        <ScrollDown/>
                    </a>
                </div>
            </div>
        </div>
    );
  }
}

export default Welcome;