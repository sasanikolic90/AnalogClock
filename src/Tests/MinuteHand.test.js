import React from 'react';
import AnalogClock from '../AnalogClock';
import MinuteHand from '../Hands/MinuteHand';
import Moment from 'moment';
import renderer from 'react-test-renderer';

test('if the output of the MinuteHand is displayed correctly', () => {
  var now = Moment();
  var currentMinute = now.minutes();
  const minute = renderer.create(
    <MinuteHand minute={currentMinute} />
  ).toJSON();
  expect(minute).toMatchSnapshot();
});
