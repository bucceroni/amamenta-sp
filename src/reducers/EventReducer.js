import * as types from "../actions/types";

const initialState = {
  addEvent: {},
  openSnackbar: false,
  message: ""
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.POST_ADD_EVENT}`:
      return {
        ...state,
        ...payload
      };
    case `${types.CLOSE_SNACKBAR_EVENT}`:
      return {
        ...state,
        openSnackbar: payload
      };
    default:
      return state;
  }
}
