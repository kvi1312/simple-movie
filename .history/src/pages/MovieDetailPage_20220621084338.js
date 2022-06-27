import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config/config";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title } = data;
  return (
    <>
      <div className="w-full h-[600px] relative mb-10 ">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>

      <div className="w-full h-[300px] max-w-[800px] mx-auto -mt-[200px] ">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          className="w-full h-full object-cover rounded-xl"
          alt=""
        />
      </div>

    </>
  );
};

export default MovieDetailPage;
