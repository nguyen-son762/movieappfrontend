import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import FilmService from "../services/FilmService";
import Film from "../components/Film/Film";
import Footer from "../components/Footer/Footer";
import Dark from "../components/DarkMode/Dark";
import { Link } from "react-router-dom";
import Loading from "../common/Loading";
function TypePage(props) {
  const [list, setList] = useState([]);
  const [pagi, setPagi] = useState(1);
  const [open, setOpen] = useState(false);
  const search = useLocation().search;
  const page = new URLSearchParams(search).get("page");
  const [currentPage, setCurrentPage] = useState(page !== null ? page : 1);
  const slug = props.match.params.slug;
  useEffect(() => {
    if (page == null) {
      setOpen(true)
      FilmService.getFilmCategory(slug, 1).then((data) => {
        setList(data.data.items);
        if (data.data.total) {
          setPagi(data.data.total);
        }
      });
      setOpen(false)
    } else {
      FilmService.getFilmCategory(slug, page).then((data) =>
        setList(data.data.items)
      );
    }
    setCurrentPage(page);
  }, [slug, page]);
  const showFilmOdd = () => {
    let res = list.map((e, index) => {
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
  const paginate = () => {
    let ar = [];
    for (let i = 0; i < pagi; i++) {
      ar.push(1);
    }
    let res = ar.map((e, index) => {
      return (
        <div className="">
          <Link
            className={
              currentPage == index + 1
                ? "pagination-link active"
                : "pagination-link"
            }
            to={`/the-loai/${slug}?page=${index + 1}`}
          >
            {index + 1}
          </Link>
        </div>
      );
    });
    return res;
  };
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container">
        {open ? <Loading /> :"" }
        <div className="film">{showFilmOdd()}</div>
        <div className="pagination">
          {slug !== "phim-le" ? (
            <Link to={`/the-loai/${slug}?page=1`}>1</Link>
          ) : (
            paginate()
          )}
        </div>
      </div>
      <Dark />
      <Footer />
    </div>
  );
}

export default TypePage;
