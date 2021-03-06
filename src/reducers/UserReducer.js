import * as types from "../actions/types";

const initialState = {
  userInstitution: {},
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_USER_INSTITUTION}`:
      return {
        ...state,
        userInstitution: payload
      };
    case `${types.POST_USER_INSTITUTION}`:
      return {
        ...state,
        userInstitution: payload
      };
    case `${types.REMOVE_USER_INSTITUTION}`:
      return {
        ...state,
        userInstitution: payload
      };
    case `${types.LOGOUT_USER}`:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
