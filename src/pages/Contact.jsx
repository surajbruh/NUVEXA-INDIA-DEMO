import React from "react";

import EmbeddedMap from "../components/EmbeddedMap";
import PageBanner from "../components/PageBanner";

import ReachOut from "../sections/ReachOut";
import ContactDetails from "../sections/ContactDetails";
import Partners from "../sections/Partners";

const Contact = () => {
  return (
    <main>
      <PageBanner />
      <ContactDetails />
      <EmbeddedMap />
      <ReachOut />
    </main>
  );
};

export default Contact;
