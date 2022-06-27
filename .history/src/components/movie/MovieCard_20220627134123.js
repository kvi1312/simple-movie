import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import PropTypes from "prop-types";
import {withErrorBoundary} from "react-error-boundary"
import LoadingSkeleton from "LoadingSkeleton";
const MovieCard = ({ item }) => {
  const { title, poster_path, release_date, vote_average, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white select-none h-full">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className=" font-bold mb-3 text-xl">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    id: PropTypes.string,
  }),
};

function FallbackComponent(){
  return <p className="bg-red-50 text-red-50">Something went wrong</p>
}

export default withErrorBoundary(MovieCard,{
  FallbackComponent
});

const MovieCardSkelton = () =>{
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white select-none h-full">
     
      <LoadingSkeleton width="100%" height="250px" radius="8px" className="mb-5"></LoadingSkeleton>
      <div className="flex flex-col flex-1">
      <LoadingSkeleton width="100%" height="20px" radius="8px" className="mb-5"></LoadingSkeleton>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
      </div>
    </div>
  );
}