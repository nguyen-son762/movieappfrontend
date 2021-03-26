import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Dark from "../components/DarkMode/Dark";
import FilmService from "../services/FilmService";
import Loading from "../common/Loading";
const Film = lazy(() => import("../components/Film/Film"));
function HomePage() {
  const [filmOdd, setFilmOdd] = useState([]);
  const [filmCinema, setFilmCinema] = useState([]);
  const [filmAction, setFilmAction] = useState([]);
  useEffect(() => {
    FilmService.getHome().then((res) => {
      setFilmOdd(res.data.odd);
      setFilmCinema(res.data.cinema);
      setFilmAction(res.data.action);
    });
    window.scrollTo(0, 0);
  }, []);
  const showFilmOdd = () => {
    let res = filmOdd.map((e, index) => {
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
  const showFilmCinema = () => {
    let res = filmCinema.map((e, index) => {
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
  const showFilmAction = () => {
    let res = filmAction.map((e, index) => {
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
    <div style={{position:"relative"}}>
      
      <Header />
      <Navbar />
       {filmOdd.length!==0?<>
        <div className="container">
          <div className="title">
            <p>
              <span>Phim lẻ 2021</span>
            </p>
          </div>
          <Suspense fallback={<Loading />}>
            <div className="film">{showFilmOdd()}</div>
          </Suspense>
          <div className="title">
            <p>
              <span>Phim chiếu rạp</span>
            </p>
          </div>
          <Suspense fallback={<Loading />}>
            <div className="film">{showFilmCinema()}</div>
          </Suspense>
          <div className="title">
            <p>
              <span>Phim hành động</span>
            </p>
          </div>
          <Suspense fallback={<Loading />}>
            <div className="film">{showFilmAction()}</div>
          </Suspense>
        </div>
        <Footer /></>:<Loading />}
      <Dark />
    </div>
  );
}

export default HomePage;
