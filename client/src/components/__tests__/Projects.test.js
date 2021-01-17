import React from 'react';
import ReactDOM from 'react-dom';
import Projects from '../Projects.js';

// smoke test for Projects component
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Projects/>, div);
});