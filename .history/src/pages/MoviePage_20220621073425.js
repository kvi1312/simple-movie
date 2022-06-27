import React from "react";
import MovieList from "../components/movie/MovieList";

const MoviePage = () => {
  return (
    <div className="py-10">
    <div className="grid grid-cols-4 gap-10"></div>
      <MovieList></MovieList>
    </div>
  );
};

export default MoviePage;
