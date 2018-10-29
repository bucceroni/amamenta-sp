import * as types from "../actions/types";

const initialState = {
  states: [],
  cities: [],
  addUser: {},
  message: "",
  openSnackbar: false
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_STATES}`:
      return {
        ...state,
        states: payload
      };
    case `${types.GET_CITIES}`:
      return {
        ...state,
        cities: payload
      };
    case `${types.ADD_USER}`:
      return {
        ...state,
        ...payload
      };
    // case `${types.CLOSE_SNACKBAR}`:
    //   return {
    //     ...state,
    //     openSnackbar: payload
    //   };
    default:
      return state;
  }
}
