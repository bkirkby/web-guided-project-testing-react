import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import mockFetchMissions from './api/fetchMissions';
import { missionsFixture } from './components/MissionsList';
import userEvent from '@testing-library/user-event';

jest.mock('./api/fetchMissions');

test('App renders', () => {
  render(<App />);
});

test('fetches and renders mission data', async () => {
  render(<App />);
  mockFetchMissions.mockResolveValueOnce({
    data: missionsFixture
  })

  const btn = screen.getByRole("button");
  userEvent.click(btn);

  await waitFor(() => {
    screen.getAllByTestId("mission").toHaveLength(2)
  })
})