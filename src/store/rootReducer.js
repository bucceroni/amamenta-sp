import { combineReducers } from 'redux'

import home from '../containers/Home/HomeReducer'
import user from '../containers/User/UserReducer'

const rootReducer = combineReducers({
  home,
  user
})

export default rootReducer