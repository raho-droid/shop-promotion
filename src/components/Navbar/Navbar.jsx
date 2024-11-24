import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Ana Sayfa",
    link: "/",
  },
  {
    id: 2,
    name: "Hakkımızda",
    link: "/about",
  },
  {
    id: 3,
    name: "Hizmetlerimiz",
    link: "/services",
  },
  {
    id: 4,
    name: "iletişim",
    link: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Güvenfix
            </a>
          </div>

          {/* search bar and dark mode */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            <DarkMode />

            {/* Hamburger Menu */}
            <button
              className="sm:hidden text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div className="sm:flex justify-center hidden">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="block px-4 py-2 hover:text-primary duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
