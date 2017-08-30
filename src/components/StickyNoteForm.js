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
}
