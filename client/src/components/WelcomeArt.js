import React, { Component } from 'react';
import '../css/welcomeart.scss';

class WelcomeArt extends Component {

  render() {
    return (
      <div>
        <section className="main">
    
          <span className="absolute sun"></span>

          <span className="absolute star-one"></span>

          <span className="absolute astroid"></span>

          <span className="absolute planet-one"></span>
          <span className="absolute ring"></span>
          <span className="absolute ring-behind"></span>

          <span className="absolute star-two"></span>
          <span className="absolute star-three"></span>
          <span className="absolute star-four"></span>
          <span className="absolute star-five"></span>
          <span className="absolute star-six"></span>
          <span className="absolute star-seven"></span>
          <span className="absolute star-eight"></span>
          <span className="absolute star-nine"></span>
          <span className="absolute star-ten"></span>
        
          <div className="absolute astroid"></div>

          <div className="absolute comet">
            <ul className="no-bullet">
              <li className="comet-body"></li>
              <li className="comet-tail-one"></li>
              <li className="comet-tail-two"></li>
              <li className="comet-tail-three"></li>
              <li className="comet-tail-four"></li>
            </ul>
          </div>


          <div className="absolute ship">
            <ul className="no-bullet">
              <li className="ship-window"></li>
              <li className="ship-body"></li>
              <li className="wing1"></li>
              <li className="wing1 flipwing"></li>
              <li className="ship-rocket"></li>
              <li className="ship-fire-orange"></li>
              <li className="ship-fire-red"></li>
              <li className="ship-fire-yellow"></li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default WelcomeArt;