import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';

test("App renders", () => {
  render(<App />);
})