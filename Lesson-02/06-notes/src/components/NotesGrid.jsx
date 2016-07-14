var React = require('react');
var Note = require('./Note.jsx')

var NotesGrid = React.createClass({
  componentDidMount: function() {
    var grid = this.refs.grid;
    this.msnry = new Masonry(grid, {
      // options
      itemSelector: '.note',
      columnWidth: 200,
      gutter: 10,
      isFitWidth: true
    });
  },
  componentDidUpdate: function(prevProps) {
    if(this.props.notes.length != prevProps.notes.length) {
        this.msnry.reloadItems();
        this.msnry.layout();
    }
  },
  render: function() {
    var onDelete = this.props.onNoteDelete;
    return (
      <div className="notes-grid" ref="grid">
        {
          this.props.notes.map(function(note) {
            return (
              <Note
                key={note.id}
                color={note.color}
                onDelete={onDelete.bind(null, note)}
              >
                {note.text}
              </Note>
            );
          })
        }
      </div>
    );
  }
});

module.exports = NotesGrid;
