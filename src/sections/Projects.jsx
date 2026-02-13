import React, { useState } from "react";
import { Link } from "react-router-dom";
import PortfolioSlider from "../components/PortfolioSlider";
import useDataContext from "../contexts/DataContext";

const Projects = () => {
  const { websites } = useDataContext();
  const [image, setImage] = useState(null);

  return (
    <section className="bg-gray-50" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Section Header */}
        <header className="text-center mb-12">
          <span className="inline-block uppercase font-bold mb-4">
            Our recent success stories
          </span>

          <div className="max-w-4xl mx-auto space-y-4">
            <h2
              id="projects-heading"
              className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
            >
              <span className="text-red-500">Highlighted </span>
              client results
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              See how Avola empowers growth with digital projects, unique tech,
              and agile support for clients in many sectors.
            </p>
          </div>
        </header>

        {/* Projects List — Desktop */}
        <div
          className="hidden lg:block relative group"
          onMouseLeave={() => setImage(null)}
        >
          <ul>
            {websites.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.websiteURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open project ${item.title}`}
                >
                  <article
                    tabIndex={0}
                    onMouseEnter={() => setImage(item.image)}
                    onFocus={() => setImage(item.image)}
                    className="
                      relative overflow-hidden px-4 py-5 border-b
                      after:content-['']
                      after:absolute after:inset-0
                      after:bg-(--accent-color)
                      after:-translate-y-full
                      after:transition-transform after:duration-300 after:ease-in-out
                      hover:after:translate-y-0
                      focus-visible:after:translate-y-0
                    "
                  >
                    <h3 className="relative z-10 uppercase font-bold text-5xl mb-3">
                      {item.title}
                    </h3>
                  </article>
                </Link>
              </li>
            ))}
          </ul>

          {/* Image Preview */}
          {image && (
            <aside
              className="
                hidden fixed bottom-[40vh] right-[10vw]
                z-30 group-hover:block
                shadow-xl w-full max-w-125 aspect-video
              "
              aria-hidden="true"
            >
              <figure className="w-full h-full overflow-hidden rounded-md">
                <img
                  src={image}
                  alt="Project preview"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </figure>
            </aside>
          )}
        </div>

        {/* Projects — Mobile */}
        <div className="lg:hidden">
          <PortfolioSlider />
        </div>
      </div>
    </section>
  );
};

export default Projects;
