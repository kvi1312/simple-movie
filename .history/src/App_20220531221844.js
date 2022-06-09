import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 py-10 text-white mb-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="w-full h-full rounded-lg relative">
          <img
            src="https://wallpapercave.com/wp/wp4770368.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-0 text-white">
            <span className="font-bold text-3xl w-full mb-3">Avengers: Endgame</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
