import React from "react";
import Hero from "../sections/Hero";
import Work from "../sections/Work";
import Services from "../sections/Services";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <main>
      <Hero />
      <Work />
      <CallToAction />
      <Services />
    </main>
  );
};

export default Home;
