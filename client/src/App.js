import React, { Component } from 'react';
import './portfolio.scss';
import About from './About.js';
import Contact from './Contact.js';
import Experience from './Experience.js';
import Header from './Header.js';
import BarChart from './BarChart.js';
import Menu from './menu.js';
import Footer from './Footer.js';
import Welcome from './Welcome.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      open: false,
      showFooter: false,
      burger: 'burgerClosed',
      menu: 'menuClosed',
      apiResponse: 'YEY'
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

  handleClick() {
    this.setState(prevState => ({
      open: !prevState.open,
      burger: !prevState.open ? 'burgerOpen' : 'burgerClosed',
      menu: !prevState.open ? 'menuOpen' : 'menuClosed'
    }));
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log(maxScroll)
        if (currentScrollPos < 200 && currentScrollPos < maxScroll) {
          this.setState({ opacity: '0' })
          // console.log(currentScrollPos)
        } else {
          this.setState({ opacity: '1' })
        }

        if (currentScrollPos === maxScroll) {
          this.setState({showFooter: true});
        }
      }
    }
  }

  render() {
    return (
        <div>
            <div className="content">
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
                    <div className={this.state.burger} onClick={() => this.handleClick()}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={this.state.menu}>
                        <a href="#about" onClick={() => this.handleClick()}>About</a>
                        <a href="#experience" onClick={() => this.handleClick()}>Experience</a>
                        <a href="#projects" onClick={() => this.handleClick()}>Projects</a>
                        <a href="#contact" onClick={() => this.handleClick()}>Contact</a>
                    </div>
                </div>
                <div className="about">
                    <Header/>
                    <Welcome/>
                    <div className="hide" style={{ opacity: `${this.state.opacity}`}}>
                        <About/>
                        <Experience/>
                    </div>
                    <div className="contact" id="contact">
                        <h1 className="title">Let's Chat!</h1>
                        <div className="text">I'm currently not looking for work, but I would love to connect.</div>
                        <a className="resumeButton" href="mailto:cierramhiggins@gmail.com">Contact Me</a>
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