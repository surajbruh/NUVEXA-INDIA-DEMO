import React from "react";

const EmbeddedMap = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6141169307793!2d73.00888007500265!3d19.08069648212485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c140cdeaf841%3A0x64dc43ce5db07772!2sNUVEXA%20INDIA%20SOLUTION%20LLP!5e0!3m2!1sen!2sin!4v1770887598295!5m2!1sen!2sin";

  return (
    <section className="w-full" aria-labelledby="map-heading">
      <h2 id="map-heading" className="sr-only">
        Company Location Map
      </h2>

      <iframe
        src={mapUrl}
        title="Nuvexa India Solution LLP location on Google Maps"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="
          w-full
          min-h-75 sm:min-h-87.5 md:min-h-100
          border-0 rounded-lg
        "
      />
    </section>
  );
};

export default EmbeddedMap;
