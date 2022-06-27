import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config/config";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/{movieId}?api_key=172c72b78f475e54c01895081cfafdea`,
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
