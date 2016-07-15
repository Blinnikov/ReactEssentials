var React = require('react');

require('./ColorPicker.less')

var ColorPicker = React.createClass({
  render: function() {
    return (
      <div>
        <button className="color-button red">&nbsp;</button>
        <button className="color-button yellow" >&nbsp;</button>
        <button className="color-button light-yellow" >&nbsp;</button>
        <button className="color-button purple" >&nbsp;</button>
        <button className="color-button blue" >&nbsp;</button>
        <button className="color-button sky-blue" >&nbsp;</button>
        <button className="color-button green" >&nbsp;</button>
      </div>
    );
  }
});

module.exports = ColorPicker;
