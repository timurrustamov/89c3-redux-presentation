import * as React from 'react'
import * as Radium from 'radium'
import { connect } from 'react-redux'
import { ReactElement } from 'react'

import { State } from '../store/index'

export type ComponentProps = {
  step: number
}

export class TreeView extends React.Component<ComponentProps> {

  private get styles() {
    return {
      imageOne: this.props.step === 0 ? {
        width: '100%',
        margin: 'auto',
        transition: 'all 0.5s ease'
      } : {
          display: 'none'
        },
      imageTwo: this.props.step === 1 ? {
        width: '100%',
        margin: 'auto',
        transition: 'all 0.5 ease'
      } : {
          display: 'none'
        }
    }
  }

  render() {

    return (
      <div>
        <h4>State</h4>
        <img
          alt="[Here was once a state tree image]"
          style={this.styles.imageOne}
          src="images/tree-references.png" />
        <img
          alt="[Here was once a second state tree image]"
          style={this.styles.imageTwo}
          src="images/tree-references-2.gif" />
      </div>
    )
  }
}

export default Radium(connect((state: State) => ({
  step: state.navigation.step
}))(TreeView))