import * as React from 'react'
import { CSSProperties, ReactChildren, ReactChild } from 'react'
import { Row, Col, Grid } from 'react-flexbox-grid'

import Welcome from './Welcome'
import { State } from '../store/index';
import { connect, Dispatch } from 'react-redux';
import * as Actions from '../store/actions';
import { bindActionCreators } from 'redux';
import { Action } from 'redux';
import { StepProps } from './Step';

export type ComponentProps = {
  [P in keyof typeof Actions]: (typeof Actions)[P]
} & {
  page: number,
  totalPages: number
}

const NotFound = <span>No slides found <br/>:(</span>

export class Wrapper extends React.Component<ComponentProps> {

  componentWillMount() {
    this.props.PagesTotal({
      totalPages: React.Children.count(this.props.children)
    })
  }

  componentWillReceiveProps(props: ComponentProps) {
    
    if (props.totalPages !== React.Children.count(this.props.children))
      this.props.PagesTotal({
        totalPages: React.Children.count(this.props.children)
      })
    if (this.props.children) {
      const child = this.props.children[props.page] || undefined
      if (child && React.isValidElement(child)) {
        const { backgroundColor, steps, fontColor } = child.props as StepProps;
        if (backgroundColor)
          this.props.SetBackground({ backgroundColor })
        if (steps)
          this.props.StepsTotal({ totalSteps: steps })
        if (fontColor)
          this.props.SetFontColor({ fontColor })
      }
    }
  }

  render() {
    
    const children = React.Children.toArray(this.props.children)  
    return (
      <Grid fluid>
        <Row className="grid-container" center="xs" middle="xs">
          <Col lg={8} md={10} sm={12} xs={12}>
            <Row center="xs" middle="xs">
              <Col xs={12}>
                {children[this.props.page] || NotFound}
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state: State) => ({
  page: state.navigation.page,
  totalPages: state.navigation.totalPages
})
const mapDispatchToProps = (dispatch: Dispatch<Action>) => (
  bindActionCreators(Actions, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)