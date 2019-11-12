import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./composants/Header.js";
import Tabs from "./composants/Tabs";
import axios from "axios";
import Card from "./composants/Card";
import ChevronsLeft from "./composants/ChevronsLeft";
import ChevronsRight from "./composants/ChevronsRight";

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const onTabClick = index => {
    setPage(1);
    setIsLoading(true);
    setTabIndex(index);
  };

  useEffect(() => {
    let url = "";
    switch (tabIndex) {
      case 0:
        url = `https://api-allocine.herokuapp.com/api/movies/popular?p=${page}`;
        break;
      case 1:
        url = `https://api-allocine.herokuapp.com/api/movies/upcoming?p=${page}`;
        break;
      case 2:
        url = `https://api-allocine.herokuapp.com/api/movies/top_rated?p=${page}`;
        break;
      default:
        break;
    }
    if (url !== "") {
      readPage(url);
    }
  }, [tabIndex, page]);

  const readPage = async url => {
    const response = await axios.get(url);
    setTotalPage(response.data.total_pages);
    setMovies(response.data.results);
    setIsLoading(false);
  };

  return (
    <div>
      <Header />
      <Tabs tabIndex={tabIndex} onClick={onTabClick} />
      {isLoading ? (
        <div className="loading">
          <h1>Chargement...</h1>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie, index) => {
            return (
              <Card key={index} title={movie.title} release={movie.release_date} overview={movie.overview} image={movie.poster_path} />
            );
          })}
          <div className="movies-pages">
            <span
              className={page > 1 ? "button-page" : "button-page-disabled"}
              onClick={() => {
                if (page > 1) {
                  setIsLoading(true);
                  setPage(page - 1);
                  window.scrollTo(0, 0);
                }
              }}
            >
              <ChevronsLeft />
            </span>
            <span style={{ height: "23px" }}>
              Page {page} / {totalPage}
            </span>
            <span
              className={page < totalPage ? "button-page" : "button-page-disabled"}
              onClick={() => {
                if (page < totalPage) {
                  setIsLoading(true);
                  setPage(page + 1);
                  window.scrollTo(0, 0);
                }
              }}
            >
              <ChevronsRight />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
