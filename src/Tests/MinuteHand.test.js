import React from 'react';
import ReactDOM from 'react-dom';
import AnalogClock from '../AnalogClock';
import HourHand from '../Hands/MinuteHand';
import Moment from 'moment';

test('if the output of the MinuteHand is displayed correctly', () => {
  var now = Moment();
  var currentMinute = now.minutes();
  const minute = renderer.create(
    <MinuteHand minute=currentMinute />
  ).toJSON();
  expect(minute).toMatchSnapshot();
});
