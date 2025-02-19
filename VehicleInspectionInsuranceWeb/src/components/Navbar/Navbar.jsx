import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

// Updated Navigation Links
export const Navlinks = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "INSPECTIONS", link: "/#inspections" },
  { id: 3, name: "SERVICES", link: "/#services" },
  { id: 4, name: "CONTACT US", link: "/#contact" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="w-full z-50 shadow-sm bg-[#fff] dark:bg-[#0a0a0a] border-b border-[#e5e7eb] dark:border-[#1f2937] transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/src/assets/logo_car-removebg-preview.png"
              alt="Car Icon"
              className="h-12 w-auto md:h-14 transition-transform group-hover:scale-105 duration-200"
            />
            <span className="text-xl md:text-2xl font-bold text-[#1a202c] dark:text-[#e2e8f0] font-sans">
              Car Inspection
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    className="text-sm md:text-base font-medium text-[#4a5568] dark:text-[#a0aec0] hover:text-[#1a202c] dark:hover:text-[#e2e8f0] px-3 py-2 rounded transition-colors duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full bg-[#f7fafc] dark:bg-[#1f2937] hover:bg-[#edf2f7] dark:hover:bg-[#2d3748] transition-colors duration-200"
                >
                  {theme === "dark" ? (
                    <BiSolidSun className="text-[#1a202c] dark:text-[#e2e8f0] text-lg" />
                  ) : (
                    <BiSolidMoon className="text-[#1a202c] dark:text-[#e2e8f0] text-lg" />
                  )}
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-[#f7fafc] dark:bg-[#1f2937] hover:bg-[#edf2f7] dark:hover:bg-[#2d3748] transition-colors duration-200"
            >
              {theme === "dark" ? (
                <BiSolidSun className="text-[#1a202c] dark:text-[#e2e8f0] text-lg" />
              ) : (
                <BiSolidMoon className="text-[#1a202c] dark:text-[#e2e8f0] text-lg" />
              )}
            </button>
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="text-[#4a5568] dark:text-[#a0aec0] hover:text-[#1a202c] dark:hover:text-[#e2e8f0] transition-colors duration-200"
                size={24}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="text-[#4a5568] dark:text-[#a0aec0] hover:text-[#1a202c] dark:hover:text-[#e2e8f0] transition-colors duration-200"
                size={24}
              />
            )}
          </div>
        </div>
      </div>
      {showMenu && <ResponsiveMenu showMenu={showMenu} />}
    </header>
  );
};

export default Navbar;