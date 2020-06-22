import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

class Photography extends Component {
state = {
    data: null
  };

  render() {
    return (
          <Router>
            <div className='navigation'>
              <nav className='routes'>
                  <div className='route'><Link className='link' to="/">Creative</Link></div>
                  <div className='route'><Link className='link' to="/portraits">People</Link></div>
                  <div className='route'><Link className='link' to="/nature">Nature</Link></div>
                  <div className='route'><Link className='link' to="/landscape">Landscape</Link></div>
                  <div className='route'><Link className='link' to="/travel">Travel</Link></div>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/nature">
                  <Nature />
                </Route>
                <Route path="/landscape">
                  <Landscape />
                </Route>
                <Route path="/travel">
                  <Travel />
                </Route>
                <Route path="/portraits">
                  <Portraits />
                </Route>
              </Switch>
            </div>
          </Router>
    );
  }
}

function Nature() {
  return <div className='routeContent'>Nature</div>
}

function Landscape() {
  return <div className='routeContent'><h2>Landscape</h2></div>;
}

function Travel() {
  return <div className='routeContent'><h2>Travel</h2></div>;
}

function Portraits() {
  return <div className='routeContent'><h2>Portraits</h2></div>;
}

export default Photography;