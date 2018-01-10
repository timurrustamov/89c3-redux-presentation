import * as React from 'react'
import { connect } from 'react-redux'

import { Col, Row } from 'react-flexbox-grid'

import { State } from '../store'
import { ConnectedActions, mapDispatchToProps } from '../store/actions/connected-actions'

export type ComponentProps = ConnectedActions & { step: number } & {
  title: string,
  subtitle: string
}

const Chapter = (props: ComponentProps) => {

  props.SetBackground({ backgroundColor: '#1E1F21'})
  props.SetFontColor({ fontColor: '#fff'})

  return (
    <Row>
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={10}
        lgOffset={1}
      >
        <h4>{props.title}</h4>
        <h5 style={{ color: '#aaaaaa', fontWeight: 200 }}>
          {props.subtitle}
        </h5>
      </Col>
    </Row>
  )
}

export default connect((state: State) => ({ step:  state.navigation.step }), mapDispatchToProps)(Chapter)