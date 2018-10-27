import { combineReducers } from 'redux'

import home from '../reducers/HomeReducer'
import register from '../reducers/HomeReducer'
import login from '../containers/Login/LoginReducer'

const rootReducer = combineReducers({
  home,
  register,
  login
})

export default rootReducer