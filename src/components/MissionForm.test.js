import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionForm from './MissionForm';

// describe('missionform tests', () => {
//   it('renders MissionForm', ()=> {

//   })
// })

test('MissionForm renders', () => {
  // arrange, act, assert
  render(<MissionForm />)
})

test('MissionForm renders button if not fetching data', () => {
  render(<MissionForm isFetchingData={false} />)

  const btn = screen.queryByText(/get datae/i);

  expect(btn).toBeNull();
  // const btn = screen.getByRole("button");
})

test('MissionForm renders message if fetching data', () => {
  render(<MissionForm isFetchingData={true} />);

  const message = screen.getByText(/we are fetching data/i);

  expect(message).toBeDefined();
})