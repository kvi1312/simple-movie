import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config/config";

const MovieDetailPage = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);
  console.log(data);
  return (
    <>
      <div

      //   className="w-full h-screen bg-cover bg-no-repeat"
      //   style={{
      //     backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
      //   }}
      ></div>
    </>
  );
};

export default MovieDetailPage;
