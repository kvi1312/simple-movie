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
        <div className="w-full h-full rounded-lg bg-white"></div>
      </section>
    </>
  );
}

export default App;
