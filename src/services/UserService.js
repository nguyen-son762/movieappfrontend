import axios from "axios";

const USER_REST_API_URL = "/api/user";
class UserService {
  register(body){
      return axios.post(`${USER_REST_API_URL}/create`,body)
  }
  login(body){
    return axios.post(`${USER_REST_API_URL}/login`,body)
  }
}
export default new UserService();