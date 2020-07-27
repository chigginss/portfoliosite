import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders navigation bar', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/about experience photography/i);
  expect(linkElement).toBeInTheDocument();
});
