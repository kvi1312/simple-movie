import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import {} from "sw"
import MovieCard from "./components/movie/MovieCard";

function App() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 py-10 text-white mb-15">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>

      <section className="banner h-[500px] page-container mb-20">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://wallpapercave.com/wp/wp4770368.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
            </div>
            <button className="border bg-primary border-none p-5 rounded-lg">
              Watch Now
            </button>
          </div>
        </div>
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-2x1 font-bold">
          Now playing
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <MovieCard></MovieCard>
        </div>
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-2x1 font-bold">
          Top rated
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
            <img
              src="https://wallpapercave.com/wp/wp4770368.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className=" font-bold mb-3 text-xl">Spiderman: Home coming</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <div className="">
              <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
                Watch now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-2x1 font-bold">
          Trending
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
            <img
              src="https://wallpapercave.com/wp/wp4770368.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className=" font-bold mb-3 text-xl">Spiderman: Home coming</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <div className="">
              <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
                Watch now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
