import * as types from "../actions/types";

const initialState = {
  institution: {},
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_INSTITUTION_USER}`:
      return {
        ...state,
        institution: payload
      };
    default:
      return state;
  }
}
