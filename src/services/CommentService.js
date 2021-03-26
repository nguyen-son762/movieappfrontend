import axios from "axios";
import Cookies from "js-cookie";

const CMT_REST_API_URL = "/api/comments";
const token = Cookies.get("token");
class CommentService {
  getCmtByFilmId(id) {
    return axios.get(`/api/comment/${id}`);
  }
  addCmt(filmId, idUser, body) {
    return axios.post(
      `${CMT_REST_API_URL}/${filmId}/${idUser}/add`,
      {content:body},
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }
  deleteCmt(id){
    return axios.delete(`${CMT_REST_API_URL}/delete/${id}`,{ headers: { Authorization: `Bearer ${token}` } }).catch(err=> {
      throw Error(err)
    });
  }
}
export default new CommentService();
