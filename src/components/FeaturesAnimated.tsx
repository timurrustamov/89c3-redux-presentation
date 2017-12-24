import * as React from 'react'
import { connect } from 'react-redux';
import { State } from '../store/index';

export type ComponentProps = {
  step: number
}

const FeaturesAnimated = (props: ComponentProps) => {

  let style: React.CSSProperties = {};
  if (props.step)
    style = { color: '#999999', textDecoration: 'line-through' }
  return (
    <h4 style={style}>
      Features & APIs ?
    </h4>
  )
}

export default connect((state: State) => ({ step: state.navigation.step }))(FeaturesAnimated)