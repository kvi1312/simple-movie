import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const movieDetail = useSWR
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
