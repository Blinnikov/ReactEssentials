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

var NoteEditor = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },
  onTextChange: function(event) {
    this.setState({
      text: event.target.value
    });
  },
  addNote: function() {
    var note = {
      id: Date.now(),
      text: this.state.text,
      color: 'yellow'
    };
    this.props.onNoteAdd(note);
    this.setState({
      text: ''
    });
  },
  render: function() {
    return (
        <div className="note-editor">
          <textarea
            placeholder="Enter yout text here.."
            rows={5}
            className="textarea"
            value={this.state.text}
            onChange={this.onTextChange}
          />
        <button className="add-button" onClick={this.addNote}>Add</button>
        </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      notes: []
    };
  },
  componentDidMount: function() {
    var savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      this.setState({
        notes: savedNotes
      });
    }
  },
  onNoteAdd: function(newNote) {
    var newNotes = this.state.notes.slice();
    newNotes.unshift(newNote);
    this.setState({ notes: newNotes });
  },
  onNoteDelete: function(note) {
    var id = note.id;
    var notes = this.state.notes.filter(function(note) {
      return note.id !== id;
    });
    this.setState({ notes: notes });
  },
  componentDidUpdate: function() {
    this._updateLocalStorage();
  },
  render: function() {
      return (
        <div className="notes-app">
          Notes App
          <NoteEditor onNoteAdd={this.onNoteAdd} />
          <NotesGrid notes={this.state.notes} onNoteDelete={this.onNoteDelete} />
        </div>
      );
    },
    componentWillUnmount: function () {
      this._updateLocalStorage();
    },
    _updateLocalStorage: function() {
      var notes = JSON.stringify(this.state.notes);
      localStorage.setItem('notes', notes);
    }
});

ReactDOM.render(
  <App />,
  document.getElementById('mount-point')
);
