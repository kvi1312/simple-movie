import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import MovieCard from "./components/movie/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Homepage from "./pages/Homepage";
import MoviePage from "./pages/MoviePage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <Homepage></Homepage>
              </>
            }
          ></Route>
          <Route path="/Movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailPage></MovieDetailPage>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
