import * as UserType from "../types/UserType";
import UserService from "./../services/UserService";
import Cookies from "js-cookie";
export const login = (email, password) => {
  return (dispatch) => {
    UserService.login({ email, password })
      .then((data) => {
        Cookies.set("token", data.data.token);
        dispatch({
          type: UserType.LOGIN_SUCCESS,
          payload: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: UserType.LOGIN_FAIL,
          payload: err,
        });
      });
  };
};
export const register = (username,email, password) => {
  return (dispatch) => {
    UserService.register({ username,email, password })
      .then((data) => {
        Cookies.set("token", data.data.token);
        dispatch({
          type: UserType.REGISTER_SUCCESS,
          payload: data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: UserType.REGISTER_FAIL,
          payload: err,
        });
      });
  };
};
export const logout=()=>{
  return (dispatch)=>{
    Cookies.remove('token')
    dispatch({type:UserType.LOG_OUT})
  }
}
