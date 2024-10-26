import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Dropdown from '../dropdown/Dropdown';

const Navbar = ({ isSticky }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`${isSticky ? 'fixed top-0 left-0 z-50' : ''} bg-primary text-white w-full py-3 shadow-md rounded transition duration-300`}>
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
          <div className={`hidden md:flex space-x-4 justify-around text-base font-semibold ${isOpen ? "hidden" : "block"}`}>
            <Link to="/" className="hover:text-secondary transition duration-300 ease-in-out">Home</Link>
            <Link to="/call-for-papers" className="hover:text-secondary transition duration-300 ease-in-out">Call for Papers</Link>
            <Link to="/important-dates" className="hover:text-secondary transition duration-300 ease-in-out">Important Dates</Link>
            <Dropdown 
              name={'Committee'} 
              items={[
                { itemName: "Committee Member", link: "/committee" }, 
                { itemName: "Advisory Committee", link: "/advisorycommittee" }
              ]} 
            />
            <Link to="/author-info" className="hover:text-secondary transition duration-300 ease-in-out">Author Info</Link>
            <Link to="/registration" className="hover:text-secondary transition duration-300 ease-in-out">Registration</Link>
            <Link to="/publications" className="hover:text-secondary transition duration-300 ease-in-out">Publications</Link>
            <Link to="/speakers" className="hover:text-secondary transition duration-300 ease-in-out">Speakers</Link>
            <Link to="/gallery" className="hover:text-secondary transition duration-300 ease-in-out">Gallery</Link>
            <Link to="/nearby-attractions" className="hover:text-secondary transition duration-300 ease-in-out">Nearby Attractions</Link>
            <Link to="/contact-us" className="hover:text-secondary transition duration-300 ease-in-out">Contact Us</Link>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div className={`fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden`} onClick={toggleMenu}>
          <div className={`bg-primary text-white w-64 h-full absolute top-0 left-0 p-4 transition transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button onClick={toggleMenu} className="text-white focus:outline-none mb-4">
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
                />
              </svg>
            </button>
            <div className="flex flex-col space-y-4 text-lg font-semibold">
              <Link to="/" className="hover:text-secondary transition duration-300 ease-in-out" onClick={toggleMenu}>Home</Link>
              <Link to="/call-for-papers" className="hover:text-secondary transition duration-300 ease-in-out" onClick={toggleMenu}>Call for Papers</Link>
              <Link to="/important-dates" className="hover:text-secondary transition duration-300 ease-in-out" onClick={toggleMenu}>Important Dates</Link>
              <Dropdown 
                name={'Committee'} 
                items={[
                  { itemName: "Committee Member", link: "/committee" }, 
                  { itemName: "Advisory Committee", link: "/advisorycommittee" }
                ]} 
              />
              <Link to="/author-guidelines" className="hover:text-secondary transition duration-300 ease-in-out" onClick={toggleMenu}>Author Guidelines</Link>
              <Link to="/registration" className="hover:text-secondary transition duration-300 ease-in-out" onClick={toggleMenu}>Registration</Link>
              <Link to="/publications" className="hover:text-secondary transition duration-300 ease-in-out" onClick={toggleMenu}>Publications</Link>
              <Link to="/speakers" className="hover:text-secondary transition duration-300 ease-in-out" onClick={toggleMenu}>Speakers</Link>
              <Link to="/gallery" className="hover:text-secondary transition duration-300 ease-in-out" onClick={toggleMenu}>Gallery</Link>
              <Link to="/nearby-attractions" className="hover:text-secondary transition duration-300 ease-in-out" onClick={toggleMenu}>Nearby Attractions</Link>
              <Link to="/contact-us" className="hover:text-secondary transition duration-300 ease-in-out" onClick={toggleMenu}>Contact Us</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
