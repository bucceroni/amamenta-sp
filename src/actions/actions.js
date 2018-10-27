import api from "./api";
import * as types from "./types";

export function getStates() {
  return async dispatch => {
    dispatch({
      type: types.GET_STATES,
      payload: await api.getStates()
    });
  };
}

export function getCities(state_id) {
  return async dispatch => {
    dispatch({
      type: types.GET_CITIES,
      payload: await api.getCities(state_id)
    });
  };
}

export function getInstitutions() {
  return async dispatch => {
    dispatch({
      type: types.GET_INSTITUTIONS,
      payload: await api.getInstitutions()
    });
  };
}
