import * as types from "./actions/types";

const initialState = {
    states: []
};

export default function reduce(state = initialState, action) {
    const { type, payload } = action

  switch (type) {
      case `${types.GET_STATES}`:
      return {
        ...state,
        states: payload
      };
    default:
      return state;
  }
}