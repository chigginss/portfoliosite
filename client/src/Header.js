import React, { Component } from 'react';
import './portfolio.scss';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      burger: 'burgerClosed',
      menu: 'menuClosed',
    };
  }

  handleClick() {
    this.setState(prevState => ({
      open: !prevState.open,
      burger: !prevState.open ? 'burgerOpen' : 'burgerClosed',
      menu: !prevState.open ? 'menuOpen' : 'menuClosed'
    }));
  }

  render() {
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
    );
  }
}

export default Header;
