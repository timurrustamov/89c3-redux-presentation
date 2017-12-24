import * as React from 'react'
import { Row, Col } from 'react-flexbox-grid';

export type ComponentProps = {
  title: string
  points: string[]
}

export default (props: ComponentProps) => (
  <div>
    <h4 style={{ fontWeight: 700, marginBottom: '1em' }}>{props.title}</h4>
    <Row>
      <Col
        xs={12}
        sm={10}
        smOffset={1}
      >
        {props.points.map((point, index) => (
          <h5 style={{marginTop: '0.5em', marginBottom: '0.5em', fontSize: '0.5em'}} key={index}>• {point}</h5>
        ))}
      </Col>
    </Row>
  </div>
)
