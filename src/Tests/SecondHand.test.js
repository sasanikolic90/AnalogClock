import React from 'react';
import AnalogClock from '../AnalogClock';
import SecondHand from '../Hands/SecondHand';
import Moment from 'moment';
import renderer from 'react-test-renderer';

test('if the output of the HourHand is displayed correctly', () => {
  var now = Moment();
  var currentSecond = now.seconds();
  const second = renderer.create(
    <SecondHand second={currentSecond} />
  ).toJSON();
  expect(second).toMatchSnapshot();
});
