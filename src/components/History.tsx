import * as React from 'react'
import { connect } from 'react-redux'
import * as Radium from 'radium'

import { Col, Row, Grid } from 'react-flexbox-grid'

import { State } from '../store'
import { ConnectedActions, mapDispatchToProps } from '../store/actions/connected-actions'

export type ComponentProps = ConnectedActions & { step: number }

const styles = {
  medium: {
    '@media (min-width: 577px)': {
      display: 'none'
    },
    maxWidth: '70vw'
  },
  small: {
    '@media (max-width: 578px)': {
      display: 'none'
    },
    width: '100%'
  }
}

const History = Radium((props: ComponentProps) => (

  <Row>
    <Col
      xs={12}
      sm={12}
      md={12}
      lg={10}
      lgOffset={1}
    >
      <h4 style={{ color: '#7453A9'}}>Redux</h4>
      <Row center="xs" middle="xs">
        {props.step === 0 &&
        <Col>
          <Row center="xs">
            <Col>
              <img
                style={{ width: '25vw', borderRadius: '0.5em' }}
                src="https://avatars1.githubusercontent.com/u/810438?s=460&v=4"
              />
            </Col>
          </Row>
          <div style={{ fontSize: '0.5em' }}>Twitter: <small style={{ color: '#7453A9' }}>@dan_abramov</small></div>
          <div style={{ fontSize: '0.5em' }}>Github: <small style={{ color: '#7453A9' }}>@gaearon</small></div>
        </Col>}
        {props.step === 1 &&
        <Row>
          <Col xs={0} sm={0}>
            <img style={styles.small} src="images/redux-first-commit.png" />
          </Col>
          <Col xs={12} sm={12}>
            <img style={styles.medium} src="images/redux-first-commit-xs.png" />
          </Col>
        </Row>
        }
        {props.step > 1 &&
        <Col xs={6} lg={12}>
          <img src="images/flux.png" style={{ maxWidth: '100%' }} />
        </Col>}
        {props.step > 2 &&
        <Col xs={6} lg={12}>
          <img src="images/elm.png" style={{ maxWidth: '100%' }} />
        </Col>}
        {props.step > 3 &&
        <Col xs={6} lg={12}>
          <img src="images/react.svg" style={{ maxWidth: '100%' }} />
        </Col>}
      </Row>
    </Col>
  </Row>
))

export default connect((state: State) => ({ step:  state.navigation.step }), mapDispatchToProps)(History)
