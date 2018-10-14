import * as types from "./actions/types";

const initialState = {
  user: {},
  login: false,
  message: ""
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.LOGIN}`:
      return {
        ...state,
        ...payload,
      };
    case `${types.LOGOUT}`:
      return {
        ...state,
        login: false
      };
    default:
      return state;
  }
}
