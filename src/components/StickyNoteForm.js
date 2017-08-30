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

  handleInput = (e) => {this.setState({[e.target.name]: e.target.value})}

  render() {
    return (
      <div className="stickynote">
        <form>
          <input className="input" type="text" name="title" placeholder="Enter a title"
            value={this.state.title} onChange={this.handleInput} />
          <textarea className='input' name='body' placeholder="Write your note here"
            value={this.state.body} onChange={this.handleInput}></textarea>
        </form>
      </div>
    );
  }
}
