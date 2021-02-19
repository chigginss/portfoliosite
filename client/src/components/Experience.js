import React, { Component } from 'react';
import ExperienceCard from './ExperienceCard.js';
import '../css/portfolio.scss';

class Experience extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'tab1'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick({currentTarget}) {    
    this.setState({
      activeTab: currentTarget.id
    });
  }
  
  render() {
    return (
      <div className="tabsContainer">
        <div className="tabs">
          <button className={this.state.activeTab === 'tab1' ? 'activeTabButton' : 'tabButton'} id="tab1" title="Grokker" onClick={this.handleClick}>Grokker</button>
          <button className={this.state.activeTab === 'tab2' ? 'activeTabButton' : 'tabButton'}  id="tab2" title="WE Communications, Microsoft" onClick={this.handleClick}>WE Communications, Microsoft</button>
          <button className={this.state.activeTab === 'tab3' ? 'activeTabButton' : 'tabButton'}  id="tab3" title="Hackbright" onClick={this.handleClick}>Hackbright</button>
        </div>
        <div className="experienceContent">
          <div className={this.state.activeTab === 'tab1' ? 'active' : 'hidden'}>
            <ExperienceCard
              position={'Software Engineer'}
              date={'September 2018 - Present (2 Years, 6 months)'}
              texts={[
                'Develop new features for web and mobile platforms.',
                'Improve performance and functionality of existing product. Led significant a11y development to meet WCAG AA standards.',
                'Support internal teams by creating new tools and pulling data for customer reporting.'
              ]}
            />
          </div>
          <div className={this.state.activeTab === 'tab2' ? 'active' : 'hidden'}>
            <ExperienceCard
              position={'Data Specialist'}
              date={'October 2015 - November 2017 (2+ Years)'}
              texts={[
                'Analyzed media coverage and delivered PR insights exclusively for Microsoft Public Affairs teams.',
                'Generated reports using PowerBI, Netbase, TweetReachPro and other tools',
                'Assisted Business Intelligence team with data cleaning and providing terms for SQL queries'
              ]}
            />
          </div>
          <div className={this.state.activeTab === 'tab3' ? 'active' : 'hidden'}>
            <ExperienceCard
              position={'Full Stack Web Engineer'}
              date={'March 2018 - May 2018'}
              texts={[
                'Accelerated 12-week software engineering program for women. Hackbright is highly selective (5% acceptance rate).',
                'Studied computer science fundamentals, object-oriented design, agile development and best practices.',
                'Designed, developed and deployed a web app.'
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;