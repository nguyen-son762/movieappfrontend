import React, { useEffect, useState } from "react";
import Dark from "../components/DarkMode/Dark";
import Film from "../components/Film/Film";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import FilmService from "../services/FilmService";
function SearchPage(props) {
  const search = props.location.search;
  const query = new URLSearchParams(search).get("query");
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log('x')
    FilmService.searchFilm(query).then((data) => {
      setList(data.data);
      console.log(data.data)
    });
  }, [query]);
  const showList = () => {
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
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container">
        <p className="nav_search">Tìm kiếm &gt; {query}</p>
        {list.length !== 0 ? (
          <div className="film">{showList()}</div>
        ) : (
          <p
            style={{
              color: "var(--black-color)",
              marginTop: "2rem",
              paddingBottom: "2rem",
            }}
          >
            Không có phim nào
          </p>
        )}
      </div>
      <Dark />
      <Footer />
    </div>
  );
}

export default SearchPage;
