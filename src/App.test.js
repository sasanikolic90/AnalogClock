import React from 'react';
import ReactDOM from 'react-dom';
import AnalogClock from './AnalogClock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnalogClock />, div);
});
