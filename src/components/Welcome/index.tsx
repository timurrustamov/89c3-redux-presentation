import * as React from 'react'
import { Action } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { Component } from 'react'
import * as Actions from '../../store/actions'
import { bindActionCreators } from 'redux'
import { State } from '../../store/index'

const labels = ['89C3', 'BPCE', 'Redux']

export type ComponentProps = {
  [P in keyof typeof Actions]: (typeof Actions)[P]
} & {
  step: number
}

export type ComponentState = {
  opacity: number
  opacityDown: boolean
  labelIndex: number
}

export class Welcome extends React.Component<ComponentProps, ComponentState> {
  opacityInterval: number
  state: ComponentState = {
    opacity: 0,
    opacityDown: false,
    labelIndex: 0
  }

  get opacity() {
    return this.state.opacity > 1 ? 1 : this.state.opacity
  }

  componentWillReceiveProps(props: ComponentProps) {
    console.log(props)
  }

  componentWillMount() {
    this.props.StepsTotal({ totalSteps: 2 })
    this.props.SetBackground({ backgroundColor: '#E7EAE3' })
  }

  componentDidMount() {
    this.opacityInterval = window.setInterval(() => {
      this.setState(state => {
        const opacity = state.opacity - 0.005 * (state.opacityDown ? 1 : -1)
        const newState = { ...state, opacity }
        if (opacity < 0)
          return {
            ...newState,
            opacity: 0,
            opacityDown: false,
            labelIndex: (state.labelIndex + 1) % labels.length
          }
        if (opacity > 3)
          return {
            ...newState,
            opacity: 3,
            opacityDown: true
          }
        return newState
      })
    }, 5)
  }
  componentWillUnmount() {
    clearInterval(this.opacityInterval)
  }

  render() {

    let style = {
      width: '11rem',
      height: '10rem'
    };
    if (this.props.step > 0) {
      style = {
        width: '18rem',
        height: '16rem'
      }
    }
    return (
      <div>
        <img
          style={{
            ...style,
            transition: 'width 0.5s, height 0.5s ease',
            
          }}
          src="images/redux-logo.png"
          alt="[Here once was a redux logo]"
        />
        {this.props.step === 0 && (<h1
          style={{
            color: '#7453A9'
          }}
        >
          <span style={{ opacity: this.opacity }}>
            {labels[this.state.labelIndex]}
          </span>
        </h1>)}
        <span
          style={{
            fontSize: '0.7em',
            color: '#7453aa',
            position: 'absolute',
            bottom: '3vh',
            right: '3vw'
          }}
        >
          Timur Rustamov
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({
  step: state.navigation.step
})
const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators({ ...Actions }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
