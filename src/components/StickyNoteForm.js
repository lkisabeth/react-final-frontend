import React, { Component } from 'react';
import axios from 'axios';

export default class StickyNoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.stickynote.title,
      body: this.props.stickynote.body
    }
  }

  render() {
    return (
      <div className="stickynote">
        <form>
          <input className="input" type="text" name="title" placeholder="Enter a title" />
          <textarea className='input' name='body' placeholder="Write your note here"></textarea>
        </form>
      </div>
    );
  }
}
