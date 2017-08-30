import React, { Component } from 'react';
import axios from 'axios';
import StickyNote from './StickyNote'
import update from 'immutability-helper'

export default class StickyNotesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stickynotes: []
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
      console.log(response)
    })
    .catch(error => console.log(error))
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
          return (
            <StickyNote stickynote={stickynote} key={stickynote.id} />
          )
        })}
      </div>
    );
  }
}
