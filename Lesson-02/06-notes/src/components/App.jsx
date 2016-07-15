var React = require('react');
var NoteEditor = require('./NoteEditor.jsx');
var NotesGrid = require('./NotesGrid.jsx');

require('./App.less');

var App = React.createClass({
    getInitialState: function() {
        return {notes: []};
    },
    componentDidMount: function() {
        var savedNotes = JSON.parse(localStorage.getItem('notes'));
        if (savedNotes) {
            this.setState({notes: savedNotes});
        }
    },
    onNoteAdd: function(newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({notes: newNotes});
    },
    onNoteDelete: function(note) {
        var id = note.id;
        var notes = this.state.notes.filter(function(note) {
            return note.id !== id;
        });
        this.setState({notes: notes});
    },
    componentDidUpdate: function() {
        this._updateLocalStorage();
    },
    render: function() {
        return (
            <div className="notes-app">
                <div className="notes-actions">
                  <div className="search">
                    <span className="search-icon">{'\u1F50E'}</span>
                    <input type="text" className="search-input" />
                  </div>
                  <NoteEditor onNoteAdd={this.onNoteAdd}/>
                </div>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.onNoteDelete}/>
            </div>
        );
    },
    componentWillUnmount: function() {
        this._updateLocalStorage();
    },
    _updateLocalStorage: function() {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
});

module.exports = App;
