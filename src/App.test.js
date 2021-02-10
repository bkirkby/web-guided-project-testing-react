import React from 'react';
import App from './App';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchMissions as mockFetchMissions } from './api/fetchMissions';

jest.mock('./api/fetchMissions');

test("App renders", () => {
  render(<App />);
})

test('pushing button gets and renders missions data', async () => {
  render(<App />);
  mockFetchMissions.mockResolvedValueOnce({
    data: [{ mission_id: "mission 1", mission_name: "mission one" }]
  })

  const btn = screen.getByRole("button");

  userEvent.click(btn);

  const missions = await waitFor(() => screen.getAllByTestId("mission"))

  // console.log("bk: missions: ", missions);

  expect(missions).toHaveLength(1);
})