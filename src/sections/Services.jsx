import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import useDataContext from "../contexts/DataContext";

const Services = () => {
  const { cards } = useDataContext();

  return (
    <section className="bg-gray-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Section Header */}
        <header className="text-center mb-12">
          <div className="max-w-4xl mx-auto space-y-4">
            <h2
              id="services-heading"
              className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
            >
              <span className="text-red-500">Expert IT Services </span> Built
              for Modern Businesses
            </h2>

            <p className="font-light text-sm sm:text-base md:text-lg text-gray-600">
              We don’t just deliver technology solutions — we design scalable,
              secure, and high-performing IT services that support long-term
              business growth.
            </p>
          </div>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, index) => (
            <article
              key={index}
              className="bg-white text-center px-6 py-14 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon / Image */}
              <figure className="mx-auto mb-8 h-24 w-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={`${item.title} IT service icon`}
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                />
              </figure>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg sm:text-xl">
                  {item.title}
                </h3>

                <p className="font-light text-sm sm:text-base text-gray-600">
                  {item.description}
                </p>

                {/* {item.href && (
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-1 uppercase text-sm font-medium text-red-600
                      hover:gap-2 transition-all
                      focus:outline-none focus-visible:underline"
                    aria-label={`Read more about ${item.title}`}
                  >
                    Read More
                    <ChevronRight size={18} strokeWidth={2} />
                  </Link>
                )} */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
