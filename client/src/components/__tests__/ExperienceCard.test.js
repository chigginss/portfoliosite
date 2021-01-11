import React from 'react';
import ReactDOM from 'react-dom';
import ExperienceCard from '../ExperienceCard.js';

// smoke test for ExperienceCard component
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExperienceCard position="testposition" date="testdate" texts={['testtext1', 'testtext2', 'testtext3']}/>, div);
});