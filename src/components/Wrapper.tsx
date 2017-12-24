import * as React from 'react'
import * as Radium from 'radium'
import { Row, Col, Grid } from 'react-flexbox-grid'
import { connect } from 'react-redux';
import { ConnectedActions, mapDispatchToProps } from '../store/actions/connected-actions'

import Welcome from './Welcome'
import { State } from '../store/index';
import { ComponentProps as StepProps } from './Step';

export type ComponentProps = ConnectedActions & {
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
        const { backgroundcolor, steps, fontcolor } = child.props as {
          backgroundcolor?: string,
          steps?: number,
          fontcolor?: string
        };
        if (backgroundcolor)
          this.props.SetBackground({ backgroundColor: backgroundcolor })
        if (steps)
          this.props.StepsTotal({ totalSteps: steps })
        if (fontcolor)
          this.props.SetFontColor({ fontColor: fontcolor })
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

export default connect((state: State) => ({
  page: state.navigation.page,
  totalPages: state.navigation.totalPages
}), mapDispatchToProps)(Wrapper)