import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchMissions as mockFetchMissions } from './api/fetchMissions';
import App from './App';

jest.mock('./api/fetchMissions');

test("App renders", () => {
  render(<App />)
})

test("get data make and api call", async () => {
  mockFetchMissions.mockResolvedValueOnce({
    data: [{ mission_name: "mission one", mission_id: "mission 1" }]
  })
  render(<App />)

  const btn = screen.getByRole("button");
  userEvent.click(btn);
  const missions = await waitFor(() => screen.getAllByTestId('mission'));

  expect(missions).toHaveLength(1);
  expect(() => screen.getByText("mission one")).not.toThrow()
})