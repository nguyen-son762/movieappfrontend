import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
    const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link className="link_nav" to="/">
            Trang chủ
          </Link>
        </li>

        <li>
          <Link className="link_nav" to="/the-loai/phim-le">
            Phim lẻ
          </Link>
        </li>
        <li>
          <Link className="link_nav" to="/the-loai/phim-hoat-hinh">
            Phim hoạt hình
          </Link>
        </li>
        <li>
          <Link className="link_nav" to="/the-loai/phim-hanh-dong">
            Phim hành động
          </Link>
        </li>
        <li>
          <Link className="link_nav" to="/the-loai/phim-hai-huoc">
            Phim hài hước
          </Link>
        </li>
      </ul>
      <div className="navbar__tablet">
        <div className="navbar__tablet-toggle" 
        >
          <i className="fas fa-bars" onClick={()=>setToggle(!toggle)}></i>
        </div>
        <ul className={toggle?"navbar__tablet-list active":"navbar__tablet-list"}>
          <li>
            <Link className="link_nav" to="/">
              Trang chủ
            </Link>
          </li>

          <li>
            <Link className="link_nav" to="/the-loai/phim-le">
              Phim lẻ
            </Link>
          </li>
          <li>
            <Link className="link_nav" to="/the-loai/phim-hoat-hinh">
              Phim hoạt hình
            </Link>
          </li>
          <li>
            <Link className="link_nav" to="/the-loai/phim-hanh-dong">
              Phim hành động
            </Link>
          </li>
          <li>
            <Link className="link_nav" to="/the-loai/phim-hai-huoc">
              Phim hài hước
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
