import * as types from "../actions/types";

const initialState = {
  donationUser: [],
  openSnackbar: false,
  message: ""
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.ADD_DONATION_USER}`:
      return {
        ...state,
        donationUser: payload
      };
    case `${types.REMOVE_DONATION_USER}`:
      return {
        ...state,
        ...payload
      };
    case `${types.CLOSE_SNACKBAR_DONATION_USER}`:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
}
