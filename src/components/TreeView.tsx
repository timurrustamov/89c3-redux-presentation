import * as React from 'react'
import * as Radium from 'radium'
import { connect } from 'react-redux'
import { ReactElement } from 'react'

import { State } from '../store'

export type ComponentProps = {
  step: number
}

const fadeIn = Radium.keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
})

@Radium
export class TreeView extends React.Component<ComponentProps> {

  private get styles() {
    return  {
      width: '100%',
      margin: 'auto',
      animation: 'x 0.5s ease 0.5s forwards',
      animationName: fadeIn,
      opacity: 0
    }
  }

  render() {

    return (
      <div>
        <h4>State</h4>
        <img
          alt="[Here was once a state tree image]"
          style={this.styles}
          src="images/tree-references.png" />
      </div>
    )
  }
}

export default Radium(connect((state: State) => ({
  step: state.navigation.step
}))(TreeView))