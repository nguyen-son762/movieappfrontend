import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ModalLogin.scss";
import { hideModal } from "../../actions/modal.action";
import { Formik } from "formik";
import { login, register } from "../../actions/user.action";
import Loading from "../../common/Loading";
import * as userType from "../../types/UserType";
function ModalLogin() {
  const [btnActive, setBtnActive] = useState(false);
  const open = useSelector((state) => state.modal.isModal);
  const user = useSelector((state) => state.user);
  const { isLogin, isLoading, isLoginFalse, isExist } = user;
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogin) {
      dispatch(hideModal());
    }
  }, [dispatch, isLogin]);
  const hideModal1 = () => {
    dispatch(hideModal());
  };
  return (
    <>
      {isLoading ? <Loading /> : ""}
      <div className={!open ? "modal" : "modal active"}>
        <div className="hide__back" onClick={hideModal1}></div>
        <div>
          <div className="modal--btn">
            <button
              className={!btnActive ? "active" : ""}
              onClick={() => setBtnActive(false)}
            >
              Đăng nhập
            </button>
            <button
              className={btnActive ? "active" : ""}
              onClick={() => setBtnActive(true)}
            >
              Đăng kí
            </button>
          </div>
          <div className={btnActive ? "modal--login " : "modal--login active"}>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Email chưa được nhập";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Email không hợp lệ";
                }
                if (values.password.length < 3) {
                  errors.password = "Mật khẩu tối thiểu 3 ký tự";
                }
                return errors;
              }}
              onSubmit={(values) => {
                dispatch({ type: userType.LOGIN });
                dispatch(login(values.email, values.password));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                resetForm,
              }) => (
                <form
                  method="POST"
                  action="/login"
                  className="login_form"
                  onSubmit={handleSubmit}
                >
                  <div className="modal--login__email modal-input field">
                    <i className="far fa-envelope"></i>
                    <input
                      className="email"
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Email"
                      value={values.email}
                    ></input>
                  </div>
                  <p style={{ color: "red" }}>
                    {errors.email && touched.email && errors.email}
                  </p>
                  <div className="modal--login__password modal-input field">
                    <i className="fas fa-key"></i>
                    <input
                      className="password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Password"
                      value={values.password}
                    ></input>
                  </div>
                  <p style={{ color: "red" }}>
                    {errors.password && touched.password && errors.password}
                  </p>
                  <p style={{ color: "red" }}>
                    {isLoginFalse ? "Sai tài khoản hoặc mật khẩu" : ""}
                  </p>
                  <button type="submit">Đăng nhập</button>
                </form>
              )}
            </Formik>
          </div>

          <div
            className={btnActive ? "modal--signup active " : "modal--signup"}
          >
            <Formik
              initialValues={{
                email: "",
                password: "",
                username: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = "Username không được để trống";
                }
                if (!values.email) {
                  errors.email = "Email chưa được nhập";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Email không hợp lệ";
                }
                if (values.password.length < 3) {
                  errors.password = "Mật khẩu tối thiểu 3 ký tự";
                }
                return errors;
              }}
              onSubmit={(values) => {
                dispatch({ type: userType.REGISTER });
                dispatch(
                  register(values.username, values.email, values.password)
                );
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form
                  method="POST"
                  action="/signup"
                  className="login_form"
                  onSubmit={handleSubmit}
                >
                  <div className="modal--login__email modal-input field">
                    <i className="far fa-user"></i>
                    <input
                      className="username"
                      type="text"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Username"
                      value={values.username}
                    ></input>
                  </div>
                  <p style={{ color: "red" }}>
                    {errors.username && touched.username && errors.username}
                  </p>
                  <div className="modal--login__email modal-input field">
                    <i className="far fa-envelope"></i>
                    <input
                      className="email"
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Email"
                      value={values.email}
                    ></input>
                  </div>
                  <p style={{ color: "red" }}>
                    {errors.email && touched.email && errors.email}
                  </p>
                  <div className="modal--login__password modal-input field">
                    <i className="fas fa-key"></i>
                    <input
                      className="password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Password"
                      value={values.password}
                    ></input>
                  </div>
                  <p style={{ color: "red" }}>
                    {errors.password && touched.password && errors.password}
                  </p>
                  <p style={{ color: "red" }}>
                    {isExist ? "Tài khoản đã tồn tại" : ""}
                  </p>
                  <button type="submit">Đăng kí</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalLogin;
