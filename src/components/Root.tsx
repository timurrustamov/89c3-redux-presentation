import * as React from 'react';
import * as Radium from 'radium'
import { connect } from 'react-redux';
import * as Swipeable from 'react-swipeable';
import Media from 'react-media'

import { State } from '../store/index';

import Welcome from './Welcome';
import Wrapper from './Wrapper';
import { ConnectedActions, mapDispatchToProps } from '../store/actions/connected-actions';

export type ComponentProps = ConnectedActions & State['colorScheme'] & {
  defaultBackgroundColor?: string,
  defaultFontColor?: string
}
export type ComponentState = {
  keyPressed: boolean
}

class Root extends React.Component<ComponentProps, ComponentState> {

  state: ComponentState = {
    keyPressed: false
  }

  private get styles() {
    return {
      wrapper: {
        height: '100%',
        backgroundColor: this.props.backgroundColor,
        color: this.props.fontColor,
        transition: 'all ease-in 0.5s'
      }
    }
  }

  private onNext = () => this.props.Next()
  private onPrevious = () => this.props.Previous()

  private onKeyDown = (e: KeyboardEvent) => {

    e.preventDefault()
    e.stopPropagation()
    if (this.state.keyPressed)
      return false
    if (e.keyCode === 39 || e.keyCode === 32)
      this.onNext()
    if (e.keyCode === 37)
      this.onPrevious()
    this.setState(state => ({ ...state, keyPressed: true }))
    return true
  }
  private onKeyUp = () => this.setState(state => ({ ...state, keyPressed: false }))
  private onClick = (e: React.MouseEvent<HTMLDivElement>) => {

    e.preventDefault()
    e.stopPropagation()
    this.onNext()
  }

  componentWillMount() {
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('keyup', this.onKeyUp)
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        <Media query="(max-width: 599px)">
          {match => (
            <Swipeable
              // tslint:disable-next-line:no-empty
              onClick={match && this.onClick || (() => {})}
              onSwipedLeft={(e, delta, flick) => {
                if (flick)
                  this.onNext()
              }}
              onSwipedRight={(e, delta, flick) => {
                if (flick)
                  this.onPrevious()
              }}
            >
              <Wrapper>
                {React.Children.map(this.props.children, (child) => {
                  if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                      backgroundcolor: this.props.defaultBackgroundColor,
                      fontcolor: this.props.defaultFontColor,
                      ...child.props
                    } as {})
                  }
                  return child
                })}
              </Wrapper>
            </Swipeable>
          )}
        </Media>
      </div >
    )
  }
}

export default Radium(connect((state: State) => ({
  ...state.colorScheme
}), mapDispatchToProps)(Root))
