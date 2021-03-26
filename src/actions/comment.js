import CommentService from "../services/CommentService";
export const addCmt = (filmId, idUser,content) => {
  return (dispatch) => {
    CommentService.addCmt(filmId, idUser,content).catch((err) => console.log(err));
  };
};
export const delteCmt = (id) => {
  return (dispatch) => {
    CommentService.deleteCmt(id)
  };
};

