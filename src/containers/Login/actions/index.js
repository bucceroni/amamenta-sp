import api from "../api/index";
import * as types from "./types";

export function login(email, password) {
  return async dispatch => {
    let user 
    let login
    let message

    const res = await api.login(email, password)
    if(res.data === ""){
      user = {}
      login = false
      message = "Usuário ou senha inválido"
    }else{
      user = res.data
      login = true
      message = "Login realizado com sucesso"
    }
    dispatch({
      type: types.LOGIN,
      payload: {user, login, message}
    });
  };
}

export function logout(id, token) {
  return async dispatch => {
    dispatch({
      type: types.LOGOUT,
      payload: await api.logout(id, token)
    });
  };
}
