import React from "react";
import PortfolioSlider from "../components/PortfolioSlider";

const Work = () => {
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
              Proven Results Through{" "}
              <span className="text-red-500">Real Projects</span>
            </h2>

            <p className="font-light text-sm sm:text-base md:text-lg text-gray-600">
              Explore a selection of websites and digital solutions we’ve
              delivered for businesses across industries.
            </p>
          </div>
        </header>

        <PortfolioSlider />
      </div>
    </section>
  );
};

export default Work;
