import * as React from 'react'
import { Row, Col } from 'react-flexbox-grid';

export type ComponentProps = {
  title: string
  points: string[]
}

export default (props: ComponentProps) => (
  <div>
    <h4 style={{ fontWeight: 700 }}>{props.title}</h4>
    <Row>
      <Col
        xs={12}
        sm={10}
        md={8}
        lg={8}
        xl={6}
        smOffset={1}
        mdOffset={2}
        lgOffset={2}
        xlOffset={3}
      >
        <ul style={{ fontSize: '1.3rem', fontWeight: 400 }}>
          {props.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </Col>
    </Row>
  </div>
)
