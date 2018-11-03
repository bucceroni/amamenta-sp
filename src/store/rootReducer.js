import { combineReducers } from 'redux'

import home from '../reducers/HomeReducer'
import register from '../reducers/RegisterReducer'
import login from '../reducers/LoginReducer'

const rootReducer = combineReducers({
  home,
  register,
  login
})

export default rootReducer