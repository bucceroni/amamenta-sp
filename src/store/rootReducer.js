import { combineReducers } from 'redux'

import home from '../containers/Home/HomeReducer'
import user from '../containers/User/UserReducer'
import institution from '../containers/Institution/InstitutionReducer'
import localize from '../containers/Localize/LocalizeReducer'
import login from '../containers/Login/LoginReducer'

const rootReducer = combineReducers({
  home,
  institution,
  localize,
  user,
  login
})

export default rootReducer