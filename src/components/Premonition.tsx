import * as React from 'react'
import * as Radium from 'radium'

const shadowKeyframes = Radium.keyframes({
  '0%': { transform: '0 0 0 #fff'},
  '100%': { boxShadow: '100px 100px 100px #a0a0a0'}
})

class Premonition extends React.Component {

  render() {
    return (
      <div style={{
          overflow: 'hidden',
          animation: 'x 25s linear forwards',
          animationName: shadowKeyframes,
          display: 'flex'
        }}>
        <img
          alt="[Here once was an image of Premonition]"
          src="images/premonition.jpg"
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    )
  }
}

export default Radium(Premonition)