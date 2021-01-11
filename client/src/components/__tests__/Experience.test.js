import React from 'react';
import ReactDOM from 'react-dom';
import Experience from '../Experience.js';

// smoke test for Experience component
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Experience />, div);
});