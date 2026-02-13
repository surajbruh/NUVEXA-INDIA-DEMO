import React from "react";

import PageBanner from "../components/PageBanner";

import Projects from "../sections/Projects";
import ReachOut from "../sections/ReachOut";

const Portfolio = () => {
  return (
    <main>
      <PageBanner />
      <Projects />
      <ReachOut />
    </main>
  );
};

export default Portfolio;
