import axios from "axios";

const api = "https://u34n1y2e6l.execute-api.us-east-2.amazonaws.com/prod";

const headers = {
  Accept: "application/json",
  "content-type": "application/json"
};
class Api {
  static async getInstitutionsType() {
    const res = await axios.get(`${api}/institution-types`);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }
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
      .post(`${api}/login`, { email: email, password: password }, { headers })
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
    role_id,
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
      role_id: role_id,
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

  static async getInstitutionUser(user_id) {
    const res = await axios.get(`${api}/link-user-institutions`, {
      headers: {
        "user-id": 55
      }
    });
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async postInstitutionUser(user_id, institution_id) {
    let body = {
      "user-id": 57,
      "institution-id": 11
    };
    const res = await axios.post(`${api}/link-user-institutions`, {
      body,
      headers
    });
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  static async deleteInstitutionUser(user_id, institution_id) {
    let headers = {
      Accept: "application/json",
      "content-type": "application/json",
      "user-id": user_id,
      "institution-id": institution_id
    };
    const res = await axios.delete(`${api}/link-user-institutions`, {
      headers
    });
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }
}

export default Api;
