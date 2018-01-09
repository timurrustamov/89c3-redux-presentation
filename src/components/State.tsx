import * as React from 'react'
import * as Radium from 'radium'

const fadeIn = Radium.keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
}, 'fadeIn')

export default Radium(() => (
  <div>
    <h4>State</h4>
    <img
      style={{
      animation: 'x 1s ease 0.5s forwards',
      animationName: fadeIn,
      opacity: 0
    }}
      width="100%"
      src="images/state-example.png"/>
  </div>
))