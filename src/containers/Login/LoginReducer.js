import * as types from "./actions/types";

const initialState = {
  user: {},
  login: false,
  message: "",
  openSnackbar: false,
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.LOGIN}`:
      return {
        ...state,
        ...payload,
      };
    case `${types.CLOSE_SNACKBAR}`:
      return {
        ...state,
        openSnackbar: payload,
      };
    case `${types.LOGOUT}`:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
