import React from 'react';
import ReactDOM from 'react-dom';
import AnalogClock from '../AnalogClock';
import HourHand from '../Hands/SecondHand';
import Moment from 'moment';

test('if the output of the HourHand is displayed correctly', () => {
  var now = Moment();
  var currentSecond = now.seconds();
  const second = renderer.create(
    <SecondHand second=currentSecond />
  ).toJSON();
  expect(second).toMatchSnapshot();
});
