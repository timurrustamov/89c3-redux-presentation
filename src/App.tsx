import * as React from 'react'
import { StyleRoot } from 'radium'
import { Provider } from 'react-redux'

import List from './components/List'
import Step from './components/Step'

import Root from './components/Root'
import Welcome from './components/Welcome'
import Evolution from './components/Evolution'
import FeaturesAnimated from './components/FeaturesAnimated'
import TreeView from './components/TreeView'
import Premonition from './components/Premonition'

import store from './store'

import './App.css'
import { Col, Row } from 'react-flexbox-grid'
import Code from './components/Code';

const ReduxCode = `

// Redux implementation goes here:

let listeners: Function[] = []
let state = undefined

function dispatch<T>(action: T): T {
  state = reducer(state, action)
  listeners.slice().forEach(l => l())
  return action
}

function getState() {
  return state
}

function subscribe(listener: Function): Function {
  listeners.push(listener)
  return () => {
    listeners = listeners.filter(l => l !== listener)
  }
}
`

const StateCode = `
// this state is extracted from [EER] 🛡 project

export class State {

  readonly user: Readonly<{
    firstname?: string,
    lastname?: string,
    nationality: string
    ...
  }> = {
    nationality: 'FRANCAISE',
    ...
  }
  readonly loading = {
    state: false,
    pendingRequests: 0
  }
  readonly isAuthenticated = false
  ...
}
`

const ActionCode = `
// create action to set user's firstname

export interface SetFirstname {
  type: 'USER_SET_FIRSTNAME',
  payload: string
}
export const SetFirstname =
  (payload: string): SetFirstname => ({
    type: 'USER_SET_FIRSTNAME',
    payload
  })

// SetFirstname('Jean-Jacques') <==> {
//   type: 'USER_SET_FIRSTNAME,
//   payload: 'Jean-Jacques'
// }
//
`
const ReducerCode = `
// here goes todo reducer implementation
// sorry for javascript! 🙈

import { combineReducers } from 'redux'

const userReducer = (user, action) => {
  switch (action.type) {
    case 'USER_SET_FIRSTNAME':
      return {
        ...user,
        firstname: action.payload
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer
})
`

class App extends React.Component {
  render() {
    return (
      <StyleRoot>
        <Provider store={store}>
          <Root defaultFontColor="#1E1F21" defaultBackgroundColor="#ffffff">
            <Step steps={2}>
              <Welcome />
            </Step>
            <Step steps={2} clickable>
              <Evolution />
            </Step>
            <h4>Pourquoi ce succès ?</h4>
            <FeaturesAnimated />
            <Code backgroundcolor="#1E1F21" highlightedLines={[
              null, [5, 6], [19], [21], [15], [9], [10], null
            ]}>
              {ReduxCode}
            </Code>
            <Step steps={2}>
              <FeaturesAnimated />
            </Step>
            <Premonition />
            <h4>Features & APIs</h4>
            <Step fontcolor="#ffffff" backgroundcolor="#1E1F21">
              <h4>Constraints & Contracts</h4>
            </Step>
            <Step fontcolor="#ffffff" backgroundcolor="#1E1F21">
              <List
                title="Redux Constraints"
                points={[
                  'State Unique et Immutable',
                  'Actions Décrivent les Changements',
                  'Reducers Appliquent les Changements'
                ]}
              />
            </Step>
            <Code backgroundcolor="#1E1F21">
              {StateCode}
            </Code>
            <Step backgroundcolor="#2a2f3a" fontcolor="#67a2be">
                <h4>State</h4>
                <img width="100%" src="images/state-example.png" />
            </Step>
            <Step steps={2}>
              <TreeView />
            </Step>
            <Step fontcolor="#ffffff" backgroundcolor="#1E1F21">
              <List
                title="Redux Contracts"
                points={[
                  'Actions',
                  'Reducers',
                  'Selectors',
                  'Middleware',
                  'Enhancers'
                ]}
              />
            </Step>
            <Step fontcolor="#ffffff" backgroundcolor="#1E1F21">
              <h4>Actions</h4>
              <h5 style={{ color: '#aaaaaa', fontWeight: 200 }}>
                {`type Action<T> = {
                type: string,
                payload: T
              }`}
              </h5>
            </Step>
            <Code backgroundcolor="#1E1F21" highlightedLines={[]}>
              {ActionCode}
            </Code>
            <Step fontcolor="#ffffff" backgroundcolor="#1E1F21">
              <h4>Reducers</h4>
              <h5 style={{ color: '#aaaaaa', fontWeight: 200 }}>
                {`(state: State, action: Action) => State`}
              </h5>
            </Step>
            <Code backgroundcolor="#1E1F21" highlightedLines={[]}>
              {ReducerCode}
            </Code>
            <Step fontcolor="#ffffff" backgroundcolor="#1E1F21">
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
            </Step>
          </Root>
        </Provider>
      </StyleRoot>
    )
  }
}

export default App
