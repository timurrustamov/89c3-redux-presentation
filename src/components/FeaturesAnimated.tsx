import * as React from 'react'
import { connect } from 'react-redux';
import { State } from '../store/index';
import { StepProps } from './Step';

export type ComponentProps = {
  step: number
} & StepProps

const FeaturesAnimated = (props: ComponentProps) => {
  
  let style: React.CSSProperties = {
    transition: 'color 0.7s ease-in-out, textDecoration 1s ease'
  }
  if (props.step) {
    style = {
      ...style,
      textDecoration: 'line-through',
      color: '#999999'
    }
  }
  return (
    <h4 style={style}>
      Features et APIs ?
    </h4>
  )
}

export default connect((state: State) => ({ step: state.navigation.step }))(FeaturesAnimated)