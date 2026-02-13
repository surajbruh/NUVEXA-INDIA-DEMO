import { Link } from "react-router-dom";
import useDataContext from "../contexts/DataContext";

const Footer = () => {
  const { navigation, about, socials } = useDataContext();

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <section aria-labelledby="footer-about">
          <div className="mb-5">
            <Link to="/" aria-label="Go to homepage">
              <img
                src="/company_logo.png"
                alt="Nuvexa India company logo"
                className="h-20 w-auto object-contain"
                loading="lazy"
              />
            </Link>
          </div>

          <p
            id="footer-about"
            className="text-sm leading-relaxed text-gray-300 md:w-[85%]"
          >
            {about.description}
          </p>
        </section>

        {/* Quick Links */}
        <nav aria-label="Footer navigation">
          <h2 className="uppercase text-lg font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name} className="uppercase text-sm">
                <Link
                  to={item.href || "#"}
                  className="quick-links text-gray-300 hover:text-(--accent-color) transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social & Contact */}
        <section aria-labelledby="footer-socials">
          <h2
            id="footer-socials"
            className="uppercase text-lg font-semibold mb-4"
          >
            Follow Us
          </h2>

          <ul className="flex items-center gap-4">
            {socials.map((social, index) => (
              <li key={index}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className=""
                >
                  <img
                    className="w-6 h-6 object-contain"
                    src={social.icon}
                    alt={`${social.label} icon`}
                    loading="lazy"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <p className="text-center text-gray-400 text-sm py-4">
          © {new Date().getFullYear()} {about.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
