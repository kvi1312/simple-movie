import React from "react";

const posterLink = `https://image.tmdb.org/t/p/original/`;
const MovieCard = ({ title, poster_path, date, vote }) => {
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
      <img
        src={`${posterLink} + ${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className=" font-bold mb-3 text-xl">{title}</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>{date}</span>
        <span>{vote}</span>
      </div>
      <div className="">
        <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
