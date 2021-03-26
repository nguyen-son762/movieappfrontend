import React, { lazy, Suspense, useEffect, useState } from "react";
import Loading from "../common/Loading";
import Dark from "../components/DarkMode/Dark";
import Film from "../components/Film/Film";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import FilmService from "../services/FilmService";
const Details = lazy(() => import("../components/Details/Details"));
function DetailsFilm(props) {
  const [film, setFilm] = useState([]);
  const id = props.match.params.id;
  const [relatedFilm, setRelatedFilm] = useState([]);
  useEffect(() => {
    FilmService.getFilmById(id).then((data) =>{
      setFilm(data.data)
    });
    FilmService.getHome().then((res) => {
      setRelatedFilm(res.data.odd);
    });
    window.scrollTo(0, 0);
  }, [id]);
  const showFilmOdd = () => {
    let film = relatedFilm.filter((e) => e.id != id);
    let res = film.map((e, index) => {
      return (
        <>
          {" "}
          <Film
            key={index}
            image={e.image}
            filmName={e.filmName}
            filmId={e.id}
          ></Film>{" "}
        </>
      );
    });
    return res;
  };
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container">
        <Suspense fallback={<Loading />}>
         <div>
         <Details
            name={film.filmName}
            content={film.contentFilm}
            actors={film.actors}
            category={film.category}
            national={film.national}
            star={film.star}
            numberReviews={film.numberReviews}
            image={film.image}
            id={film.id}
            yearRelease={film.yearRelease}
          />
         </div>
        </Suspense>
        {relatedFilm.length !== 0 ? (
          <>
            <div className="related-movie">
              <div className="title">
                <p>
                  <span>Phim liên quan</span>
                </p>
              </div>
              <div className="film">{showFilmOdd()}</div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
      <Dark />
      <Footer />
    </div>
  );
}

export default DetailsFilm;
