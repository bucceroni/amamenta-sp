import axios from "axios";

const api = "https://u34n1y2e6l.execute-api.us-east-2.amazonaws.com/prod";

const headers = {
  Accept: "application/json",
  "Content-type": "application/json",
  // 'Access-Control-Allow-Origin': "*",
};

class Api {
  static async login(email, password) {
    const res = await axios.post(
      `${api}/login`,
      { email: email, password: password },
      { headers }
    )//.then(res=> res).catch(error =>  error)
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
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
}

export default Api;
