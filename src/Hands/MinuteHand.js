import React from 'react';
import Styles from '../styles';

export default class MinuteHand extends React.Component {
  render() {
    // +1 to center align
    const minuteStyle = Object.assign({}, Styles.minute, {
      transform: `translateX(-50%) translateY(-100%) rotate(${this.props.minutes * 6 + 1}deg)`,
    });
    return <div style={minuteStyle}></div>;
  }
}
