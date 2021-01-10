import React from 'react';
import ReactDOM from 'react-dom';
import About from '../About.js';

// smoke test for About component
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
});