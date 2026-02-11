import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import useDataContext from "../contexts/DataContext";
import "swiper/css";

const Hero = () => {
  const { slides } = useDataContext();

  return (
    <section className="relative w-full" aria-labelledby="hero-heading">
      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 bg-black/60 flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-5">
            {/* SEO: Single H1 */}
            <h1
              id="hero-heading"
              className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
            >
              Driving Digital Transformation Through Smart IT Solutions
            </h1>

            {/* Supporting description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200">
              We help businesses grow with secure, scalable, and innovative IT
              consulting services tailored for modern enterprises.
            </p>

            {/* Primary CTAs */}
            <nav
              aria-label="Homepage primary actions"
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <Link
                to="/about"
                className="uppercase px-6 py-2 text-sm sm:text-base bg-red-500 hover:bg-red-600 transition-colors"
              >
                Discover More
              </Link>

              <Link
                to="/services"
                className="uppercase px-6 py-2 text-sm sm:text-base border border-white hover:bg-white hover:text-black transition-colors"
              >
                Learn More
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Background Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        className="w-full h-[50vh] sm:h-[55vh] md:h-[65vh] max-h-200"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={`${src}-${index}`}>
            <figure className="w-full h-full">
              <img
                src={src}
                alt={`IT consulting services showcase ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
