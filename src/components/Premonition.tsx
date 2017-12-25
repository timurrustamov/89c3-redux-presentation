import * as React from 'react'
import * as Radium from 'radium'

const zoomKeyframes = Radium.keyframes({
  '0%': { transform: 'scale(4)' },
  '70%': { transform: 'scale(2.3)' },
  '90%': { transform: 'scale(1.2)' },
  '100%': { transform: 'scale(1)' }
}, 'zoomOut')

const shadowKeyframes = Radium.keyframes({
  '0%': { transform: '0 0 0 #fff'},
  '100%': { boxShadow: '10px 10px 1000px #000000'}
})

class Premonition extends React.Component {

  render() {
    return (
      <div style={{
          overflow: 'hidden',
          animation: 'x 25s linear forwards',
          animationName: shadowKeyframes,
          display: 'flex'
          // boxShadow: '10px 10px 1000px #000000'
        }}>
        <img src="images/premonition.jpg" style={{
          animation: 'x 25s linear',
          animationName: zoomKeyframes,
          width: '100%',
          height: '100%'
        }} />
      </div>
    )
  }
}

export default Radium(Premonition)