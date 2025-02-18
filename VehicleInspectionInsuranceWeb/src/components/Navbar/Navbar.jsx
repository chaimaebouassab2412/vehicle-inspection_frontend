import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

// Updated Navigation Links
export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "INSPECTIONS",
    link: "/#inspections",
  },
  {
    id: 3,
    name: "SERVICES",
    link: "/#services",
  },
  {
    id: 4,
    name: "CONTACT US",
    link: "/#contact",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/src/assets/logo_car-removebg-preview.png"
              alt="Car Icon"
              className="h-24 w-auto"
            />
            <span
              className="text-2xl font-bold font-serif text-[#0092b1]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Car Inspection
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className="text-lg font-medium hover:text-[#0092b1] py-2 hover:border-b-2 hover:border-[#0092b1] transition-colors duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              {/* Dark Mode Toggle */}
              <li className="py-4">
                {theme === "dark" ? (
                  <BiSolidSun
                    onClick={() => setTheme("light")}
                    className="text-2xl cursor-pointer text-[#0092b1]"
                  />
                ) : (
                  <BiSolidMoon
                    onClick={() => setTheme("dark")}
                    className="text-2xl cursor-pointer text-[#0092b1]"
                  />
                )}
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer text-[#0092b1]"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer text-[#0092b1]"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      {showMenu && <ResponsiveMenu showMenu={showMenu} />}
    </header>
  );
};

export default Navbar;
