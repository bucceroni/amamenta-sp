import axios from "axios";

const api = "https://u34n1y2e6l.execute-api.us-east-2.amazonaws.com/prod";

const headers = {
  Accept: "application/json",
  "content-type": "application/json"
};
class Api {
  static async getStates() {
    const res = await axios.get(`${api}/states`);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async getCities(state_id) {
    const res = await axios.get(`${api}/cities?state-id=${state_id}`, headers);
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
    const res = await axios.get(`${api}/promotions`);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async login(email, password) {
    const res = await axios
      .post(`${api}/login`, { email: email, password: password }, {headers})
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
      .get(`${api}/logout`, { token: token }, { headers })
      .then(res => res)
      .catch(error => error);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
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
}

export default Api;
