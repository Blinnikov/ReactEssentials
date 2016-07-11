var Note = React.createClass({
  render: function() {
    var style = { backgroundColor: this.props.color };
    return (
      <div className="note" style={style}> {this.props.children} </div>
    );
  }
});

var NotesGrid = React.createClass({
  render: function() {
    return (
      <div className="notes-grid">
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
  render: function() {
    return (
        <div className="note-editor"> Editor </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      notes: [
        {
          id: 0,
          text: 'Text 01',
          color: '#FFD700'
        }, {
          id: 1,
          text: 'Text 02',
          color: '#20B2AA'
        }, {
          id: 2,
          text: 'Text 03',
          color: '#90EE90'
        }, {
          id: 3,
          text: 'Text 04',
          color: '#87CEFA'
        }, {
          id: 4,
          text: 'Text 05',
          color: '#FFB6C1'
        }, {
          id: 5,
          text: 'Text 06',
          color: '#5F9EA0'
        }, {
          id: 6,
          text: 'Text 07',
          color: '#FFA07A'
        }, {
          id: 7,
          text: 'Text 08',
          color: '#00FA9A'
        }
      ]
    };
  },
  render: function() {
      return (
        <div className="notes-app">
          Notes App
          <NoteEditor />
          <NotesGrid notes={this.state.notes} />
        </div>
      );
    }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
