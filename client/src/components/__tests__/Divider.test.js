import React from 'react';
import ReactDOM from 'react-dom';
import Divider from '../Divider.js';

// smoke test for Divider component
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Divider text='testdate' />, div);
});