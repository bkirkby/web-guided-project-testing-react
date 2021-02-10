import React from 'react';
import App from './App';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test("App renders", () => {
  render(<App />);
})

test('pushing button gets and renders missions data', () => {
  render(<App />);

  const btn = screen.getByRole("button");

  userEvent.click(btn);

  waitFor(() => screen.getAllByTestId("mission"))
})