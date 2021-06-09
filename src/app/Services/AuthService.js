import axios from "axios";

const API_URL = "http://localhost:4000/api/v1";

class AuthService {
  login(loginData) {
    return axios
      .post(API_URL + "/login", loginData)
      .then((response) => {
        console.log('Login', response);
        if (response.data.response) {
            localStorage.setItem("user", JSON.stringify(response.data.response));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(regiserData) {
    return axios.post(API_URL + "/register", regiserData);
  }
}

export default new AuthService();