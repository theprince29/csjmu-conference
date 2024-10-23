import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white w-full py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Left: Links Section */}
        <div className={`flex flex-col md:flex-row md:space-x-8 text-xs md:text-base ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="/" className="hover:text-secondary transition duration-300 ease-in-out">HOME</a>
          <a href="/call-for-papers" className="hover:text-secondary transition duration-300 ease-in-out">CALL FOR PAPERS</a>
          <a href="/important-dates" className="hover:text-secondary transition duration-300 ease-in-out">IMPORTANT DATES</a>
          <a href="/committee" className="hover:text-yellow-500 transition duration-300 ease-in-out">COMMITTEE</a>
          <a href="/author-info" className="hover:text-secondary transition duration-300 ease-in-out">AUTHOR INFO</a>
          <a href="/program" className="hover:text-secondary transition duration-300 ease-in-out">PROGRAM</a>
          <a href="/publications" className="hover:text-secondary transition duration-300 ease-in-out">PUBLICATIONS</a>
          <a href="/speakers" className="hover:text-secondary transition duration-300 ease-in-out">SPEAKERS</a>
          <a href="/gallery" className="hover:text-secondary transition duration-300 ease-in-out">GALLERY</a>
          <a href="/nearby-attractions" className="hover:text-secondary transition duration-300 ease-in-out">NEARBY ATTRACTIONS</a>
          <a href="/contact-us" className="hover:text-secondary transition duration-300 ease-in-out">CONTACT US</a>
        </div>

     
      </div>
    </nav>
  );
};

export default Navbar;
