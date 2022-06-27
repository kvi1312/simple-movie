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
  console.log(data);
  return (
    <>
      <div
        className="w-full h-screen bg-ob"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint
        minus expedita voluptatibus, natus possimus aut necessitatibus sunt
        dolorum assumenda temporibus corporis eligendi laboriosam ratione soluta
        excepturi quibusdam. Distinctio, nihil!
      </div>
    </>
  );
};

export default MovieDetailPage;
