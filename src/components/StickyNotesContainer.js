import React, { Component } from 'react';
import axios from 'axios';

export default class StickyNotesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stickynotes: []
    }
  }

  render() {
    return (
      <div className="">
        StickyNotes
      </div>
    );
  }
}
