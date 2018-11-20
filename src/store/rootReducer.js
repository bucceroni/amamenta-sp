import { combineReducers } from "redux";

import home from "../reducers/HomeReducer";
import register from "../reducers/RegisterReducer";
import login from "../reducers/LoginReducer";
import user from "../reducers/UserReducer";
import institution from "../reducers/InstitutionReducer";
import event from "../reducers/EventReducer";

const rootReducer = combineReducers({
  home,
  register,
  login,
  user,
  institution,
  event
});

export default rootReducer;
