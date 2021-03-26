import * as userType from "./../types/UserType";
const initialState = {
  user: {},
  isLogin: false,
  isLoading: false,
  isLoginFalse: false,
  isExist:false
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case userType.LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case userType.LOGIN_SUCCESS:
      const { user } = action.payload;
      return {
        ...state,
        user: user,
        isLogin: true,
        isLoading: false,
        isLoginFalse: false,
      };
    case userType.LOGIN_FAIL:
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        isLoginFalse: true,
      };
    case userType.REGISTER:
      return {
        ...state,
        isLoading: true,
      };
    case userType.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLogin: true,
        isLoading: false,
        isLoginFalse: false,
        isExist:false
      };
    case userType.REGISTER_FAIL:
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        isLoginFalse: true,
        isExist:true
      };
    case userType.LOG_OUT:
      return {
        ...state,
        user: {},
        isLogin: false,
        isLoginFalse: false,
      };
    default:
      return state;
  }
}
export default userReducer;
