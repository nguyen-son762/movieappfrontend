import axios from "axios";

const FILM_REST_API_URL = "/api/film";
class FilmService {
  getAllFilms() {
   return axios.get(FILM_REST_API_URL);
  }
  getFilmById(id){
      return axios.get(`${FILM_REST_API_URL}/${id}`)
  }
  searchFilm(query){
      return axios.get(`${FILM_REST_API_URL}/search?query=${query}`)
  }
  getFilmCategory(type,page){
    return axios.get(`${FILM_REST_API_URL}/${type}?page=${page}`)
  }
  getHome(){
    return axios.get("/api/getfilms")
  }
}
export default new FilmService();
