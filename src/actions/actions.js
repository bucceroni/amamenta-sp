import api from "./api";
import * as types from "./types";

export function getInstitutions() {
  return async dispatch => {
    dispatch({
      type: types.GET_INSTITUTIONS,
      payload: await api.getInstitutions()
    });
  };
}

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

export function getRoles() {
  return async dispatch => {
    dispatch({
      type: types.GET_ROLES,
      payload: await api.getRoles()
    });
  };
}

// export function getEvents() {
//   return async dispatch => {
//     dispatch({
//       type: types.GET_EVENTS,
//       payload: await api.getEvents()
//     });
//   };
// }
