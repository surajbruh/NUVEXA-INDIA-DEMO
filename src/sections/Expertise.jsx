import React from "react";

const Expertise = () => {
  return (
    <section className="bg-white" aria-labelledby="expertise-heading">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div>
          <div className="max-w-xl space-y-4">
            <h2
              id="expertise-heading"
              className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
            >
              Our Areas of <span className="text-red-500">Expertise</span>
            </h2>

            <p className="font-light text-sm sm:text-base md:text-lg text-gray-600">
              From websites and software to databases and networking, we bring
              deep technical expertise so you can focus on growing your
              business.
            </p>
          </div>
        </div>

        {/* Right: Expertise Icons */}
        <div className="w-max mx-auto grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
          {Array.from({ length: 2 }).map((_, index) => (
            <figure
              key={index}
              className="
        group relative
        flex items-center justify-center
        bg-zinc-200 w-20 h-20 rounded-md
        focus-within:ring-2 focus-within:ring-red-500
      "
              tabIndex={0}
              aria-describedby={`expertise-tooltip-${index}`}
            >
              {/* Icon */}
              <img
                src="/icons/HTML.svg"
                alt="HTML technology expertise"
                className="w-10 h-10 object-contain"
                loading="lazy"
              />

              {/* Tooltip */}
              <figcaption
                id={`expertise-tooltip-${index}`}
                className="
          absolute bottom-full mb-2 left-1/2 -translate-x-1/2
          z-10
          bg-red-500 text-white text-xs
          px-4 py-2 rounded-md shadow-md
          whitespace-nowrap
          opacity-0 scale-95
          transition-all duration-200
          pointer-events-none
          group-hover:opacity-100 group-hover:scale-100
          group-focus-within:opacity-100 group-focus-within:scale-100
        "
              >
                Semantic, accessible, and SEO-friendly HTML development.
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
