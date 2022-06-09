import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config/config";
import MovieCard from "./MovieCard";

const NowPlayingEndpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=172c72b78f475e54c01895081cfafdea`;
const TopRatedEndpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=172c72b78f475e54c01895081cfafdea`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const { data, error } = useSWR(NowPlayingEndpoint, fetcher);

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);

  return (
    <div className="movie-list">
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
