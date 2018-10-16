import { combineReducers } from 'redux'

import user from '../containers/User/UserReducer'
import institution from '../containers/Institution/InstitutionReducer'
import localize from '../containers/Localize/LocalizeReducer'
import register from '../containers/Register/RegisterReducer'
import login from '../containers/Login/LoginReducer'

const rootReducer = combineReducers({
  institution,
  localize,
  user,
  register,
  login
})

export default rootReducer