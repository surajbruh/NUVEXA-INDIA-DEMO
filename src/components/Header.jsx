import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useDataContext from "../contexts/DataContext";

const Header = () => {
  const { navigation, socials } = useDataContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      {/* Top Contact Bar */}
      <div className="bg-gray-100 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center gap-2 justify-center lg:justify-start">
          <a
            href="mailto:info@nuvexaindia.com"
            className="text-gray-800 hover:underline"
          >
            info@nuvexaindia.com
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="tel:+918422801640"
            className="text-red-600 font-medium hover:underline"
          >
            +91 84228 01640
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-3 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-2 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" aria-label="Nuvexa India Homepage">
            <img
              src="/company_logo.png"
              alt="Nuvexa India company logo"
              className="h-20 w-auto object-contain"
              loading="eager"
            />
          </NavLink>

          {/* Navigation */}
          <nav aria-label="Main Navigation">
            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-2">
              {navigation.map((navItem) => (
                <li key={navItem.name} className="relative group">
                  <NavLink
                    to={navItem.href}
                    className={({ isActive }) =>
                      `navItem block px-5 py-4 text-sm xl:text-base font-medium uppercase transition-colors ${
                        isActive && "text-red-600"
                      }`
                    }
                  >
                    {navItem.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="flex items-center gap-3 text-sm uppercase font-medium"
              >
                <span>Menu</span>
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              {/* Mobile Dropdown */}
              {isMobileMenuOpen && (
                <ul
                  id="mobile-menu"
                  className="absolute left-0 top-full w-full bg-white shadow-xl z-50"
                >
                  {navigation.map((navItem) => (
                    <li key={navItem.name}>
                      {
                        <NavLink
                          to={navItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `block px-4 py-4 uppercase text-sm font-medium hover:bg-gray-100 transition ${
                              isActive && "text-red-600"
                            }`
                          }
                        >
                          {navItem.name}
                        </NavLink>
                      }
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>

          {/* Social Links (Desktop) */}
          <ul className="hidden lg:flex items-center gap-4">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:opacity-70 transition"
                >
                  <img
                    src={social.icon}
                    alt={`${social.label} icon`}
                    className="w-6 h-6 object-contain"
                    loading="lazy"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
