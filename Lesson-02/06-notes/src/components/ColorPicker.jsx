var React = require('react');

require('./ColorPicker.less')

var ColorPicker = React.createClass({
  getInitialState: function() {
    return {
      currentColor: this.props.currentColor
    }
  },
  setColor: function(color) {
    var currentColor = this.state.currentColor === color ? '' : color;
    this.setState({
      currentColor: currentColor
    });
    this.props.onColorChanged(currentColor);
  },
  render: function() {
    var that = this;
    var check = '\u2713';
    var nbsp = '\u00a0';
    return (
      <div>
        {
          this.props.colors.map(function(color) {
            var style = { backgroundColor: color }
            // return <button key={color} className="color-button" style={style}>&nbsp;</button>
            var buttonText = that.state.currentColor === color ? check : nbsp;
            return <button
              key={color}
              className="color-button"
              style={style}
              onClick={that.setColor.bind(null, color)} >
                {buttonText}
              </button>

          })
        }
      </div>
    );
  }
});

module.exports = ColorPicker;
