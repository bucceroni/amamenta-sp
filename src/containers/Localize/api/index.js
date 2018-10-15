import axios from "axios";

const api =
  "https://u34n1y2e6l.execute-api.us-east-2.amazonaws.com/prod";

  const headers = {
    Accept: "application/json",
    "content-type": "application/json",
  };
class Api {
  static async getInstitutions() {
    const res = await axios.get(`${api}/institutions`, { headers });
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }
}
export default Api;