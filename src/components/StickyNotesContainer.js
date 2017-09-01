import React, { Component } from 'react';
import axios from 'axios';
import StickyNote from './StickyNote'
import StickyNoteForm from './StickyNoteForm'
import update from 'immutability-helper'
import Notification from './Notification'

export default class StickyNotesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stickynotes: [],
      editingNoteId: null,
      notification: '',
      transitionIn: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/sticky_notes.json')
    .then(response => {
      this.setState({stickynotes: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewStickyNote = () => {
    axios.post('http://localhost:3001/api/v1/sticky_notes', {stickynote: {title: '', body: ''}})
    .then(response => {
      const stickynotes = update(this.state.stickynotes, { $splice: [[0, 0, response.data]]})
      this.setState({stickynotes: stickynotes, editingNoteId: response.data.id})
    })
    .catch(error => console.log(error))
  }

  updateStickyNote = (stickynote) => {
    const stickyNoteIndex = this.state.stickynotes.findIndex(x => x.id === stickynote.id)
    const stickynotes = update(this.state.stickynotes, {[stickyNoteIndex]: { $set: stickynote }})
    this.setState({stickynotes: stickynotes, notification: 'All changes saved', transitionIn: true })
  }

  deleteStickyNote = (id) => {
    axios.delete(`http://localhost:3001/api/v1/sticky_notes/${id}`)
    .then(response => {
      const stickyNoteIndex = this.state.stickynotes.findIndex(x => x.id === id)
      const stickynotes = update(this.state.stickynotes, { $splice: [[stickyNoteIndex, 1]]})
      this.setState({stickynotes: stickynotes})
    })
    .catch(error => console.log(error))
  }

  resetNotification = () => {this.setState({notification: '', transitionIn: false})}

  enableEditing = (id) => {
    this.setState({editingNoteId: id}, () => { this.title.focus() })
  }

  render() {
    return (
      <div>
        <div>
          <button className="newNoteButton" onClick={this.addNewStickyNote} >
            New Sticky Note
          </button>
        </div>
        {this.state.stickynotes.map((stickynote) => {
          if(this.state.editingNoteId === stickynote.id) {
            return(<StickyNoteForm stickynote={stickynote} key={stickynote.id} />)
          } else {
            return(<StickyNote stickynote={stickynote} key={stickynote.id} />)
          }
        })}
      </div>
    );
  }
}
