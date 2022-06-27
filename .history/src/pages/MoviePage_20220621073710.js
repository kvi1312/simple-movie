import React from "react";
import useSWR from "swr";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config/config";

const MoviePage = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=172c72b78f475e54c01895081cfafdea`,
    fetcher
  );
  const movies = data?.result || [];
  return (
    <div className="py-10">
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&}
      </div>
    </div>
  );
};

export default MoviePage;
