import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";

const PageBanner = () => {
  const pageTitle = useContext(PageContext);

  const backgroundImage =
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1244&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <header className="w-full">
      {/* Main banner */}
      <section
        className="relative w-full h-[37.5vh] sm:h-[40vh] max-h-[75vh] bg-gray-900"
        aria-labelledby="page-banner-title"
        role="banner"
      >
        {/* Background Image */}
        <img
          className="w-full h-full object-cover object-center"
          src={backgroundImage}
          alt="Page banner background"
          loading="lazy"
        />

        {/* Dark overlay + title */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-3">
          <h1
            id="page-banner-title"
            className="uppercase font-bold text-white text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide"
          >
            {pageTitle}
          </h1>
        </div>
      </section>
    </header>
  );
};

export default PageBanner;
