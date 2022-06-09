import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import MovieCard from "./components/movie/MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieList from "./components/movie/MovieList";

function App() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 py-10 text-white mb-15">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>

      <Banner></Banner>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-2x1 font-bold">
          Now playing
        </h2>

        <MovieList></MovieList>
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-2x1 font-bold">
          Top rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-2x1 font-bold">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </>
  );
}

export default App;
