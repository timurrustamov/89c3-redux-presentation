import * as React from 'react'
import * as Radium from 'radium'
import { Provider } from 'react-redux'
import { Col, Row } from 'react-flexbox-grid'

import store from './store'

import Root from './components/Root'
import Step from './components/Step'
import List from './components/List'
import Code from './components/Code';
import Welcome from './components/Welcome'
import Evolution from './components/Evolution'
import FeaturesAnimated from './components/FeaturesAnimated'
import Premonition from './components/Premonition'
import TreeView from './components/TreeView'
import State from './components/State'

import Impl from './misc/codes-and-implementations'

class App extends React.Component {
  render() {
    return (
      <Radium.StyleRoot>
        <Provider store={store}>
          <Root defaultFontColor="#1E1F21" defaultBackgroundColor="#fff">
            <Step steps={2}>
              <Welcome/>
            </Step>
            <Step steps={2} clickable>
              <Evolution/>
            </Step>
            <h4>Pourquoi ce succès ?</h4>
            <FeaturesAnimated/>
            <Code
              backgroundcolor="#1E1F21"
              highlightedLines={[null, [5, 6], [19], [21], [15], [9], [10], null]}>
              {Impl.Redux}
            </Code>
            <Step steps={2}><FeaturesAnimated/></Step>
            <Premonition/>
            <h4>Features & APIs</h4>
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <h4>Constraints & Contracts</h4>
            </Step>
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <List
                title="Redux Constraints"
                points={[
                  'State Unique et Immutable',
                  'Actions Décrivent les Changements',
                  'Reducers Appliquent les Changements'
                ]}/>
            </Step>
            <Code backgroundcolor="#1E1F21">
              {Impl.State}
            </Code>
            <Step backgroundcolor="#2a2f3a" fontcolor="#67a2be">
              <State />
            </Step>
            <Step>
              <TreeView/>
            </Step>
            <Step backgroundcolor="#1E1F21" fontcolor="#fff">
                <List
                  title="Tout est POJO"
                  points={[
                    'Persistance',
                    'Rendering universel',
                    'Time travel',
                    'Mutations optimistes',
                    'Network-enabled par defaut'
                  ]}
                />
            </Step>
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <List
                title="Redux Contracts"
                points={['Actions', 'Reducers', 'Selectors', 'Middleware']}/>
            </Step>
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <h4>Actions</h4>
              <h5
                style={{
                color: '#aaaaaa',
                fontWeight: 200
              }}>
                {`type Action<T> = {
                type: string,
                payload: T
              }`}
              </h5>
            </Step>
            <Code backgroundcolor="#1E1F21">
              {Impl.Action}
            </Code>
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <h4>Reducers</h4>
              <h5
                style={{
                color: '#aaaaaa',
                fontWeight: 200
              }}>
                {`(state: State, action: Action) => State`}
              </h5>
            </Step>
            <Code backgroundcolor="#1E1F21">
              {Impl.Reducer}
            </Code>
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <List
                title="Debug Workflow"
                points={[
                  'Log des Actions et du State',
                  'Trouver le State Défaillant',
                  'Verifier l\'Action',
                  'Patcher le Reducer',
                  'Ecrire un Test'
                ]}/>
            </Step>
          </Root>
        </Provider>
      </Radium.StyleRoot>
    )
  }
}

export default App
