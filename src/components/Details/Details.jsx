import React from "react";
import { Link } from "react-router-dom";
import "./Details.scss";
function Details(props) {
  const {
    actors,
    name,
    content,
    category,
    national,
    star,
    numberReviews,
    image,
    id,
    yearRelease,
  } = props;
  return (
    <div>
      <p className="name-details">Trang chủ &gt; {name}</p>
      <div className="details">
        <div className="details__left">
          <img src={image} alt="" className="details__left--thumb" />
          <Link to={`/watch/${id}`} style={{ cursor: "pointer" }}>
            <button>
              <i className="fas fa-play"></i>
              <span>Xem phim</span>
            </button>
          </Link>
        </div>
        <div className="details__right">
          <p className="name">
            {/* {name} ({yearRelease}) */}
          </p>
          <p>Trạng thái : HD VIETSUB</p>
          <p>Thời lượng : 102p</p>
          <p>Quốc gia: {national}</p>
          <p>Diễn viên: {actors}</p>
          <p>Năm : {yearRelease}</p>
          <p>Thể loại : {category}</p>
          <div className="reviews">
            <i class="fas fa-star"></i>
            {star} / 10 ( {numberReviews} đánh giá )
          </div>
        </div>
      </div>
      <p
        className="content"
        style={{ fontSize: "1.6rem", color: "#e4bb24", margin: "1rem 0" }}
      >
        Nội dung phim
      </p>
      <p className="content">{content}</p>
    </div>
  );
}

export default Details;
