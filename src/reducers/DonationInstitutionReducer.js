import * as types from "../actions/types";

const initialState = {
  donationInstitution: [],
  stockInstitution: {},
  openSnackbar: false,
  message: ""
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_DONATION_INSTITUTION}`:
      return {
        ...state,
        donationInstitution: payload
      };
    case `${types.POST_DONATION_WAIT}`:
      return {
        ...state,
        ...payload
      };
    case `${types.POST_DONATION_WITHDRAW}`:
      return {
        ...state,
        ...payload
      };
    case `${types.CLOSE_SNACKBAR_DONATION_INSTITUTION}`:
      return {
        ...state,
        openSnackbar: payload
      };
    case `${types.GET_STOCK_INSTITUTION}`:
      return {
        ...state,
        stockInstitution: payload
      };
    case `${types.POST_STOCK_INSTITUTION}`:
      return {
        ...state,
        stockInstitution: payload
      };
    default:
      return state;
  }
}
