import React from "react";

import PageBanner from "../components/PageBanner";

import Projects from "../sections/Projects";
import ReachOut from "../sections/ReachOut";
import Partners from "../sections/Partners";

const Portfolio = () => {
  return (
    <main>
      <PageBanner />
      <Projects />
      <Partners />
      <ReachOut />
    </main>
  );
};

export default Portfolio;
