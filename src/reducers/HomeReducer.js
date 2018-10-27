import * as types from "../actions/types";

const initialState = {
  states: [],
  cities: [],
  institutions: []
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
    case `${types.GET_INSTITUTIONS}`:
      return {
        ...state,
        institutions: payload
      };
    default:
      return state;
  }
}
