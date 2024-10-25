import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Dropdown from '../dropdown/Dropdown';

const Navbar = ({ isSticky }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${isSticky ? 'fixed top-0 left-0 z-50' : ''} bg-primary text-white w-full py-2 shadow-md rounded`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle Menu">
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
          <Link to="/" className="hover:text-secondary transition duration-300 ease-in-out">HOME</Link>
          <Link to="/call-for-papers" className="hover:text-secondary transition duration-300 ease-in-out">CALL FOR PAPERS</Link>
          <Link to="/important-dates" className="hover:text-secondary transition duration-300 ease-in-out">IMPORTANT DATES</Link>
          <Dropdown 
            name={'COMMITTEE'} 
            items={[
              { itemName: "Committee Member", link: "/committee" }, 
              { itemName: "Advisory Committee", link: "/advisorycommittee" }
            ]} 
          />
          <Link to="/author-info" className="hover:text-secondary transition duration-300 ease-in-out">AUTHOR INFO</Link>
          <Link to="/registration" className="hover:text-secondary transition duration-300 ease-in-out">REGISTRATION</Link>
          <Link to="/publications" className="hover:text-secondary transition duration-300 ease-in-out">PUBLICATIONS</Link>
          <Link to="/speakers" className="hover:text-secondary transition duration-300 ease-in-out">SPEAKERS</Link>
          <Link to="/gallery" className="hover:text-secondary transition duration-300 ease-in-out">GALLERY</Link>
          <Link to="/nearby-attractions" className="hover:text-secondary transition duration-300 ease-in-out">NEARBY ATTRACTIONS</Link>
          <Link to="/contact-us" className="hover:text-secondary transition duration-300 ease-in-out">CONTACT US</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
