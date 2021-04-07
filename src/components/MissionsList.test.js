import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionsList from './MissionsList';

const missionsFixture = [
  {
    mission_name: 'bks trip to mars',
    mission_id: 'marsbk1'
  },
  {
    mission_name: 'bks trip to venus',
    mission_id: 'venusbk1'
  }
]

test('MissionsList renders', () => {
  const { rerender } = render(<MissionsList missions={[]} />)

  let missionObjects = screen.queryAllByTestId("mission");
  expect(missionObjects).toHaveLength(0);

  rerender(<MissionsList error="" missions={missionsFixture} />)

})