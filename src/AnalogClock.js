import React from 'react';
import Moment from 'moment';
import Styles from './styles';
import { cssTransform, updateTime } from './Utils/util';
import HourHand from './Hands/HourHand';
import MinuteHand from './Hands/MinuteHand';
import SecondHand from './Hands/SecondHand';

export default class AnalogClock extends React.Component {
  constructor(props) {
    super(props);
    var now = Moment();

    this.state = {
      seconds: now.seconds(),
      minutes: now.minutes(),
      hour: now.hour(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(updateTime(this.state));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const styles = cssTransform(Styles, this.props);

    return (
      <div style={styles.base}>
        <SecondHand seconds={this.state.seconds} />
        <MinuteHand minutes={this.state.minutes} />
        <HourHand hour={this.state.hour} />
      </div>
    )
  }
}
