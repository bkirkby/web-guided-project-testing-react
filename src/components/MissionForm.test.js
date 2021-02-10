import React from 'react';
import MissionForm from './MissionForm';
import { render, screen } from '@testing-library/react';

test('MissionForm renders', () => {
  render(<MissionForm />)
});

test('renders properly when fetchingData', () => {
  render(<MissionForm isFetchingData={true} />)
  screen.getByText("we are fetching data");
});

test('renders properly when not fetchingData', () => {
  render(<MissionForm isFetchingData={false} />)
  expect(() => screen.getByRole("button")).not.toThrow();
  expect(() => screen.getByText(/we are fetching data/i)).toThrow();
});


