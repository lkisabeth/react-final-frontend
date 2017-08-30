import React, { Component } from 'react';
import axios from 'axios';
import StickyNote from './StickyNote'

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

  render() {
    return (
      <div>
        <div>
          <button className="newNoteButton">
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
