var React = require('react');

var Note = React.createClass({
  render: function() {
    var style = { backgroundColor: this.props.color };
    return (
      <div className="note" style={style}>
        <span className="delete-note" onClick={this.props.onDelete}> x </span>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Note;
