import React from 'react';
import Moment from 'moment';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFormatted : Moment().locale('fr').format('dddd Do MMMM YYYY HH:mm:ss').toString()
    };
  }
  tick = () => {
    this.setState({
      dateFormatted : Moment().locale('fr').format('dddd Do MMMM YYYY HH:mm:ss').toString()
    });
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const date = this.state.dateFormatted;
    return(
      <div className="clock"> Date (locale) : {date}</div>
    );
  }
}
