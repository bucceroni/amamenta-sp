import { combineReducers } from 'redux'

import home from '../containers/Home/HomeReducer'
import user from '../containers/User/UserReducer'
import institution from '../containers/Institution/InstitutionReducer'
import localize from '../containers/Localize/LocalizeReducer'

const rootReducer = combineReducers({
  home,
  institution,
  localize,
  user
})

export default rootReducer