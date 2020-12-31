import React, { Component } from 'react';
import wday from './videos/what_dragon_are_you.mp4';
import './portfolio.scss';
import ExperienceCard from './ExperienceCard.js';

class Experience extends Component {

  render() {
    return (
      <div id="experience">
        <ExperienceCard
          position={'Software Engineer'}
          company={'Grokker'}
          date={'August 2018 - Present (2+ Years)'}
          texts={[
            'Designed and implemented a myriad of features on web and mobile platforms for consumer and enterprise users',
            'Improved Web Accessibility to meet WCAG AA standards',
            'Designed and created admin tools for internal use'
          ]}
        />
        <ExperienceCard
          position={'Data Specialist'}
          company={'WE Communications, Microsoft'}
          date={'October 2015 - November 2017 (2+ Years)'}
          texts={[
            'Analyzed media coverage and delivered PR insights exclusively for Microsoft Public Affairs teams.',
            'Generated reports using PowerBI, Netbase, TweetReachPro and other tools',
            'Assisted Business Intelligence team with data cleaning and providing terms for SQL queries'
          ]}
        />
        <ExperienceCard
          position={'Full Stack Web Engineer'}
          company={'Hackbright Academy'}
          date={'March 2018 - May 2018'}
          texts={[
            'Accelerated 12-week software engineering program for women. Hackbright is highly selective (5% acceptance rate).',
            'Studied computer science fundamentals, object-oriented design, agile development and best practices.',
            'Designed, developed and deployed a web app.'
          ]}
        />
      </div>
    );
  }
}

export default Experience;