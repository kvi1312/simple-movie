import React from "react";


const MovieCard = ({ item }) => {
  const { title, poster_path, release_date, vote_average } = item;
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
      <img
        src={`https://image.tmdb.org/t/p/original/${pos}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className=" font-bold mb-3 text-xl">{title}</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
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
