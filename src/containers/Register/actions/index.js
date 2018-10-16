import api from "../api/index";
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

export function closeSnackbar() {
  return async dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR,
      payload: false    });
  };
}















// export function login(email, password) {
//   return async dispatch => {
//     let user 
//     let login
//     let message
//     let openSnackbar

//     const res = await api.login(email, password)
//     if(res.data === ""){
//       user = {}
//       login = false
//       openSnackbar = true
//       message = "Usuário ou senha inválido"
//     }else{
//       user = res.data
//       login = true
//       openSnackbar = true
//       message = "Login realizado com sucesso"
//     }
//     dispatch({
//       type: types.LOGIN,
//       payload: {user, login, message, openSnackbar}
//     });
//   };
// }



