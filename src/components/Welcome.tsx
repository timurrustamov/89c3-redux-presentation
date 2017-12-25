import * as React from 'react'
import * as Radium from 'radium'
import { connect } from 'react-redux'

import { State } from '../store/index'
import { ConnectedActions, mapDispatchToProps } from '../store/actions/connected-actions'

const labels = ['89C3', 'BPCE', 'Redux']

export type ComponentProps = ConnectedActions & {
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

  get styles() {
    return {
      image: this.props.step > 0 ? {
        width: '5em',
        height: 'auto',
        animation: 'spin 30s infinite ease-in-out',
        transition: 'width 0.5s ease, height 0.5s ease'
      } : {
        width: '3em',
        height: 'auto',
        transition: 'width 0.5s ease, height 0.5s ease'
      },
      text: {
        color: '#7453A9',
        fontSize: '1em',
        display: this.props.step > 0 ? 'none' : 'block'
      },
      signature: {
        fontSize: '0.5em',
        color: '#7453aa',
        position: 'absolute' as 'absolute',
        bottom: '1rem',
        right: '1rem'
      }
    }
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

    return (
      <div>
        <img
          style={this.styles.image}
          src="images/redux-logo.png"
          alt="[Here once was a redux logo]"
        />
        <h1 style={this.styles.text}>
          <span style={{ opacity: this.opacity }}>
            {labels[this.state.labelIndex]}
          </span>
        </h1>
        <span style={this.styles.signature}>
          Timur Rustamov
        </span>
      </div>
    )
  }
}

export default connect((state: State) => ({
  step: state.navigation.step
}), mapDispatchToProps)(Welcome)
