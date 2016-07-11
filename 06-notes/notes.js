var Note = React.createClass({
  render: function() {
    return (
      <div className="note"> Note </div>
    );
  }
});

var NotesGrid = React.createClass({
  render: function() {
    return (
      <div className="notes-grid">
        Notes Grid
        <Note />
        <Note />
        <Note />
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
          text: '',
          color: '#FFD700'
        }, {
          id: 1,
          text: '',
          color: '#20B2AA'
        }, {
          id: 2,
          text: '',
          color: '#90EE90'
        }, {
          id: 3,
          text: '',
          color: '#87CEFA'
        }, {
          id: 4,
          text: '',
          color: '#FFB6C1'
        }, {
          id: 5,
          text: '',
          color: '#5F9EA0'
        }, {
          id: 6,
          text: '',
          color: '#FFA07A'
        }, {
          id: 7,
          text: '',
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
          <NotesGrid />
        </div>
      );
    }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
