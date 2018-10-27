import * as types from "../actions/types";

const initialState = {
  addUser: {},
  message: "",
  openSnackbar: false,
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.ADD_USER}`:
      return {
        ...state,
        ...payload,
      };
    case `${types.CLOSE_SNACKBAR}`:
      return {
        ...state,
        openSnackbar: payload,
      };
    default:
      return state;
  }
}
