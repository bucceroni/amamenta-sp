import * as types from "./actions/types";

const initialState = {
    institutions: [],
};

export default function reduce(state = initialState, action) {
    const { type, payload } = action

  switch (type) {
      case `${types.GET_INSTITUTIONS}`:
      return {
        ...state,
        institutions: payload
      };
    default:
      return state;
  }
}