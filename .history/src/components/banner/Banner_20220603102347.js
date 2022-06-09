import React, { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../../config/config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=172c72b78f475e54c01895081cfafdea`,
    fetcher
  );

  const movies = data?.results || [];
  
  return (
    <section className="banner h-[500px] page-container mb-20">
      
    </section>
  );
};

function BannerItem()
export default Banner;
