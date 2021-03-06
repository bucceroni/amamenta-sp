import * as types from "../actions/types";

const initialState = {
  states: [],
  cities: [],
  addUser: {},
  addInstitution: {},
  message: "",
  openSnackbar: false,
  registerUser: false,
  registerInstitution: false,
  editUser: false
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
    case `${types.POST_ADD_USER}`:
      return {
        ...state,
        ...payload
      };
    case `${types.PUT_USER}`:
      return {
        ...state,
        ...payload
      };
    case `${types.POST_ADD_INSTITUTION}`:
      return {
        ...state,
        ...payload
      };
    case `${types.CLOSE_SNACKBAR_REGISTER}`:
      return {
        ...state,
        openSnackbar: payload
      };
    default:
      return state;
  }
}
