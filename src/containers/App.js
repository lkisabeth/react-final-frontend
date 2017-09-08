import React, { Component } from 'react';
import '../App.css';
import StickyNotesContainer from './StickyNotesContainer'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Sticky Note Board</h1>
        </div>
        <StickyNotesContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stickynotes: state.stickynotes
  }
}

export default connect(mapStateToProps)(App);
