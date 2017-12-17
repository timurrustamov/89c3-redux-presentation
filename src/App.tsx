import * as React from 'react'
import { Provider } from 'react-redux'

import Root from './components/Root'
import Welcome from './components/Welcome'
import Evolution from './components/Evolution'
import ReduxImplementation from './components/ReduxImplementation'
import FeaturesAnimated from './components/FeaturesAnimated'

import List from './components/List'
import BackgroundColor from './components/BackgroundColor'

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
                'Single State Tree',
                'Actions Describe Updates',
                'Reducers Apply Updates'
              ]}
            />
          </BackgroundColor>
        </Root>
      </Provider>
    )
  }
}

export default App
