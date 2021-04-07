import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  const btn = screen.queryByText(/get data/i);
  expect(message).toBeDefined();
  expect(btn).toBeNull();
})

test('getData is called when button is pressed', () => {
  const mockGetData = jest.fn(() => { })
  render(<MissionForm isFetchingData={false} getData={mockGetData} />)
  const btn = screen.getByText(/get data/i);

  // fireEvent.click(btn);
  userEvent.click(btn);
  expect(mockGetData.mock.calls.length).toBe(1);
})