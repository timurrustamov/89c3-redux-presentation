import * as React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../store/actions'

import { State } from '../store'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { tomorrowNight } from 'react-syntax-highlighter/dist/styles/hljs'
import { Col, Row } from 'react-flexbox-grid'
import { bindActionCreators } from 'redux'

export type ComponentProps = {
  [P in keyof typeof Actions]: (typeof Actions)[P]
} & {
  step: number
}

const code = `

  // Redux implementation goes here:

  let listeners: Function[] = [];
  let state = undefined 

  function dispatch<T>(action: T): T {
    state = reducer(state, action)
    listeners.slice().forEach(l => l())
    return action
  }

  function getState() {
    return state
  }

  function subscribe(listener: Function): Function {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }
`

export class ReduxImplementation extends React.Component<ComponentProps, {}> {
  private lineStyle = (index): React.CSSProperties => {
    const style = { opacity: 0.5 }
    switch (this.props.step) {
      case 1:
        if (![5, 6].find(i => i === index))
          return style
        break
      case 2:
        if (![19].find(i => i === index))
          return style
        break
      case 3:
        if (![21].find(i => i === index))
          return style;
        break;
      case 4:
        if (![15].find(i => i === index))
          return style
        break
      case 5:
        if (![9].find(i => i === index))
          return style
        break
      case 6:
        if (![10].find(i => i === index))
          return style
        break
      default:
        return {}
    }
    return {}
  }

  componentWillMount() {
    this.props.StepsTotal({ totalSteps: 8 })
  }

  render() {
    return (
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={10}
          xl={8}
          lgOffset={1}
          xlOffset={2}
        >
          <SyntaxHighlighter
            wrapLines
            language="typescript"
            lineStyle={this.lineStyle}
            style={tomorrowNight}
            customStyle={{
              maxWidth: '95vw',
              textOverflow: 'hidden',
              fontSize: '0.5em',
              textAlign: 'left'
            }}
          >
            {code}
          </SyntaxHighlighter>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state: State) => ({ step: state.navigation.step })
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ReduxImplementation)
