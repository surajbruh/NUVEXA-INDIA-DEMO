import React from "react";
import Hero from "../sections/Hero";
import Work from "../sections/Work";
import Services from "../sections/Services";
import Expertise from "../sections/Expertise";
import ReachOut from "../sections/ReachOut";
import Partners from "../sections/Partners";

import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <main>
      <Hero />
      <Work />
      <CallToAction />
      <Services />
      <Expertise />
      <Partners />
      <ReachOut />
    </main>
  );
};

export default Home;
