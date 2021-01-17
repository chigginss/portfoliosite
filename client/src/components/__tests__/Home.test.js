import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../Home.js';

// smoke test for Home component
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
