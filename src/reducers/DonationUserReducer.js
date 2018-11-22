import * as types from "../actions/types";

const initialState = {
  donationUser: [],
  unit: [],
  donationType: [],
  openSnackbar: false,
  message: ""
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_UNIT}`:
      return {
        ...state,
        unit: payload
      };
    case `${types.GET_DONATION_TYPE}`:
      return {
        ...state,
        donationType: payload
      };
    case `${types.GET_DONATION_USER}`:
      return {
        ...state,
        donationUser: payload
      };
    case `${types.ADD_DONATION_USER}`:
      return {
        ...state,
        ...payload
      };
    // case `${types.REMOVE_DONATION_USER}`:
    //   return {
    //     ...state,
    //     ...payload
    //   };
    case `${types.CLOSE_SNACKBAR_DONATION_USER}`:
      return {
        ...state,
        openSnackbar: payload
      };
    default:
      return state;
  }
}
