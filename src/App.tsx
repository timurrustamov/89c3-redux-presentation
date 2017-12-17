import * as React from 'react'
import { Provider } from 'react-redux'

import List from './components/List'
import BackgroundColor from './components/BackgroundColor'

import Root from './components/Root'
import Welcome from './components/Welcome'
import Evolution from './components/Evolution'
import ReduxImplementation from './components/ReduxImplementation'
import FeaturesAnimated from './components/FeaturesAnimated'
import Reducer from './components/Reducer'
import Action from './components/Action'

import store from './store'

import './App.css'
import { Col, Row } from 'react-flexbox-grid'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root defaultFontColor="#222220" defaultBackgroundColor="#ffffff">
          <Welcome />
          <Evolution />
          <h4>Pourquoi ce succès ?</h4>
          <FeaturesAnimated steps={1} />
          <h4>Euuh...</h4>
          <ReduxImplementation />
          <FeaturesAnimated steps={2} />
          <BackgroundColor fontColor="#ffffff" backgroundColor="#222220">
            <List
              title="Redux Contraints"
              points={[
                'State Unique',
                'Actions Décrivent les Changements',
                'Reducers Appliquent les Changements'
              ]}
            />
          </BackgroundColor>
          <BackgroundColor fontColor="#ffffff" backgroundColor="#222220">
            <List
              title="Debug Workflow"
              points={[
                'Log des Actions et du State',
                'Trouver le State Défaillant',
                'Verifier l\'Action',
                'Patcher le Reducer',
                'Ecrire un Test'
              ]}
            />
          </BackgroundColor>
          <BackgroundColor fontColor="#ffffff" backgroundColor="#222220">
            <List
              title="Redux Contract"
              points={[
                'Reducers',
                'Actions',
                'Selectors',
                'Middleware',
                'Enhancers'
              ]}
            />
          </BackgroundColor>
          <BackgroundColor fontColor="#ffffff" backgroundColor="#222220">
            <h4>Reducers</h4>
            <h5 style={{color: '#aaaaaa', fontWeight: 200}}>
              {`(state: State, action: Action) => State`}
            </h5>
          </BackgroundColor>
          <BackgroundColor fontColor="#ffffff" backgroundColor="#222220">
            <Reducer />
          </BackgroundColor>
          <BackgroundColor fontColor="#ffffff" backgroundColor="#222220">
            <h4>Actions</h4>
            <h5 style={{color: '#aaaaaa', fontWeight: 200}}>
              {`type Action<T> = {
                type: string,
                payload: T
              }`}
            </h5>
          </BackgroundColor>
          <BackgroundColor fontColor="#ffffff" backgroundColor="#222220">
            <Action />
          </BackgroundColor>
        </Root>
      </Provider>
    )
  }
}

export default App
