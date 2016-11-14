import React from 'react';
import Moment from 'moment';
import Styles from './clock-styles';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: Moment().format(ss),
      minutes: Moment().format(mm),
      hour: Moment.format(HH),
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(updateTime(this.state));
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {
    this.styles = cssTransform(Styles, nextProps);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={styles.base}>
          <SecondHand />
          <MinutesHand />
          <HourHand />
          <div style={styles.center}></div>
          {assignTicks(styles)}
      </div>
    )
  }
}

class HourHand extends React.Component {
  render() {
    // +1.5 to center align
    const hourStyle = Object.assign({}, styles.hour, {
      transform: `translateX(-50%) translateY(-100%) rotate(${hour * 30 + 1.5}deg)`,
    });
    return <div data-testid="hours" style={hourStyle}></div>;
  }
}

class MinuteHand extends React.Component {
  render() {
    // +1 to center align
    const minuteStyle = Object.assign({}, styles.minute, {
      transform: `translateX(-50%) translateY(-100%) rotate(${minutes * 6 + 1}deg)`,
    });
    return <div data-testid="minutes" style={minuteStyle}></div>;
  }
}

class SecondHand extends React.Component {
  render() {
    // +1 to center align
    const secondStyle = Object.assign({}, styles.second, {
      transform: `translateX(-50%) translateY(-100%) rotate(${seconds * 6 + 1}deg)`,
    });
    return <div data-testid="seconds" style={secondStyle}></div>;
  }
}

function assignTicks({ smallTick, largeTick }) {
  const ticks = [];
  for (let i = 0; i < 60; i++) {
    let style = Object.assign({}, i % 5 === 0 ? largeTick : smallTick, {
      transform: `translateX(-50%) translateY(-100%) rotate(${i * 6}deg)`,
    });
    ticks.push(<span key={i} style={style} />);
  }
  return ticks;
}

AnalogClock.defaultProps = {
  background: '#fff',
  border: '#ececec',
  center: '#000',
  seconds: '#f56c6c',
  minutes: '#ccc',
  hour: '#000',
  tick: '#000',
  width: 400,
};
