// import axios from "axios";

// const api =
//   "https://u34n1y2e6l.execute-api.us-east-2.amazonaws.com/teste/user/";

// const headers = {
//   Accept: "application/json",
//   "content-type": "application/json"
// };

// class Api {
//   //GET /users
//   //Get all users
//   static async getUsers() {
//     const res = await axios.get(`${api}`, { headers });
//     if (res.status >= 200 && res.status <= 207) {
//       return res.data;
//     } else {
//       throw new Error(`HTTP status ${res.status}`);
//     }
//   }
//   //POST /user
//   //Add user
//   static async addUser(name, nickname) {
//     const res = await axios.post(
//       `${api}`,
//       { name: name, nickname: nickname },
//       {
//         headers
//       }
//     );
//     if (res.status >= 200 && res.status <= 207) {
//       return res.data;
//     } else {
//       throw new Error(`HTTP status ${res.status}`);
//     }
//   }
// }
// export default Api;
