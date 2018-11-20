import * as types from "../actions/types";

const initialState = {
  administratorUsers: [],
  openSnackbar: false,
  message: ""
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_ADMINISTRATOR_USERS}`:
      return {
        ...state,
        administratorUsers: payload
      };
    case `${types.APPROVE_ADMINISTRATOR_USER}`:
      return {
        ...state,
        ...payload
      };
    case `${types.REMOVE_ADMINISTRATOR_USER}`:
      return {
        ...state,
        ...payload
      };
    case `${types.CLOSE_SNACKBAR_ADMINISTRATOR_USER}`:
      return {
        ...state,
        openSnackbar: payload
      };
    default:
      return state;
  }
}
