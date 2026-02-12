import React from "react";
import { CornerDownLeft } from "lucide-react";

const ReachOut = () => {
  return (
    <section
      className="bg-gray-700 text-white"
      aria-labelledby="reachout-heading"
    >
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-center lg:text-left">
        {/* Left: Heading */}
        <div>
          <h2
            id="reachout-heading"
            className="uppercase font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Join Our Professional{" "}
            <span className="text-red-500">Community</span>
          </h2>
        </div>

        {/* Right: Contact Info */}
        <div className="w-max mx-auto flex items-center text-3xl sm:text-4xl md:text-5xl py-2 border-b-2 border-gray-500 hover:border-white transition-colors">
          <a
            href="mailto:info@nuvexaindia.com"
            className="font-medium"
            aria-label="Email Nuvexa India"
          >
            info@nuvexaindia.com
          </a>

          <CornerDownLeft className="ml-2" size={48} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default ReachOut;
