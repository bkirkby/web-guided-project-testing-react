import React from 'react';
import MissionForm from './MissionForm';
import { render } from '@testing-library/react';

test('MissionForm renders', () => {
  render(<MissionForm isFetchingData='' />)
})
