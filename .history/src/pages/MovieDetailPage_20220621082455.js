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
        className="w-full h-screen bg-cover bg-no-repeat bg-blend-overlay"
        
      >
         <div className="w-full h-full"></div>
      </div>
    </>
  );
};

export default MovieDetailPage;
