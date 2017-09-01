import React from 'react'
import Transition from 'react-transition-group/Transition'

const Notification = ({ in: inProp, notification }) =>
  <Transition in={inProp} timeout={duration}>
    {(transitionState) => {
      return(
        <span style={{
          ...defaultStyle,
          ...transitionStyles[transitionState]
        }}>
          {notification}
        </span>
      )

    }}
  </Transition>

export default Notification
