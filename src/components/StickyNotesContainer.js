import React, { Component } from 'react';
import axios from 'axios';

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
        {this.state.stickynotes.map((stickynote) => {
          return (
            <div className="stickynote" key={stickynote.id}>
              <h4>{stickynote.title}</h4>
              <p>{stickynote.body}</p>
            </div>
          )
        })}
      </div>
    );
  }
}
