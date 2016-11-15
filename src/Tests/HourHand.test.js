import React from 'react';
import ReactDOM from 'react-dom';
import AnalogClock from '../AnalogClock';
import HourHand from '../Hands/HourHand';
import Moment from 'moment';

test('if the output of the HourHand has the inline CSS', () => {
  var now = Moment();
  var currentHour = now.hour();
  const hour = renderer.create(
    <HourHand hour=currentHour />
  ).toJSON();
  expect(hour).toMatchSnapshot();
});
