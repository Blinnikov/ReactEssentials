var Note = React.createClass({
  render: function() {
    var style = { backgroundColor: this.props.color };
    return (
      <div className="note" style={style}> {this.props.children} </div>
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
    return (
      <div className="notes-grid" ref="grid">
        {
          this.props.notes.map(function(note) {
            return <Note key={note.id} color={note.color} >
              {note.text}
            </Note>;
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
      notes: [
        // {
        //   id: 0,
        //   text: 'Text 01',
        //   color: '#FFD700'
        // }, {
        //   id: 1,
        //   text: 'Text 02',
        //   color: '#20B2AA'
        // }, {
        //   id: 2,
        //   text: 'Text 03',
        //   color: '#90EE90'
        // }, {
        //   id: 3,
        //   text: 'Text 04',
        //   color: '#87CEFA'
        // }, {
        //   id: 4,
        //   text: 'Text 05',
        //   color: '#FFB6C1'
        // }, {
        //   id: 5,
        //   text: 'Text 06',
        //   color: '#5F9EA0'
        // }, {
        //   id: 6,
        //   text: 'Text 07',
        //   color: '#FFA07A'
        // }, {
        //   id: 7,
        //   text: 'Text 08',
        //   color: '#00FA9A'
        // }
      ]
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
    this.setState({
      notes: newNotes
    }, this._updateLocalStorage);
  },
  render: function() {
      return (
        <div className="notes-app">
          Notes App
          <NoteEditor onNoteAdd={this.onNoteAdd} />
          <NotesGrid notes={this.state.notes} />
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
