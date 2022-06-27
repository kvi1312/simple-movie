import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config/config";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/{movieId}?api_key=${apiKey}`,
    fetcher
  );
  return (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
      ipsum incidunt eligendi, asperiores magnam tempora dolorem dolores
      doloribus neque blanditiis ipsa perferendis voluptas, nemo laborum.
      Nostrum accusamus nesciunt accusantium autem.
    </div>
  );
};

export default MovieDetailPage;
