import React, { Component } from "react";
import Clock from "react-clock";

export default class ClockTimezone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.getTime(),
    };
  }
  getTime() {
    return new Date(
      new Date().toLocaleString("en-US", {
        timeZone: this.props.timezone,
      })
    );
  }
  componentDidMount() {
    setInterval(() => this.setState({ date: this.getTime() }), 1000);
  }

  render() {
    return (
        <Clock value={this.state.date} />
    );
  }
}
