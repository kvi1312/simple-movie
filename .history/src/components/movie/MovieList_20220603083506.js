import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config/config";
import MovieCard from "./MovieCard";

const endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=172c72b78f475e54c01895081cfafdea`;

const MovieList = () => {
  const { data, error } = useSWR(endpoint, fetcher);
  const { movie, setMovie } = useState([]);
  
  useEffect(()=>{},[])
  console.log("🚀 ~ MovieList ~ data", data);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
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
