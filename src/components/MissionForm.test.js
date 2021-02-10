import React from 'react';
import MissionForm from './MissionForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

test('getData is called when button is pressed', () => {
  const mockGetData = jest.fn();
  // console.log("bk: mockGetData: ", mockGetData)
  // console.log("bk: mockGetData.mock: ", mockGetData.mock)
  render(<MissionForm isFetchingData={false} getData={mockGetData} />);
  // render(<MissionForm isFetchingData={false} />);

  // const btn = screen.getByRole("button");
  const btn = screen.getByText(/get data/i);

  userEvent.click(btn);

  expect(mockGetData).toBeCalledTimes(1);
})
