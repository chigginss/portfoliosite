import React, { Component } from 'react';
import './welcomeart.scss';

class Welcome extends Component {

  render() {
    return (       
          <body>
            <section class="main">
        
              <span class="absolute sun"></span>

              <span class="absolute star-one"></span>

              <span class="absolute astroid"></span>

              <span class="absolute planet-one"></span>
              <span class="absolute ring"></span>
              <span class="absolute ring-behind"></span>

              <span class="absolute star-two"></span>
              <span class="absolute star-three"></span>
              <span class="absolute star-four"></span>
              <span class="absolute star-five"></span>
              <span class="absolute star-six"></span>
              <span class="absolute star-seven"></span>
              <span class="absolute star-eight"></span>
              <span class="absolute star-nine"></span>
              <span class="absolute star-ten"></span>
            
              <div class="absolute astroid"></div>

              <div class="absolute comet">
                <ul class="no-bullet">
                  <li class="comet-body"></li>
                  <li class="comet-tail-one"></li>
                  <li class="comet-tail-two"></li>
                  <li class="comet-tail-three"></li>
                  <li class="comet-tail-four"></li>
                </ul>
              </div>


              <div class="absolute ship">
                <ul class="no-bullet">
                  <li class="ship-window"></li>
                  <li class="ship-body"></li>
                  <li class="wing1"></li>
                  <li class="wing1 flipwing"></li>
                  <li class="ship-rocket"></li>
                  <li class="ship-fire-orange"></li>
                  <li class="ship-fire-red"></li>
                  <li class="ship-fire-yellow"></li>
                </ul>
              </div>
            </section>
        </body>
    );
  }
}

export default Welcome;