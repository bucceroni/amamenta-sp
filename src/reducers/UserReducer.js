import * as types from "../actions/types";

const initialState = {
  userInstitution: {},
  reportInstitution: {}
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_INSTITUTION_USER}`:
      return {
        ...state,
        userInstitution: payload
      };
    case `${types.POST_INSTITUTION_USER}`:
      return {
        ...state,
        reportInstitution: payload
      };
    case `${types.DELETE_INSTITUTION_USER}`:
      return {
        ...state,
        reportInstitution: payload
      };
    default:
      return state;
  }
}
