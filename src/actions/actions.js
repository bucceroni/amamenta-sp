import api from "./api";
import * as types from "./types";

export function getInstitutionsType() {
  return async dispatch => {
    dispatch({
      type: types.GET_INSTITUTIONS_TYPE,
      payload: await api.getInstitutionsType()
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

export function getInstitutions() {
  return async dispatch => {
    dispatch({
      type: types.GET_INSTITUTIONS,
      payload: await api.getInstitutions()
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

export function getEvents() {
  return async dispatch => {
    dispatch({
      type: types.GET_EVENTS,
      payload: await api.getEvents()
    });
  };
}

export function login(email, password) {
  return async dispatch => {
    let user;
    let login;
    let message;
    let openSnackbar;
    const res = await api.login(email, password);
    if (res === undefined) {
      user = {};
      login = false;
      openSnackbar = true;
      message = "Usuário ou senha inválido";
    } else {
      user = res;
      login = true;
      openSnackbar = true;
      message = "Login realizado com sucesso";
    }
    dispatch({
      type: types.LOGIN,
      payload: { user, login, message, openSnackbar }
    });
  };
}

export function closeSnackbar() {
  return async dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR,
      payload: false
    });
  };
}

export function logout(token) {
  return async dispatch => {
    let user;
    let login;
    let message;
    let openSnackbar;
    const res = await api.logout(token);
    if (res === undefined) {
      user = {};
      login = false;
      openSnackbar = true;
      message = "Logout realizado com sucesso";
    }
    dispatch({
      type: types.LOGOUT,
      payload: { user, login, message, openSnackbar }
    });
  };
}

export function postAddUser(
  name,
  nickname,
  birth_date,
  gender,
  city_id,
  street,
  number,
  complement,
  district,
  postal_code,
  phone,
  role_id,
  email,
  password
) {
  return async dispatch => {
    let addUser;
    let registerUser;
    let message;
    let openSnackbar;
    const res = await await api.postAddUser(
      name,
      nickname,
      birth_date,
      gender,
      city_id,
      street,
      number,
      complement,
      district,
      postal_code,
      phone,
      role_id,
      email,
      password
    );
    if (res === undefined) {
      addUser = {};
      registerUser = false;
      openSnackbar = true;
      message = "Cadastro inválido";
    } else if (res.message === "Email not valide") {
      addUser = {};
      registerUser = false;
      openSnackbar = true;
      message = "Email inválido";
    } else if (res.message === "Email exist") {
      addUser = {};
      registerUser = false;
      openSnackbar = true;
      message = "Cadastro inválido, utilize outro email";
    } else {
      addUser = res;
      registerUser = true;
      openSnackbar = true;
      message = "Cadastro realizado com sucesso";
    }
    dispatch({
      type: types.POST_ADD_USER,
      payload: { addUser, registerUser, message, openSnackbar }
    });
  };
}

export function postAddInstitution(
  city_id,
  email,
  name,
  street,
  number,
  complement,
  district,
  postal_code,
  phone,
  site,
  type
) {
  return async dispatch => {
    let addInstitution;
    let registerInstitution;
    let message;
    let openSnackbar;
    const res = await await api.postAddInstitution(
      city_id,
      email,
      name,
      street,
      number,
      complement,
      district,
      postal_code,
      phone,
      site,
      type
    );
    if (res === undefined) {
      addInstitution = {};
      registerInstitution = false;
      openSnackbar = true;
      message = "Cadastro inválido";
    } else if (res.message === "Email not valide") {
      addInstitution = {};
      registerInstitution = false;
      openSnackbar = true;
      message = "Email inválido";
    } else if (res.message === "Email exist") {
      addInstitution = {};
      registerInstitution = false;
      openSnackbar = true;
      message = "Cadastro inválido, utilize outro email";
    } else {
      addInstitution = res;
      registerInstitution = true;
      openSnackbar = true;
      message = "Cadastro realizado com sucesso";
    }
    dispatch({
      type: types.POST_ADD_INSTITUTION,
      payload: { addInstitution, registerInstitution, message, openSnackbar }
    });
  };
}

export function closeSnackbarRegister() {
  return async dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR_REGISTER,
      payload: false
    });
  };
}

export function getInstitutionUser(user_id) {
  return async dispatch => {
    dispatch({
      type: types.GET_INSTITUTION_USER,
      payload: await api.getInstitutionUser(user_id)
    });
  };
}