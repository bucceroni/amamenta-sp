import * as types from "../actions/types";

const initialState = {
  institutions: [],
  roles: [],
  events: []
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_INSTITUTIONS}`:
      return {
        ...state,
        institutions: payload
      };
    case `${types.GET_ROLES}`:
      return {
        ...state,
        roles: payload
      };
    // case `${types.GET_EVENTS}`:
    // return {
    //   ...state,
    //   events: payload
    // };
    default:
      return state;
  }
}
