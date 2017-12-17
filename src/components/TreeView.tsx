import * as React from 'react'
import Tree from 'react-d3-tree'
import { ReactElement } from 'react'

const dataOne = [
  {
    name: 'Root',
    children: [
      {
        name: 'User',
        children: [{ name: 'Name' }, { name: 'Phone' }]
      },
      {
        name: 'Todos',
        children: [
          {
            name: 'Todo One',
            children: [{ name: 'Text' }, { name: 'Date' }]
          },
          {
            name: 'Todo One',
            children: [{ name: 'Text' }, { name: 'Date' }]
          }
        ]
      }
    ]
  }
]

export default class TreeView extends React.PureComponent {
  private treeContainer: HTMLDivElement | null

  state = {
    translate: {
      x: 0,
      y: 0
    }
  }

  componentDidMount() {
    if (this.treeContainer) {
      const dimensions = this.treeContainer.getBoundingClientRect()
      this.setState({
        translate: {
          x: dimensions.width / 2,
          y: dimensions.height / 2
        }
      })
    }
  }

  render() {
    return (
      <div>
        <h4>State</h4>
        <div
          ref={tc => (this.treeContainer = tc)}
          style={{
            fontSize: '1rem',
            height: '45vh',
            border: '0.1rem #333333'
          }}
        >
          <Tree
            translate={this.state.translate}
            orientation="vertical"
            nodeSize={{ x: 40, y: 40 }}
            data={dataOne}
          />
        </div>
      </div>
    )
  }
}
