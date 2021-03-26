import React from "react";
import { Link } from "react-router-dom";
import "./Film.scss";
function Film(props) {
  const { image, filmName, filmId } = props;
  const show = () => {
    return (
      <div className="film__item">
        <div className="film__item--status">
          <p>HD VIETSUB</p>
        </div>
        <Link to={`/film/${filmId}`} className="film__item__link">
          <div className="thumbnail">
            <div className="thumbnail__img">
              <img src={image} alt="" />
            </div>
            <div className="overlay">
              <i className="far fa-play-circle"></i>
            </div>
          </div>
          <p>{filmName}</p>
        </Link>
      </div>
    );
  };

  return <>{show()}</>;
}

export default React.memo(Film);
