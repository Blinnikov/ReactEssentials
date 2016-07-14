var React = require('react');

var NoteEditor = React.createClass({
    getInitialState: function() {
        return {text: ''}
    },
    onTextChange: function(event) {
        this.setState({text: event.target.value});
    },
    addNote: function() {
        var note = {
            id: Date.now(),
            text: this.state.text,
            color: 'yellow'
        };
        this.props.onNoteAdd(note);
        this.setState({text: ''});
    },
    render: function() {
        return (
            <div className="note-editor">
                <textarea placeholder="Enter yout text here.." rows={5} className="textarea" value={this.state.text} onChange={this.onTextChange}/>
                <button className="add-button" onClick={this.addNote}>Add</button>
            </div>
        );
    }
});

module.exports = NoteEditor;
