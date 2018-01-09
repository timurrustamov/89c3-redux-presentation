import * as React from 'react'
import { connect } from 'react-redux';
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
import { AutoSizer } from 'react-virtualized'
import { Dimensions } from 'react-virtualized/dist/es/AutoSizer'
import { Col, Row } from 'react-flexbox-grid'

import { State } from '../store';
import { ConnectedActions, mapDispatchToProps } from '../store/actions/connected-actions'

import 'react-virtualized/styles.css'

interface ChartData {
  name: string
  downloads: number
}
const data2016: ChartData[] = [
  { name: 'Dec 16', downloads: 586172 },
  { name: 'Jan 17', downloads: 1594072 },
  { name: 'Feb 17', downloads: 1667023 },
  { name: 'Mar 17', downloads: 2008906 },
  { name: 'Apr 17', downloads: 1956369 },
  { name: 'May 17', downloads: 2441636 },
  { name: 'Jun 17', downloads: 2830761 },
  { name: 'Jul 17', downloads: 3024860 },
  { name: 'Aug 17', downloads: 3291353 },
  { name: 'Sep 17', downloads: 3442214 },
  { name: 'Oct 17', downloads: 4110156 },
  { name: 'Nov 17', downloads: 4303041 }
]
const dataAll: ChartData[] = [
  { name: '2014', downloads: 0 },
  { name: '2015', downloads: 695378 },
  { name: '2016', downloads: 10603208 },
  { name: '2017', downloads: 32933026 }
]

export type ComponentProps = ConnectedActions & {
  step: number
}

export interface ComponentState {
  height: number
  width: number
}

class Evolution extends React.Component<ComponentProps, ComponentState> {

  state: ComponentState = {
    height: 300,
    width: 400
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
                  <YAxis tickFormatter={downloads => `${downloads / 1000000}M`} />
                  <Tooltip formatter={(downloads: number) => Intl.NumberFormat().format(downloads)}/>
                  <Bar fill={step ? '#82CA9D' : '#8884d8'} dataKey="downloads" />
                </BarChart>
              )}
            </AutoSizer>
          </div>
        </Col>
        <Col sm={4} smOffset={8} xs={6} xsOffset={6}>
          <span style={{ fontSize: '1.2rem' }}>
            * NPM downloads
          </span>
        </Col>
      </Row>
    )
  }
}

export default connect((state: State) => ({
  step: state.navigation.step
}), mapDispatchToProps)(Evolution)