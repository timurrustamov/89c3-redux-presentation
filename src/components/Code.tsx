import * as Actions from '../store/actions';
import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { bindActionCreators } from 'redux';
import { Col, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { State } from '../store';
import { Textfit } from 'react-textfit';
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles/hljs';
import Step from './Step';
import { ConnectedActions, mapDispatchToProps } from '../store/actions/connected-actions'

export type ComponentProps = ConnectedActions & { step: number } & {
  children: any
  backgroundcolor: string,
  highlightedLines?: (null | number[])[]
}

const CodeWrapper = (props: { children?: any }) => (
  <Textfit mode="multi" throttle={10}>
    {props.children}
  </Textfit>
)

export class Code extends React.Component<ComponentProps, {}> {

  private lineStyle = (index): React.CSSProperties => {

    const highlightedLines = this.props.highlightedLines || [];
    if (this.props.step < highlightedLines.length &&
      highlightedLines[this.props.step] && !(highlightedLines[this.props.step] || []).find(i => i === index))
      return { opacity: 0.5 };
    return {};
  }

  componentWillMount() {
    this.props.StepsTotal({ totalSteps: (this.props.highlightedLines || []).length || 1 })
  }

  render() {
    return (
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={10}
          lgOffset={1}
        >
          <SyntaxHighlighter
            wrapLines
            language="typescript"
            lineStyle={this.lineStyle}
            style={tomorrowNight}
            customStyle={{
              opacity: 0.01,
              textAlign: 'left',
              animation: 'fadein 0.5s ease 0.5s forwards'
            }}
            CodeTag={CodeWrapper}
          >
            {this.props.children}
          </SyntaxHighlighter>
        </Col>
      </Row>
    )
  }
}

export default connect((state: State) => ({ step: state.navigation.step }), mapDispatchToProps)(Code)
