import axios from "axios";

const api = "https://u34n1y2e6l.execute-api.us-east-2.amazonaws.com/prod";

const headers = {
  Accept: "application/json",
  "content-type": "application/json",
};

class Api {
  static async login(email, password) {
    const res = await axios.post(
      `${api}/login`,
      { email: email, password: password },
      { headers }
    ).then(res=> res).catch(error =>  error.response)
    if (res.status >= 200 && res.status <= 207) {
      return res;
    } else {
      return res;
    }
  }
  
  static async logout(id, token) {
    const res = await axios.post(
      `${api}/logout`,
      { id: id, token: token },
      { headers }
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }

  //POST /user
  //Add user
  static async addUser(name, nickname) {
    const res = await axios.post(
      `${api}`,
      { name: name, nickname: nickname },
      {
        headers
      }
    );
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }
}

export default Api;
