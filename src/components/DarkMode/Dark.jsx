import React, { useEffect, useState } from "react";
import "./Dark.scss";
function Dark() {
  const [scroll, setScroll] = useState(false);
  const mode = localStorage.getItem("mode");
  useEffect(() => {
    if (mode === "dark") {
      setScroll(true);
    }
  }, [mode]);
  useEffect(() => {
    const body = document.querySelector("body");
    if (scroll) {
      body.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      body.classList.remove("dark");
    }
  }, [scroll]);
  return (
    <div className="darkmode">
      <i className="far fa-sun"></i>
      <div className="toggle" onClick={() => {
        localStorage.removeItem('mode');
        setScroll(!scroll)
      }}>
        <div
          className={scroll ? `toggle__scroll active` : "toggle__scroll"}
        ></div>
      </div>
      <i className="fas fa-moon"></i>
    </div>
  );
}

export default React.memo(Dark);
