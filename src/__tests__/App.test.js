import React from 'react';
import ReactDOM from 'react-dom';
import AnalogClock from './AnalogClock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnalogClock />, div);
});

test('if the output of the HourHand has the inline CSS', () => {
  const hour = renderer.create(
    <div style='left: 50%; position: absolute; top: 50%; transform-origin: 50% 100% 0px; background-color: rgb(0, 0, 0); width: 7px; height: 100px; transform: translateX(-50%) translateY(-100%) rotate(541.5deg);'/></div>
  ).toJSON();
  expect(hour).toMatchSnapshot();
});
