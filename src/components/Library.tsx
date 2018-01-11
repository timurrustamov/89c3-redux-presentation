import * as React from 'react'
import { connect } from 'react-redux'

import * as Radium from 'radium'

import { Col, Row } from 'react-flexbox-grid'

import { State } from '../store'
import { ConnectedActions, mapDispatchToProps } from '../store/actions/connected-actions'

const styles = {
  icon: {
    '@media (min-width: 578px)': {
      fontSize: '125px'
    },
    '@media (max-width: 577px)': {
      fontSize: '2em'
    }
  }
}

export type ComponentProps = {
  icon: string,
  name: string,
  iconStyle?: React.CSSProperties
}

export default Radium((props: ComponentProps) => (

  <Row>
    <Col
      xs={12}
      sm={12}
      md={12}
      lg={10}
      lgOffset={1}
    >
      <div
        style={{
          textAlign: 'center',
          paddingBottom: '0.5em',
          ...(props.iconStyle || {}),
          ...styles.icon
        }}>
        {props.icon}
      </div>
      <div>
        <div style={{ textAlign: 'center', fontSize: '1em', fontWeight: 600, color: '#bbbbbb' }}>
          @{props.name.split('/')[0]}/
        </div>
        <div style={{ textAlign: 'center', fontSize: '1em', fontWeight: 600, color: '#1E1F21' }}>
          {props.name.split('/')[1]}
        </div>
      </div>
    </Col>
  </Row>
))
