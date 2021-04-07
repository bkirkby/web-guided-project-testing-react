import React from 'react';
import { render, screen, waitFor, wait } from '@testing-library/react';
import App from './App';
import { fetchMissions as mockFetchMissions } from './api/fetchMissions';
import { missionsFixture } from './components/MissionsList.test';
import userEvent from '@testing-library/user-event';

jest.mock('./api/fetchMissions');

test('App renders', () => {
  render(<App />);
});

test('fetches and renders mission data', async () => {
  render(<App />);
  mockFetchMissions.mockResolvedValueOnce({
    data: missionsFixture
  })

  const btn = screen.getByRole("button");
  userEvent.click(btn);

  // await wait();
  // expect(screen.getAllByTestId("mission")).toHaveLength(1);

  await waitFor(() => {
    const missions = screen.getAllByTestId("mission");
    expect(missions).toHaveLength(3);
    // expect(missions).toEqual([]);
    // expect(screen.getByTestId("mission")).toBeDefined();
  })
})