import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pizzeria</h1>

        {/* Hamburger Menu Icon (Visible on Small Screens) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Conditional Rendering for Hamburger and X Icons */}
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>

        {/* Navigation Links (Hidden on Small Screens) */}
        <ul
          className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out`}
        >
          <li><a href="/" className="hover:text-yellow-300">Home</a></li>
          <li><a href="/menu" className="hover:text-yellow-300">Menu</a></li>
          <li><a href="/about" className="hover:text-yellow-300">About</a></li>
          <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;