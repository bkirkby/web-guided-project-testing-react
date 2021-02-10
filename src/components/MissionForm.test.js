import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MissionForm from './MissionForm';

test('MissionForm renders', () => {
  render(<MissionForm />)
});

test('renders while fetching data', () => {
  const { rerender } = render(<MissionForm isFetchingData={true} />);

  screen.getByText("we are fetching data");
  expect(() => screen.getByText(/get data/i)).toThrow();

  rerender(<MissionForm isFetchingData={false} />);

  expect(() => screen.getByText(/get data/i)).not.toThrow();
})

test('clicking get data calls getData', () => {
  const mockGetData = jest.fn();
  // console.log('bk: MissionForm.test.js: mockGetData: ', mockGetData);
  // console.log('bk: MissionForm.test.js: mockGetData.mock: ', mockGetData.mock);
  render(<MissionForm isFetchingData={false} getData={mockGetData} />);

  const btn = screen.getByText(/get data/i);
  userEvent.click(btn);

  // console.log('bk: MissionForm.test.js: mockGetData.mock: ', mockGetData.mock);
  expect(mockGetData).toHaveBeenCalledTimes(1);
})