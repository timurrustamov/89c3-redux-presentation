import * as React from 'react'
import { Provider } from 'react-redux'

import Root from './components/Root'
import Welcome from './components/Welcome';
import Evolution from './components/Evolution';
import ReduxImplementation from './components/ReduxImplementation'

import store from './store'

import './App.css'
import { Col, Row } from 'react-flexbox-grid';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root defaultBackgroundColor="#ffffff">
          <Welcome />
          <Evolution />
          <h4>Pourquoi ce succès ?</h4>
          <h4>Features et APIs ?</h4>
          <h4>Euuh...</h4>
          <ReduxImplementation />
          <h4>Features et APIs ?</h4>
          <h4 style={{textDecoration: 'line-through', color: '#999999'}}>Features et APIs ?</h4>
          <div>
            <h4>Redux Constraints</h4>
            <Row>
              <Col xs={12} md={8} xl={4} mdOffset={2} xlOffset={4}>
                <ul style={{fontSize: '1.5rem'}}>
                  <li>Singe State Tree</li>
                  <li>Actions Describe Updates</li>
                  <li>Reducers Apply Updates</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Root>
      </Provider>
    )
  }
}

export default App
