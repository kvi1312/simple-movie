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
            src="https://nld.mediacdn.vn/thumb_w/600/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
            alt=""
            className="w-full h-full object-cover roun"
          />
        </div>
      </section>
    </>
  );
}

export default App;
