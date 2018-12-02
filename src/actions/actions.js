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
    } else if (res.message === "email ou password invalid") {
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
    let userInstitution;
    let institutionUsers;
    const res = await api.logout(token);
    if (res === 200) {
      user = {};
      userInstitution = {};
      institutionUsers = {};
      login = false;
      message = "Logout realizado com sucesso";
      openSnackbar = true;
    }
    dispatch({
      type: types.LOGOUT,
      payload: { user, login, message, openSnackbar }
    });
    dispatch({
      type: types.LOGOUT_USER,
      payload: { userInstitution }
    });
    dispatch({
      type: types.LOGOUT_INSTITUTION,
      payload: { institutionUsers }
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

export function putEditUser(
  user_id,
  name,
  nickname,
  birth_date,
  gender,
  // city_id,
  street,
  number,
  complement,
  district,
  postal_code,
  phone,
  role_id
  // email,
  // password
) {
  return async (dispatch, getState) => {
    let user;
    let message;
    let openSnackbar;
    const res = await api.putEditUser(
      user_id,
      name,
      nickname,
      birth_date,
      gender,
      // city_id,
      street,
      number,
      complement,
      district,
      postal_code,
      phone,
      role_id
      // email,
      // password
    );
    let userFailed = getState().login.user;
    if (typeof res === "string") {
      user = userFailed;
      openSnackbar = true;
      message = "Cadastro inválido";
    } else {
      user = res;
      openSnackbar = true;
      message = "Cadastro editado com sucesso";
    }
    dispatch({
      type: types.PUT_USER,
      payload: { message, openSnackbar, user }
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
    const res = await api.postAddInstitution(
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
    if (typeof res === "string") {
      addInstitution = {};
      registerInstitution = false;
      openSnackbar = true;
      message = "Cadastro inválido";
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

//Event
export function postAddEvent(description, site, title, date_initial, date_end) {
  return async (dispatch, getState) => {
    let addEvent;
    let message;
    let openSnackbar;
    let institution_id = getState().user.userInstitution.institution_id;
    const res = await api.postAddEvent(
      institution_id,
      description,
      site,
      title,
      date_initial,
      date_end
    );
    if (typeof res === "string") {
      addEvent = {};
      openSnackbar = true;
      message = "Cadastro inválido";
    } else {
      addEvent = res;
      openSnackbar = true;
      message = "Cadastro realizado com sucesso";
    }
    dispatch({
      type: types.POST_ADD_EVENT,
      payload: { addEvent, message, openSnackbar }
    });
  };
}

export function closeSnackbarEvent() {
  return async dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR_EVENT,
      payload: false
    });
  };
}

// User Institutiton
export function getUserInstitution(user_id) {
  return async dispatch => {
    dispatch({
      type: types.GET_USER_INSTITUTION,
      payload: await api.getUserInstitution(user_id)
    });
  };
}

export function postUserInstitution(user_id, institution_id) {
  return async dispatch => {
    dispatch({
      type: types.POST_USER_INSTITUTION,
      payload: await api.postUserInstitution(user_id, institution_id)
    });
  };
}

export function removeUserInstitution(user_id) {
  return async (dispatch, getState) => {
    let institution_id = getState().user.userInstitution.institution_id;
    let openSnackbar;
    let message;
    const res = await api.removeUserInstitution(user_id, institution_id);

    if (typeof res === "string") {
      openSnackbar = true;
      message = "Instituição não pode ser excluído";
    } else {
      openSnackbar = true;
      message = "Instituição excluída com sucesso";
    }
    dispatch({
      type: types.REMOVE_USER_INSTITUTION,
      payload: { message, openSnackbar }
    });
  };
}

export function closeSnackbarUserInstitution() {
  return async dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR_USER_INSTITUTION,
      payload: false
    });
  };
}

// Institution Users
export function getInstitutionUsers() {
  return async (dispatch, getState) => {
    let institution_id = getState().user.userInstitution.institution_id;
    dispatch({
      type: types.GET_INSTITUTION_USERS,
      payload: await api.getInstitutionUsers(institution_id)
    });
  };
}

export function approveInstitutionUser(user_id) {
  return async (dispatch, getState) => {
    let institution_id = getState().user.userInstitution.institution_id;
    let openSnackbar;
    let message;
    const res = await api.approveInstitutionUser(user_id, institution_id);

    if (typeof res === "string") {
      openSnackbar = true;
      message = "Usuário não pode ser aprovado";
    } else {
      openSnackbar = true;
      message = "Usuário aprovado com sucesso";
    }
    dispatch({
      type: types.APPROVE_INSTITUTION_USER,
      payload: { message, openSnackbar }
    });
  };
}

export function removeInstitutionUser(user_id) {
  return async (dispatch, getState) => {
    let institution_id = getState().user.userInstitution.institution_id;
    let openSnackbar;
    let message;
    const res = await api.removeInstitutionUser(user_id, institution_id);

    if (typeof res === "string") {
      openSnackbar = true;
      message = "Usuário não pode ser excluído";
    } else {
      openSnackbar = true;
      message = "Usuário excluído com sucesso";
    }
    dispatch({
      type: types.REMOVE_INSTITUTION_USER,
      payload: { message, openSnackbar }
    });
  };
}

export function closeSnackbarInstitutionUser() {
  return async dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR_INSTITUTION_USER,
      payload: false
    });
  };
}

// Administrator
export function getAdministratorUsers() {
  return async dispatch => {
    dispatch({
      type: types.GET_ADMINISTRATOR_USERS,
      payload: await api.getAdministratorUsers()
    });
  };
}

export function approveAdministratorUsers(user_id, institution_id) {
  return async dispatch => {
    let openSnackbar;
    let message;
    const res = await api.approveInstitutionUser(user_id, institution_id);

    if (typeof res === "string") {
      openSnackbar = true;
      message = "Usuário não pode ser aprovado";
    } else {
      openSnackbar = true;
      message = "Usuário aprovado com sucesso";
    }
    dispatch({
      type: types.APPROVE_ADMINISTRATOR_USER,
      payload: { message, openSnackbar }
    });
  };
}

export function removeAdministratorUsers(user_id, institution_id) {
  return async dispatch => {
    let openSnackbar;
    let message;
    const res = await api.removeInstitutionUser(user_id, institution_id);

    if (typeof res === "string") {
      openSnackbar = true;
      message = "Usuário não pode ser excluído";
    } else {
      openSnackbar = true;
      message = "Usuário excluído com sucesso";
    }
    dispatch({
      type: types.REMOVE_ADMINISTRATOR_USER,
      payload: { message, openSnackbar }
    });
  };
}

export function closeSnackbarAdministratorUsers() {
  return async dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR_ADMINISTRATOR_USER,
      payload: false
    });
  };
}

// Donation unit - type
export function getUnit() {
  return async dispatch => {
    dispatch({
      type: types.GET_UNIT,
      payload: await api.getUnit()
    });
  };
}

export function getDonationType() {
  return async dispatch => {
    dispatch({
      type: types.GET_DONATION_TYPE,
      payload: await api.getDonationType()
    });
  };
}

// Donation Users
export function getDonationUser(user_id) {
  return async dispatch => {
    dispatch({
      type: types.GET_DONATION_USER,
      payload: await api.getDonationUser(user_id)
    });
  };
}

export function addDonationUser(user_id, amount_entry) {
  return async (dispatch, getState) => {
    let unit_id = 1;
    let doantion_type_id = 0;
    let donation_type_details_id = 1;
    let date_entry = `${new Date().toLocaleDateString(
      "pt-BR"
    )} ${new Date().getHours()}:${new Date().getMinutes()}`;

    let openSnackbar;
    let message;
    let donationUser = getState().donationUser.donationUser;

    const res = await api.addDonationUser(
      user_id,
      amount_entry,
      unit_id,
      doantion_type_id,
      donation_type_details_id,
      date_entry
    );

    if (typeof res === "string") {
      openSnackbar = true;
      message = "Doação inválida";
    } else {
      donationUser.push(res);
      openSnackbar = true;
      message = "Doação cadastrada com sucesso";
    }

    dispatch({
      type: types.ADD_DONATION_USER,
      payload: { openSnackbar, message, donationUser }
    });
  };
}

export function closeSnackbarDonationUser() {
  return async dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR_DONATION_USER,
      payload: false
    });
  };
}

//Donation Institution
export function getDonationInstitution(institution_id) {
  return async dispatch => {
    dispatch({
      type: types.GET_DONATION_INSTITUTION,
      payload: await api.getDonationInstitution(institution_id)
    });
  };
}

export function postDonationsInstitutionWait(
  donation_user_id,
  institution_id,
  indexId
) {
  return async (dispatch, getState) => {
    let openSnackbar;
    let message;
    let itemArray
    let donationInstitution = getState().donationInstitution
      .donationInstitution;

    const res = await api.postDonationsInstitutionWait(
      donation_user_id,
      institution_id
    );

    if (res.name) {
      itemArray = donationInstitution.find(item => item.donation_user_id === res.donation_user_id);
      donationInstitution = donationInstitution.filter(item => item.donation_user_id !== itemArray.donation_user_id)
      openSnackbar = true;
      message = "Aguardar retirada";
      donationInstitution.push(res)
    } else {
      openSnackbar = true;
      message = "Registro inválido";
    }

    dispatch({
      type: types.POST_DONATION_WAIT,
      payload: { openSnackbar, message, donationInstitution }
    });
  };
}

export function postDonationsInstitutionWithDraw(
  donation_user_id,
  institution_id
) {
  return async (dispatch, getState) => {
    let openSnackbar;
    let message;
    let itemArray
    let institution_id_stock
    let donationInstitution = getState().donationInstitution
      .donationInstitution;
    let date_withdraw = `${new Date().toLocaleDateString(
      "pt-BR"
    )} ${new Date().getHours()}:${new Date().getMinutes()}`;

    const res = await api.postDonationsInstitutionWithDraw(
      donation_user_id,
      institution_id,
      date_withdraw
    );

    if (res.name) {
      itemArray = donationInstitution.find(item => item.donation_user_id === res.donation_user_id);
      donationInstitution = donationInstitution.filter(item => item.donation_user_id !== itemArray.donation_user_id)
      institution_id_stock = getState().user.userInstitution.institution_id;
      openSnackbar = true;
      message = "Estoque disponível atualizado";
      donationInstitution.push(res);
      this.getStockInstitution(institution_id_stock)
    } else {
      openSnackbar = true;
      message = "Registro inválido";
    }

    dispatch({
      type: types.POST_DONATION_WITHDRAW,
      payload: { openSnackbar, message, donationInstitution }
    });
  };
}

export function closeSnackbarDonationInstitution() {
  return async dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR_DONATION_INSTITUTION,
      payload: false
    });
  };
}

// Stock Institution
export function getStockInstitution(institution_id) {
  return async dispatch => {
    let donation_type_id = 0;
    dispatch({
      type: types.GET_STOCK_INSTITUTION,
      payload: await api.getStockInstitution(donation_type_id, institution_id)
    });
  };
}
export function postStockInstitution(amount_out, institution_balance_id) {
  return async dispatch => {
    let date_out = `${new Date().toLocaleDateString(
      "pt-BR"
    )} ${new Date().getHours()}:${new Date().getMinutes()}`;
    let amount = parseInt(amount_out)

    dispatch({
      type: types.POST_STOCK_INSTITUTION,
      payload: await api.postStockInstitution(
        institution_balance_id,
        date_out,
        amount
      )
    });
  };
}
