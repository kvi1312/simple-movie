import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import MovieCard from "./components/movie/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Homepage from "./pages/Homepage";

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
          <Route path="/Movies"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
