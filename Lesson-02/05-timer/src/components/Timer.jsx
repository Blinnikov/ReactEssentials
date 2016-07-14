var React = require('react');

var Timer = React.createClass({
  getInitialState: function() {
    return {
        seconds: 0
    };
  },
  tick: function() {
    this.setState({ seconds: this.state.seconds + 1 });
  },
  render: function() {
      return (
        <h4>
          It has been {this.state.seconds} seconds already.
        </h4>
      );
  },
  componentDidMount: function() {
    this.timer = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
  }
});

module.exports = Timer;
