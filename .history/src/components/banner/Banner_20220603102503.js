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
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        <SwiperSlide>
          <BannerItem></BannerItem>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

function BannerItem() {
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src="https://wallpapercave.com/wp/wp4770368.jpg"
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
        </div>
        <button className="border bg-primary border-none p-5 rounded-lg">
          Watch Now
        </button>
      </div>
    </div>
  );
}
export default Banner;
