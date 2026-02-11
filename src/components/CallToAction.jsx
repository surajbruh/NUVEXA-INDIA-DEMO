import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const backgroundImage =
    "https://images.unsplash.com/photo-1627634777217-c864268db30c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section
      className="relative w-full flex items-center min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh]"
      aria-labelledby="cta-heading"
    >
      {/* Background Image (Decorative) */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2
            id="cta-heading"
            className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
          >
            Looking for reliable IT consulting solutions?
            <br />
            Let’s build something powerful together.
          </h2>

          <Link
            to="/contact"
            className="
              inline-flex items-center justify-center
              uppercase px-8 py-3 sm:py-3.5
              text-sm sm:text-base font-medium
              bg-red-500 text-white border border-red-500
              hover:bg-white hover:text-red-500
              transition-colors
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white
            "
            aria-label="Contact us for IT consulting services"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
