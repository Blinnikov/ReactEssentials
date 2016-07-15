var React = require('react');
var ColorPicker = require('./ColorPicker.jsx');

require('./NoteEditor.less')

var NoteEditor = React.createClass({
    getInitialState: function() {
        return {
          text: '',
          currentColor: '#FFFF85',
          colors: ['#FF897D', '#FFD27A', '#FFFF85', '#CFD8DC', '#7CD7FF', '#A4FFEB', '#CBFF8A']
        }
    },
    onTextChange: function(event) {
        this.setState({text: event.target.value});
    },
    onColorChange: function(color) {
      this.setState({ currentColor: color })
    },
    addNote: function() {
        var note = {
            id: Date.now(),
            text: this.state.text,
            color: this.state.currentColor
        };
        this.props.onNoteAdd(note);
        this.setState({text: ''});
    },
    render: function() {
        return (
            <div className="note-editor">
                <textarea placeholder="Enter yout text here.." rows={5} className="textarea" value={this.state.text} onChange={this.onTextChange}/>
                <div className="groups">
                    <div className="left-group">
                        <ColorPicker colors={this.state.colors} currentColor={this.state.currentColor} onColorChanged={this.onColorChange} />
                    </div>
                    <div className="right-group">
                        <button className="add-button" onClick={this.addNote} disabled={!this.state.text}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = NoteEditor;
