import React from "react";

import EmbeddedMap from "../components/EmbeddedMap";

import ReachOut from "../sections/ReachOut";
import ContactDetails from "../sections/ContactDetails";

const Contact = () => {
  return (
    <main>
      <ContactDetails />
      <EmbeddedMap />
      <ReachOut />
    </main>
  );
};

export default Contact;
