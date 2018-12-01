import { combineReducers } from "redux";

import home from "../reducers/HomeReducer";
import register from "../reducers/RegisterReducer";
import login from "../reducers/LoginReducer";
import user from "../reducers/UserReducer";
import institution from "../reducers/InstitutionReducer";
import event from "../reducers/EventReducer";
import admin from "../reducers/AdministratorReducer";
import donationUser from "../reducers/DonationUserReducer";
import donationInstitution from "../reducers/DonationInstitutionReducer";

const rootReducer = combineReducers({
  home,
  register,
  login,
  user,
  institution,
  event,
  admin,
  donationUser,
  donationInstitution
});

export default rootReducer;
