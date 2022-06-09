import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 py-10 text-white mb-15">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>

      <section className="banner h-[500px] page-container mb-10">
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
            <button className="border bg-pink-600 border-none p-5 rounded-lg">
              Watch Now
            </button>
          </div>
        </div>
      </section>

      <section className="movies-layout page-container mb-10">
        <h2 className="capitalize text-white mb-5 text-2x1 font-bold">
          Now playing
        </h2>
        <div className="movie-list"></div>
      </section>
    </>
  );
}

export default App;
