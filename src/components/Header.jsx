import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, Instagram, Linkedin } from "lucide-react";
import useDataContext from "../contexts/DataContext";

// todo: make header component responsive

const Header = () => {
  const { navigation, socials } = useDataContext();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="w-full">
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

      {/* Header Main */}
      <div className="">
        <div className="max-w-7xl mx-auto py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <NavLink to="/" aria-label="Homepage">
              <img
                src="/company_logo.png"
                alt="Nuvexa India company logo"
                className="h-20 w-auto object-cover object-center"
                loading="eager"
              />
            </NavLink>
          </div>

          {/* Primary Navigation */}
          <nav aria-label="Primary Navigation">
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center">
              {navigation.map((navItem, index) => (
                <li key={index} className="relative group">
                  {navItem.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => navigate(navItem.href)}
                        className="navItem flex items-center gap-1 px-5 py-4 text-sm xl:text-base font-medium uppercase transition"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {navItem.name}
                        <ChevronDown size={16} />
                      </button>

                      <ul
                        className="absolute left-0 top-full hidden group-hover:block bg-white text-black shadow-lg z-50 min-w-max"
                        role="menu"
                      >
                        {navItem.dropdown.map((item, subIndex) => (
                          <li key={subIndex} role="none">
                            <NavLink
                              to={item.href}
                              role="menuitem"
                              className="block px-5 py-3 text-sm font-medium uppercase whitespace-nowrap hover:bg-gray-100"
                            >
                              {item.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      to={navItem.href}
                      className="navItem block px-5 py-4 text-sm xl:text-base font-medium uppercase"
                    >
                      {navItem.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 text-sm uppercase font-medium"
              >
                Menu
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              {isMobileMenuOpen && (
                <ul className="absolute left-0 top-full w-full bg-gray-900">
                  {navigation.map((navItem, index) => (
                    <li key={index} className="border-t border-gray-800">
                      {navItem.dropdown ? (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === index ? null : index,
                              )
                            }
                            className="w-full flex justify-between items-center px-4 py-3 uppercase text-sm font-medium hover:bg-gray-800"
                          >
                            {navItem.name}
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${
                                openDropdown === index ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {openDropdown === index && (
                            <ul className="bg-gray-800">
                              {navItem.dropdown.map((item, subIndex) => (
                                <li key={subIndex}>
                                  <NavLink
                                    to={item.href}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setOpenDropdown(null);
                                    }}
                                    className="block px-6 py-3 text-sm uppercase hover:bg-gray-700"
                                  >
                                    {item.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <NavLink
                          to={navItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-3 uppercase text-sm font-medium hover:bg-gray-800"
                        >
                          {navItem.name}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>

          {/* Social Links */}
          <ul className="hidden lg:flex items-center gap-4">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
