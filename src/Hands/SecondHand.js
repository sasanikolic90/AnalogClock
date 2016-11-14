import React from 'react';
import Styles from '../styles';

export default class SecondHand extends React.Component {
  render() {
    // +1 to center align
    const secondStyle = Object.assign({}, Styles.second, {
      transform: `translateX(-50%) translateY(-100%) rotate(${this.props.seconds * 6 + 1}deg)`,
    });
    return <div style={secondStyle}></div>;
  }
}
