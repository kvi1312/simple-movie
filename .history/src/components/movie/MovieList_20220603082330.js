import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import MovieCard from "./MovieCard";

// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>
// 172c72b78f475e54c01895081cfafdea&query
const MovieList = () => {
   const { data, error } = useSWR(`/api/user/${id}`, fetcher)
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidersPerView={"auto"}>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
