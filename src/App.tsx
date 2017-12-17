import * as React from 'react'
import { Provider } from 'react-redux'

import Root from './components/Root'
import Welcome from './components/Welcome';
import Evolution from './components/Evolution';

import store from './store'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <Welcome />
          <Evolution />
        </Root>
      </Provider>
    )
  }
}

export default App
