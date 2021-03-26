import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showModal } from "../../actions/modal.action";
import { logout } from "../../actions/user.action";
import ModalLogin from "../ModalLogin/ModalLogin";
import "./Header.scss";
function Header() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const logoutUser=()=>{
    dispatch(logout())
  }
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <img
              src="http://goldphim.com/wp-content/uploads/2020/03/logo-moi-1.png"
              alt=""
            />
          </Link>
        </div>
        <form action="/tim-kiem" method="GET" className="header__search">
          <input type="text" name="query" placeholder="Tìm kiếm..." />
          <i className="fas fa-search"></i>
        </form>
        <div className="header__login">
          {user.isLogin &&user.user ? (
            <div className="header__user">
              <p style={{width:"7rem",textOverflow:"...",overflow:"hidden",whiteSpace:"nowrap"}}>{user.user.username}</p>
              <button className="login--btn" onClick={logoutUser}>
                Đăng xuất
              </button>
            </div>
          ) : (
            <button
              className="login--btn"
              onClick={() => {
                dispatch(showModal());
              }}
            >
              Đăng nhập
            </button>
          )}
        </div>
      </div>
      <ModalLogin />
    </>
  );
}

export default Header;
