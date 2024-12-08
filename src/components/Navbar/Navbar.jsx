import React, { useState } from "react";
import Logo from "../../assets/logo.jpeg";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

const Menu = [
  { id: 1, name: "Ana Sayfa", link: "/" },
  { id: 2, name: "Hakkımızda", link: "/about" },
  { id: 3, name: "Hizmetlerimiz", link: "/services" },
  { id: 4, name: "İletişim", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full shadow-md bg-white dark:bg-gray-900 dark:text-white z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold hover:opacity-80"
        >
          <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" />
          güvenfix
        </Link>

        <div className="hidden sm:flex items-center gap-4">
          <nav>
            <ul className="flex gap-6">
              {Menu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="text-lg hover:text-primary transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <DarkMode />
        </div>

        {/* Hamburger Menu */}
        <button
          className="sm:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="sm:hidden bg-white dark:bg-gray-900 shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6">
            {Menu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="text-xl hover:text-primary transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
