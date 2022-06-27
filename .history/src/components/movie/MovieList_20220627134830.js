import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config/config";
import MovieCard, { MovieCardSkelton } from "./MovieCard";

// const NowPlayingEndpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=172c72b78f475e54c01895081cfafdea`;
// const TopRatedEndpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=172c72b78f475e54c01895081cfafdea`;

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const isLoading = !data && !error;

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);

  return (
    <div className="movie-list">
      {!isLoading && (
        <>
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <MovieCardSkelton></MovieCardSkelton>
            </SwiperSlide>
          </Swiper>
        </>
      )}
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          data.results &&
          movies.map((item, id) => (
            <SwiperSlide key={id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
