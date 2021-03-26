import React, { useEffect, useState } from "react";
import Video from "../components/Video/Video";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Dark from "../components/DarkMode/Dark";
import FilmService from "../services/FilmService";
import Comment from "../components/Comments/Comment";
import Footer from "../components/Footer/Footer";
function WatchFilm(props) {
  const [film, setFilm] = useState({});
  const id = props.match.params.id;
  useEffect(() => {
    FilmService.getFilmById(id).then((data) => setFilm(data.data));
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container">
        <Video source={film.soureURL} />
        <p
          style={{
            margin: "1rem 0",
            fontSize: "1.5rem",
            color: "#e4bb24",
            fontWeight:"500",
            textDecoration:"underline"
          }}
        >
          Bình luận
        </p>
        <Comment idFilm={id} />
      </div>
      <Dark />
      <Footer />
    </div>
  );
}

export default WatchFilm;
