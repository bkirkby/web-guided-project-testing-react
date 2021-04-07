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

test('MissionForm renders button is not fetching data', () => {
  render(<MissionForm isFetchingData={false} />)

  const btn = screen.getByText(/get data/i);
  // const btn = screen.getByRole("button");
})