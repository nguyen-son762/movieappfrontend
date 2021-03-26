import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCmt, delteCmt } from "../../actions/comment";
import { showModal } from "../../actions/modal.action";
import CommentService from "../../services/CommentService";
import "./comment.scss";
function Comment({ idFilm }) {
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    CommentService.getCmtByFilmId(idFilm).then((data) =>
      setComments(data.data.comment)
    );
  }, [comments]);
  const showCmt = () => {
    let res = comments.map((e, index) => {
      return (
        <>
          <div className="cmt--item" key={index}>
            <div className="cmt--item__avatar">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="cmt--item__content">
              <p className="cmt--item__content--name">
                {e.userEntity.username}
              </p>
              <p>{e.content}</p>
            </div>
          </div>
          {user.user.userId === e.userEntity.userId ? (
            <div className="btn-remove">
              <span onClick={() => deleteCmt(e.commentId)}>Xóa</span>
            </div>
          ) : (
            ""
          )}
        </>
      );
    });
    if (comments.length === 0) {
      return <p className="nocmt">Chưa có bình luận nào</p>;
    }
    return res;
  };
  const showM = () => {
    dispatch(showModal());
  };
  const deleteCmt = (id) => {
    dispatch(delteCmt(id))
    CommentService.getCmtByFilmId(idFilm).then((data) =>
      setComments(data.data.comment)
    );
  };
  return (
    <div className="cmt">
      {showCmt()}
      <div className="input-cmt">
        <div className="cmt--item__avatar">
          <i className="fas fa-user-circle"></i>
        </div>

        <Formik
          initialValues={{ content: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.content) {
              errors.content = "Bạn cần nhập bình luận!";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            if (user.user) {
              dispatch(addCmt(idFilm, user.user.userId, values.content));
              CommentService.getCmtByFilmId(idFilm).then((data) =>
                setComments(data.data.comment)
              );
              values.content = "";
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form action="/" method="POST" onSubmit={handleSubmit}>
              <textarea
                className="comment"
                name="content"
                type="text"
                placeholder="Bình luận ..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
              <p style={{ color: "red" }}>
                {errors.content && touched.content && errors.content}
              </p>
              {user.isLogin ? (
                <button type="submit">Bình luận</button>
              ) : (
                <p
                  style={{
                    color: "var(--black-color)",
                    margin: "1rem 0",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={showM}
                >
                  Đăng nhập để bình luận
                </p>
              )}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Comment;
