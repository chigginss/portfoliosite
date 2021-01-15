import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from '../Welcome.js';

// smoke test for Welcome component
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Welcome/>, div);
});