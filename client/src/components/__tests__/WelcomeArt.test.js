import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeArt from '../WelcomeArt.js';

// smoke test for WelcomeArt component
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WelcomeArt />, div);
});