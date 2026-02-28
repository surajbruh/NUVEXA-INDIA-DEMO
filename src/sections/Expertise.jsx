import React from "react";

const icons = import.meta.glob("/src/assets/technologies/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

const Expertise = () => {
  const iconList = Object.values(icons);

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
        <ul
          className="
            grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5
            gap-6 justify-items-center
          "
          aria-label="Technology expertise icons"
        >
          {iconList.map((src, index) => (
            <li key={index}>
              <figure
                className="
                  flex items-center justify-center
                  bg-zinc-200 w-20 h-20 rounded-md
                "
              >
                <img
                  src={src}
                  alt={`Technology expertise icon ${index + 1}`}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Expertise;
