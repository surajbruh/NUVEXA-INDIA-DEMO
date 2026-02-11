import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Scrollbar } from "swiper/modules";

import useDataContext from "../contexts/DataContext";

import "swiper/css";
import "swiper/css/scrollbar";

const Work = () => {
  const { websites } = useDataContext();

  return (
    <section className="bg-gray-50" aria-labelledby="work-heading">
      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Section Header */}
        <header className="text-center mb-12">
          {/* <span className="inline-block uppercase font-bold bg-red-600 text-white px-4 py-1 mb-4">
            Our Work
          </span> */}

          <div className="max-w-4xl mx-auto space-y-4">
            <h2
              id="work-heading"
              className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
            >
              Proven Results Through Real Projects
            </h2>

            <p className="font-light text-sm sm:text-base md:text-lg text-gray-600">
              Explore a selection of websites and digital solutions we’ve
              delivered for businesses across industries.
            </p>
          </div>
        </header>

        {/* Portfolio Slider */}
        <Swiper
          modules={[Autoplay, A11y, Scrollbar]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="w-full"
        >
          {websites.map((item, index) => (
            <SwiperSlide key={`${item.websiteURL}-${index}`} className="">
              <article className="relative h-[50vh] overflow-hidden group">
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
      </div>
    </section>
  );
};

export default Work;
