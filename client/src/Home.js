import React, { Component } from 'react';
import './portfolio.scss';
import About from './About.js';
import Contact from './Contact.js';
import Experience from './Experience.js';
import Header from './Header.js';
import BarChart from './BarChart.js';
import Menu from './menu.js';
import Footer from './Footer.js';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      open: false,
      showFooter: false,
      burger: 'burgerClosed',
      menu: 'menuClosed'
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
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
    // Fetches GET route in server.js from the Express server
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div>
        <div className={this.state.burger} onClick={this.handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={this.state.menu}>
          <a href="#about" onClick={this.handleClick}>About</a>
          <a href="#experience" onClick={this.handleClick}>Experience</a>
          <a href="#projects" onClick={this.handleClick}>Projects</a>
          <a href="#contact" onClick={this.handleClick}>Contact</a>
        </div>
        <div className="content">
          <div className="about">
          <Header/>
          <About/>
          <div style={{ opacity: `${this.state.opacity}`}}>
            <BarChart/>
            <Experience/>
            <Contact/>
          </div>
        </div>
          <Footer/>
          <div className="footerText">Designed and built by Cierra Higgins</div>
        </div>
      </div>
    );
  }
}

export default Home;