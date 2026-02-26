import React from "react";
import useDataContext from "../contexts/DataContext";

const Partners = () => {
  const { partners } = useDataContext();

  return (
    <section
      className="w-full bg-blue-50 py-14"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <header className="text-center mb-10">
          <h2
            id="partners-heading"
            className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl"
          >
            Our Trusted Partners
          </h2>

          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            We collaborate with industry-leading partners to deliver reliable,
            scalable, and future-ready digital solutions.
          </p>
        </header>

        {/* Partners Grid */}
        <ul
          className="
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
            gap-10 items-center justify-items-center
          "
          aria-label="List of partner companies"
        >
          {partners.map((partner) => (
            <li key={partner.name}>
              <img
                src={partner.logo}
                alt={`${partner.name} partner logo`}
                className="
                  max-h-16 w-auto
                  object-contain
                  grayscale
                  hover:grayscale-0
                  transition duration-300
                "
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
