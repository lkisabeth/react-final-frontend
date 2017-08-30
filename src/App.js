import React, { Component } from 'react';
import './App.css';
import StickyNotesContainer from './components/StickyNotesContainer'

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

export default App;
