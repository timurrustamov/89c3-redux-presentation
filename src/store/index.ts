import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

export class State {

  readonly navigation = {
    page: 0,
    totalPages: 0,
    step: 0,
    totalSteps: 1
  }
  readonly colorScheme = {
    backgroundColor: '#E7EAE3'
  }
}
const Store = createStore(
  rootReducer,
  { ...new State },
  composeWithDevTools(applyMiddleware(thunk), persistState())
)
export default Store