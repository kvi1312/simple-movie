import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config/config";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "../components/movie/MovieCard";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetail(movieId), fetcher);
  if (!data) return null;
  console.log(data);
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative mb-10 ">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`,
          }}
        ></div>
      </div>

      <div className="w-full h-[300px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10 ">
        <img
          src={tmdbAPI.imageOriginal(poster_path)}
          className="w-full h-full object-cover rounded-xl"
          alt=""
        />
      </div>

      <h1 className="text-center text-4xl font-bold text-white mb-10">
        {title}
      </h1>

      {genres.length > 0 && (
        <div className="flegx items-center gap-x-5 mb-10 justify-center">
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
      <MovieMeta type="credits"></MovieMeta>
      <MovieMeta type="videos"></MovieMeta>
      <MovieMeta type="similar"></MovieMeta>
    </div>
  );
};

function MovieMeta({ type = "videos" }) {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, type), fetcher);
  if (!data) return null;
  if (type === "credits") {
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;
    return (
      <div className="py-10">
        <h2 className="text-center mb-10 font-bold text-2xl">Casts</h2>
        <div className="grid grid-cols-4 gap-5">
          {cast.slice(0, 4).map((item) => (
            <div className="cast-item" key={item.id}>
              <img
                src={tmdbAPI.imageOriginal(item.profile_path)}
                alt=""
                className="w-full h-[350px] object-cover rounded-lg  mb-3"
              />
              <h3 className="text-xl font-medium">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    const { results } = data;
    if (!results || results.length <= 0) return null;
    if (type === "videos")
      return (
        <div className="py-10">
          <div className="flex flex-col gap-10">
            {results.slice(0, 2).map((item) => (
              <div className="" key={item.id}>
                <h3 className="mb-5 text-xl font-medium text-white bg-secondary p-3 inline-block rounded-lg">
                  {item.name}
                </h3>
                <div key={item.id} className="w-full aspect-video">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-fill"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    if (type === "similar")
      return (
        <div className="py-10">
          <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
          <div className="movie-list">
            <Swiper
              grabCursor={"true"}
              spaceBetween={40}
              slidesPerView={"auto"}
            >
              {results.length > 0 &&
                data.results &&
                results.map((item, id) => (
                  <SwiperSlide key={id}>
                    <MovieCard item={item}></MovieCard>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      );
  }
  return null;
}

export default MovieDetailPage;
