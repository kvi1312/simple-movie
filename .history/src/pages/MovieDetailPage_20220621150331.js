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
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative mb-10 ">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>

      <div className="w-full h-[300px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10 ">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          className="w-full h-full object-cover rounded-xl"
          alt=""
        />
      </div>

      <h1 className="text-center text-4xl font-bold text-white mb-10">
        {title}
      </h1>

      {genres.length > 0 && (
        <div className="flex items-center gap-x-5 mb-10 justify-center">
          {genres.map((item) => (
            <span
              className="py-2 px-4 border-primary text-white border rounded-lg "
              key={item.id}
            >
              {" "}
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className=" text-center mx-auto mb-10 leading-relaxed max-w-[600px]">
        {overview}
      </p>
      <MovieCredit></MovieCredit>
      <MovieVideo></MovieVideo>
    </div>
  );
};
// https://api.themoviedb.org/3/credit/{credit_id}?api_key=<<api_key>>
function MovieCredit() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  console.log(data);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-center mb-10 font-bold text-2xl">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              alt=""
              className="w-full h-[350px] object-cover rounded-lg  mb-3"
            />
            <h3 className="text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieVideo() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
    
      {results.slice(0, 5).map((item) => (
        <div key={item.id} className="w-full aspect-video">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${item.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-full object-fill"
          ></iframe>
        </div>
      ))}
    </div>
  );
}
//<iframe width="560" height="315" src="https://www.youtube.com/embed/SlekXWhGMh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
export default MovieDetailPage;
