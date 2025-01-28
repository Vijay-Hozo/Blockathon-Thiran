"use client";
import React, { useState } from "react";
// import { Link } from "react-scroll"; // Import Link from react-scroll

const navbar = [
  { id: 1, name: "About", href: "about" },
  { id: 2, name: "Themes", href: "themes" },
  { id: 3, name: "Timeline", href: "timeline" },
  { id: 4, name: "Prizes", href: "prizes" },
  { id: 5, name: "Guidelines", href: "guidelines" },
  { id: 6, name: "FAQ", href: "faq" },
  { id: 7, name: "Contact", href: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full z-20 fixed top-0 left-0 text-white bg-[#080D18] shadow-md overflow-x-hidden">
      <div className="relative container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">BLOCKATHON</h1>

        <ul className="hidden md:flex space-x-6 text-sm">
          {navbar.map((item) => (
            <li key={item.id}>
              {/* <Link
                to={item.href} 
                smooth={true} 
                duration={500} 
                className="text-lg hover:text-indigo-400 transition duration-200 hover:underline"
              >
                {item.name}
              </Link> */}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 space-y-4 py-4 px-6">
          <ul>
            {navbar.map((item) => (
              <li key={item.id}>
                {/* <Link
                  to={item.href} // Use 'to' prop for the section id
                  smooth={true} // Enable smooth scroll
                  duration={500} // Adjust the scroll duration as needed
                  className="block text-lg hover:text-indigo-400 transition duration-200"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item.name}
                </Link> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
