import * as React from 'react'
import { CSSProperties, MouseEvent } from 'react'
import { connect, Dispatch } from 'react-redux'
import * as Swipeable from 'react-swipeable'

import * as Actions from '../../store/actions'

import Wrapper from '../Wrapper'
import Welcome from '../Welcome'
import { State } from '../../store/index'
import { Action } from 'redux'
import { bindActionCreators } from 'redux'

export type ComponentProps = {
  [P in keyof typeof Actions]: (typeof Actions)[P]
} & {
  backgroundColor: string
}

export type ComponentState = {
  keyPressed: boolean
}

class Root extends React.Component<ComponentProps, ComponentState> {
  state: ComponentState = {
    keyPressed: false
  }

  private onKeyDown = (e: KeyboardEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (this.state.keyPressed) return false
    if (e.keyCode === 39 || e.keyCode === 32) this.onNext()
    if (e.keyCode === 37) this.onPrevious()
    this.setState(state => ({ ...state, keyPressed: true }))
    return true
  }
  private onKeyUp = () => {
    this.setState(state => ({ ...state, keyPressed: false }))
  }
  private onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    this.onNext()
  }

  componentWillMount() {
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('keyup', this.onKeyUp)
  }

  onNext = () => {
    this.props.Next()
  }
  onPrevious = () => {
    this.props.Previous()
  }

  render() {
    return (
      <div style={{
          backgroundColor: this.props.backgroundColor,
          transition: 'background-color 0.5s ease'
        }}>
        <Swipeable
          onClick={this.onClick}
          onSwipedLeft={this.onNext}
          onSwipedRight={this.onPrevious}
        >
          <Wrapper>{this.props.children}</Wrapper>
        </Swipeable>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({
  ...state.colorScheme
})
const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Root)
