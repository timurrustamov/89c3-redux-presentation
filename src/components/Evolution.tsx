import * as React from 'react'

import { AutoSizer } from 'react-virtualized'
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  CartesianAxis,
  BarChart,
  Bar
} from 'recharts'

import 'react-virtualized/styles.css'
import { Dimensions } from 'react-virtualized/dist/es/AutoSizer'
import { Col, Row } from 'react-flexbox-grid'
import { State } from '../store/index';
import { Dispatch, connect } from 'react-redux';
import { Action } from 'redux';

import { StepProps } from './Step'

import * as Actions from '../store/actions'
import { bindActionCreators } from 'redux';

interface ChartData {
  name: string
  value: number
}
const data2016: ChartData[] = [
  { name: 'Dec 16', value: 586172 },
  { name: 'Jan 17', value: 1594072 },
  { name: 'Feb 17', value: 1667023 },
  { name: 'Mar 17', value: 2008906 },
  { name: 'Apr 17', value: 1956369 },
  { name: 'May 17', value: 2441636 },
  { name: 'Jun 17', value: 2830761 },
  { name: 'Jul 17', value: 3024860 },
  { name: 'Aug 17', value: 3291353 },
  { name: 'Sep 17', value: 3442214 },
  { name: 'Oct 17', value: 4110156 },
  { name: 'Nov 17', value: 4303041 }
]
const dataAll: ChartData[] = [
  { name: '2014', value: 0 },
  { name: '2015', value: 695378 },
  { name: '2016', value: 10603208 },
  { name: '2017', value: 32933026 }
]

export type ComponentProps = {
  [P in keyof typeof Actions]: (typeof Actions)[P]
} & {
  step: number
} & StepProps

export interface ComponentState {
  height: number
  width: number
}

class Evolution extends React.Component<ComponentProps, ComponentState> {
  state: ComponentState = {
    height: 300,
    width: 400
  }

  componentWillMount() {
    this.props.StepsTotal({ totalSteps: 2})
  }

  setDimensions = (dimensions: Dimensions) => {
    this.setState(state => ({ ...state, ...dimensions }))
  }

  render() {

    const { step } = this.props;
    return (
      <Row>
        <Col xs={12}>
          <h4>
            Hype {step ? `!` : ''}
          </h4>
        </Col>
        <Col xs={12}>
          <div style={{ height: '40vh', width: '100%' }}>
            <AutoSizer>
              {({ height, width }) => (
                <BarChart
                  width={width || 400}
                  height={height || 300}
                  data={step ? data2016 : dataAll }
                >
                  <CartesianAxis strokeDasharray="3 3" />
                  <XAxis dataKey="name"/>
                  <YAxis tickFormatter={value => `${value / 1000000}M`} />
                  <Tooltip formatter={(value: number) => Intl.NumberFormat().format(value)}/>
                  <Bar fill={step ? '#82CA9D' : '#8884d8'} dataKey="value" />
                </BarChart>
              )}
            </AutoSizer>
          </div>
        </Col>
        <Col md={3} mdOffset={9} sm={4} smOffset={8} xs={6} xsOffset={6}>
          <span style={{ fontSize: '0.4em' }}>
            * NPM downloads
          </span>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state: State) => ({
  step: state.navigation.step
})
const mapDispatchToProps = (dispatch: Dispatch<Action>) => (
  bindActionCreators(Actions, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(Evolution)