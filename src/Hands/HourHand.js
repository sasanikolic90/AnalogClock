import React from 'react';
import Styles from '../styles';

export default class HourHand extends React.Component {
  render() {
    // +1.5 to center align
    const hourStyle = Object.assign({}, Styles.hour, {
      transform: `translateX(-50%) translateY(-100%) rotate(${this.props.hour * 30 + 1.5}deg)`,
    });
    return <div style={hourStyle}></div>;
  }
}
