import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import useDataContext from "../contexts/DataContext";

import "swiper/css";
import "swiper/css/pagination";

const PortfolioSlider = () => {
  const { websites } = useDataContext();

  return (
    <Swiper
      modules={[Autoplay, A11y, Pagination]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      }}
      className="w-full"
    >
      {websites.map((item, index) => (
        <SwiperSlide key={`${item.websiteURL}-${index}`} className="">
          <article className="relative h-[50vh] overflow-hidden rounded-md group">
            {/* Image */}
            <figure className="w-full h-full">
              <img
                src={item.image}
                alt={`${item.title} website project preview`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </figure>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/60 text-white flex items-end">
              <div className="px-5 py-8 space-y-3">
                <h3 className="uppercase font-bold text-lg sm:text-xl">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-200">
                  {item.description}
                </p>

                {item.websiteURL && (
                  <Link
                    to={item.websiteURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block uppercase px-6 py-2.5 text-sm sm:text-base font-medium
                          border border-white text-white
                          hover:bg-white hover:text-red-500 hover:border-red-500
                          transition-colors
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label={`View website for ${item.title}`}
                  >
                    View Website
                  </Link>
                )}
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioSlider;
