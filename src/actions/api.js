import axios from "axios";

const api = "https://u34n1y2e6l.execute-api.us-east-2.amazonaws.com/prod";

const headers = {
  Accept: "application/json",
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*"
};
class Api {
  static async getInstitutionsType() {
    const res = await axios.get(`${api}/institution-types`, headers);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }
  static async getStates() {
    const res = await axios.get(`${api}/states`, headers);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async getCities(state_id) {
    const res = await axios.get(`${api}/cities?state_id=${state_id}`);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async getInstitutions() {
    const res = await axios.get(`${api}/institutions`, headers);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async getRoles() {
    const res = await axios.get(`${api}/roles`, headers);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async getEvents() {
    const res = await axios.get(`${api}/promotions`, headers);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async login(email, password) {
    const res = await axios
      .post(`${api}/login`, { email: email, password: password }, headers)
      .then(res => res)
      .catch(error => error);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      return res.response;
    }
  }

  static async logout(token) {
    const res = await axios
      .get(`${api}/logout`, { token: token }, headers)
      .then(res => res)
      .catch(error => error);
    if (res.status >= 200 && res.status <= 207) {
      return res.status;
    } else {
      return res.response;
    }
  }

  static async postAddUser(
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
    let body = {
      name: name,
      nickname: nickname,
      birth_date: birth_date,
      gender: gender,
      city_id: city_id,
      street: street,
      number: number,
      complement: complement,
      district: district,
      postal_code: postal_code,
      phone: [phone],
      role_id: role_id,
      email: email,
      password: password
    };
    const res = await axios
      .post(`${api}/users`, body, headers)
      .then(res => res)
      .catch(error => error);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      return res.response;
    }
  }

  static async putEditUser(
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
    // phone,
    role_id
    // email,
    // password
  ) {
    let body = {
      user_id: user_id,
      name: name,
      nickname: nickname,
      birth_date: birth_date,
      gender: gender,
      // city_id: city_id,
      street: street,
      number: number,
      complement: complement,
      district: district,
      postal_code: postal_code,
      // phone: [phone],
      role_id: role_id
      // email: email,
      // password: password
    };
    const res = await axios
      .put(`${api}/users`, body, headers)
      .then(res => res)
      .catch(error => error);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      return res.response;
    }
  }

  static async postAddInstitution(
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
    let body = {
      "city-id": city_id,
      "institution-type": type,
      name: name,
      email: email,
      street: street,
      site: site,
      number: number,
      complement: complement,
      district: district,
      phone: [phone],
      "postal-code": postal_code
    };
    const res = await axios
      .post(`${api}/institutions`, body, headers)
      .then(res => res)
      .catch(error => error);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      return res.response;
    }
  }

  static async postAddEvent(
    institution_id,
    description,
    site,
    title,
    date_initial,
    date_end
  ) {
    let body = {
      institution_id: institution_id,
      description: description,
      link: site,
      title: title,
      date_initial: date_initial,
      date_end: date_end
    };
    const res = await axios
      .post(`${api}/promotions`, body, headers)
      .then(res => res)
      .catch(error => error);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      return res.response;
    }
  }

  // user-institution
  static async getUserInstitution(user_id) {
    const res = await axios.get(
      `${api}/link-user-institutions?user_id=${user_id}`,
      headers
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async postUserInstitution(user_id, institution_id) {
    let body = {
      user_id: user_id,
      institution_id: institution_id
    };
    const res = await axios.post(
      `${api}/link-user-institutions`,
      body,
      headers
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async removeUserInstitution(user_id, institution_id) {
    let body = {
      user_id: user_id,
      institution_id: institution_id
    };
    const res = await axios.post(
      `${api}/link-user-institutions/delete/`,
      body,
      headers
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  // institution-user
  static async getInstitutionUsers(institution_id) {
    const res = await axios.get(
      `${api}/link-institution-users/?institution_id=${institution_id}`,
      headers
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async approveInstitutionUser(user_id, institution_id) {
    let body = {
      user_id: user_id,
      institution_id: institution_id
    };
    const res = await axios.post(
      `${api}/link-institution-users`,
      body,
      headers
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async removeInstitutionUser(user_id, institution_id) {
    let body = {
      user_id: user_id,
      institution_id: institution_id
    };
    const res = await axios.post(
      `${api}/link-institution-users/delete/`,
      body,
      headers
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  // Administrator
  static async getAdministratorUsers() {
    const res = await axios.get(`${api}/link-institution-users/`, headers);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  // Donation
  static async getUnit() {
    const res = await axios.get(`${api}/unit`, headers);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async getDonationType() {
    const res = await axios.get(`${api}/donation-type-details`, headers);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  // Donation Users
  static async getDonationUser(user_id) {
    const res = await axios.get(
      `${api}/donations-user?user_id=${user_id}`,
      headers
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async addDonationUser(
    user_id,
    amount_entry,
    unit_id,
    donation_type_id,
    donation_type_details_id,
    date_entry
  ) {
    let body = {
      user_id: user_id,
      amount_entry: amount_entry,
      unit_id: unit_id,
      donation_type_id: donation_type_id,
      donation_type_details_id: donation_type_details_id,
      date_entry: date_entry
    };
    const res = await axios
      .post(`${api}/donations-user/`, body, headers)
      .then(res => res)
      .catch(error => error);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      return res.message;
    }
  }

  // Donation Institutions
  static async getDonationInstitution(institution_id) {
    const res = await axios.get(
      `${api}/donations-institution/?institution_id=${institution_id}`,
      headers
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async postDonationsInstitutionWait(donation_user_id, institution_id) {
    let body = {
      donation_user_id: donation_user_id,
      institution_id: institution_id
    };
    const res = await axios.post(
      `${api}/donations-institution/`,
      body,
      headers
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      return null;
    }
  }

  static async postDonationsInstitutionWithDraw(
    donation_user_id,
    institution_id,
    date_withdraw
  ) {
    let body = {
      donation_user_id: donation_user_id,
      institution_id: institution_id,
      date_withdraw: date_withdraw
    };
    const res = await axios.post(
      `${api}/donations-institution/withdraw/`,
      body,
      headers
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      return null;
    }
  }

  static async getStockInstitution(donation_type_id, institution_id) {
    const res = await axios.get(
      `${api}/stock/?donation_type_id=${donation_type_id}&institution_id=${institution_id}`,
      headers
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async postStockInstitution(
    institution_balance_id,
    date_out,
    amount_out
  ) {
    let body = {
      institution_balance_id: institution_balance_id,
      date_out: date_out,
      amount_out: parseInt(amount_out)
    };
    const res = await axios.post(`${api}/stock/`, body, headers);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      return null;
    }
  }
}

export default Api;
