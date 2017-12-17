export interface Action<T = {}> {
  type: string
  payload: T
}
export interface PureAction extends Action<undefined> {}

function createAction<T extends Action>(type: T['type']) {
  return (payload: T['payload']) => ({ type, payload })
}
function createPureAction<T extends PureAction>(type: T['type']) {
  return () => ({ type })
}

export interface PagesTotal extends Action {
  type: 'NAVIGATION_SET_TOTAL_PAGES'
  payload: {
    totalPages: number
  }
}
export const PagesTotal = createAction<PagesTotal>('NAVIGATION_SET_TOTAL_PAGES')

export interface StepsTotal extends Action {
  type: 'NAVIGATION_SET_TOTAL_STEPS'
  payload: {
    totalSteps: number
  }
}
export const StepsTotal = createAction<StepsTotal>('NAVIGATION_SET_TOTAL_STEPS')

export interface Next extends PureAction {
  type: 'NAVIGATION_NEXT'
}
export const Next = createPureAction<Next>('NAVIGATION_NEXT')

export interface Previous extends PureAction {
  type: 'NAVIGATION_PREVIOUS'
}
export const Previous = createPureAction<Previous>('NAVIGATION_PREVIOUS')

export interface SetBackground extends Action {
  type: 'COLOR_SCHEME_SET_BACKGROUND'
  payload: {
    backgroundColor: string
  }
}
export const SetBackground = createAction<SetBackground>(
  'COLOR_SCHEME_SET_BACKGROUND'
)

export interface SetFontColor extends Action {
  type: 'COLOR_SCHEME_SET_FONT_COLOR',
  payload: {
    fontColor: string
  }
}
export const SetFontColor = createAction<SetFontColor>('COLOR_SCHEME_SET_FONT_COLOR')

export type Any =
  | PagesTotal
  | StepsTotal
  | Next
  | Previous
  | SetBackground
  | SetFontColor