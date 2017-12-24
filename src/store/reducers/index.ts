import { combineReducers } from 'redux'
import * as Actions from '../actions'
import { State } from '../index'

function navigation(
  state: State['navigation'] = {
    page: 0,
    totalPages: 1,
    step: 0,
    totalSteps: 1
  },
  action: Actions.Any
): State['navigation'] {
  // tslint:disable-next-line:switch-default
  switch (action.type) {
    case 'NAVIGATION_NEXT':
      if (state.step + 1 >= state.totalSteps)
        return {
          ...state,
          step: 0,
          totalSteps: 0,
          page: state.page + 1 >= state.totalPages ? 0 : state.page + 1
        }
      return {
        ...state,
        step: state.step + 1
      }
    case 'NAVIGATION_PREVIOUS':

      if (state.step - 1 < 0)
        return {
          ...state,
          step: 0,
          totalSteps: 0,
          page: state.page - 1 < 0 ? 0 : state.page - 1
        }
      return {
        ...state,
        step: state.step - 1 < 0 ? 0 : state.step - 1
      }
    case 'NAVIGATION_SET_TOTAL_STEPS':
      return {
        ...state,
        totalSteps: action.payload.totalSteps > 0 ? action.payload.totalSteps : 1
      }
    case 'NAVIGATION_SET_TOTAL_PAGES':
      return {
        ...state,
        totalPages: action.payload.totalPages > 0 ? action.payload.totalPages : 1
      }
    default:
      return state
  }
}

function colorScheme(
  state: State['colorScheme'] = {
    backgroundColor: 'white',
    fontColor: '#444444'
  },
  action: Actions.Any
): State['colorScheme'] {
  // tslint:disable-next-line:switch-default
  switch (action.type) {
    case 'COLOR_SCHEME_SET_BACKGROUND':
      return {
        ...state,
        backgroundColor: action.payload.backgroundColor
      }
    case 'COLOR_SCHEME_SET_FONT_COLOR':
      return {
        ...state,
        fontColor: action.payload.fontColor
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  navigation,
  colorScheme
})
export default rootReducer
