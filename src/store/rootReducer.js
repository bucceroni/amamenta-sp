import { combineReducers } from 'redux'

import home from '../reducers/HomeReducer'
import register from '../reducers/RegisterReducer'
import login from '../reducers/LoginReducer'
import user from '../reducers/UserReducer'

const rootReducer = combineReducers({
  home,
  register,
  login, 
  user
})

export default rootReducer