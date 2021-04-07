import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import mockFetchMissions from './api/fetchMissions';
import { missionsFixture } from './components/MissionsList';

jest.mock('./api/fetchMissions');

test('App renders', () => {
  render(<App />);
});

test('fetches and renders mission data', async () => {
  render(<App />);
  mockFetchMissions.mockResolveValueOnce({
    data: [

    ]
  })
})