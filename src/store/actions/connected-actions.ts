import { Dispatch, bindActionCreators } from 'redux'
import * as Actions from './index'

export const mapDispatchToProps = (dispatch: Dispatch<Actions.Any>) => (
  bindActionCreators(Actions, dispatch)
)
export type ConnectedActions = {
  [P in keyof typeof Actions]: (typeof Actions)[P]
}

export default mapDispatchToProps