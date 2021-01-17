import React from 'react';
import ReactDOM from 'react-dom';
import FooterArt from '../FooterArt.js';

// smoke test for FooterArt component
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterArt />, div);
});