export const Redux = `

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

export const State = `
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

export const Action = `
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
export const Reducer = `
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

export default {
  Reducer,
  State,
  Action,
  Redux
}