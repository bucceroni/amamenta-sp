import * as types from "../actions/types";

const initialState = {
  institutionUsers: [],
  openSnackbar: false,
  message: ""
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_INSTITUTION_USERS}`:
      return {
        ...state,
        institutionUsers: payload
      };
    case `${types.APPROVE_INSTITUTION_USER}`:
      return {
        ...state,
        ...payload
      };
    case `${types.REMOVE_INSTITUTION_USER}`:
      return {
        ...state,
        ...payload
      };
    case `${types.CLOSE_SNACKBAR_INSTITUTION_USER}`:
      return {
        ...state,
        openSnackbar: payload
      };
    case `${types.REMOVE_USER_INSTITUTION}`:
      return {
        ...state,
        ...payload
      };
    case `${types.CLOSE_SNACKBAR_USER_INSTITUTION}`:
      return {
        ...state,
        openSnackbar: payload
      };
    case `${types.LOGOUT_INSTITUTION}`:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
