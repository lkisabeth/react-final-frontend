import React from 'react';

const StickyNote = ({stickynote}) =>
  <div className="stickynote">
    <h4>{stickynote.title}</h4>
    <p>{stickynote.body}</p>
  </div>

export default StickyNote
