import React from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config/config";

const MoviePage = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=172c72b78f475e54c01895081cfafdea`,
    fetcher
  );
  console.log(data);
  const movies = data?.results || [];
  return (
    <div className="py-10">
      <div className="flex">

        <div className="flex-1">
          <input
            type="text"
            className="w-full"
            placeholder="Search something"
          />
        </div>

        <button className="">
          
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard id={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
