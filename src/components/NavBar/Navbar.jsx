import React, { useState } from 'react';

import Dropdown from '../dropdown/Dropdown';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isSticky }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const isActive = (path) => location.pathname === path;
  return (
    <>
       <nav className={`${isSticky ? 'fixed top-0 left-0 z-50' : ''} bg-primary text-white w-full py-3 shadow-md rounded transition duration-300`}>
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

          {/* Left: Links Section */}
          <div className={`hidden md:flex space-x-4 justify-around text-base font-semibold ${isOpen ? "hidden" : "block"}`}>
            <Link to="/" className={`${isActive('/') ? 'text-secondary' : 'hover:text-secondary'} transition duration-300 ease-in-out`}>Home</Link>
            {/* <Link to="/call-for-papers" className={`${isActive('/call-for-papers') ? 'text-secondary' : 'hover:text-secondary'} transition duration-300 ease-in-out`}>Call for Papers</Link> */}
           <Dropdown 
              name={'Paper'} 
              items={[
                {itemName:"Call For Papers",link:"/call-for-papers"},
                { itemName: "Call For special Sessions", link: "/call-for-special-sessions" },
                
              ]} 
            />
            <Link to="/important-dates" className={`${isActive('/important-dates') ? 'text-secondary' : 'hover:text-secondary'} transition duration-300 ease-in-out`}>Important Dates</Link>
            <Dropdown 
              name={'Committee'} 
              items={[
                {itemName:"Steering Committee",link:"/steering-committee"},
                { itemName: "Advisory Committee", link: "/advisorycommittee" },
                { itemName: "Teachnical Committee", link: "technical-program-committee" }, 
              ]} 
            />
            <Dropdown 
              name={'Author Info'} 
              items={[
                { itemName: "CRC Info", link: "/crc-guidelines" }, 
                { itemName: "Submission Guideline", link: "/submission-guidelines" }
              ]} 
            />
            <Link to="/registration" className={`${isActive('/registration') ? 'text-secondary' : 'hover:text-secondary'} transition duration-300 ease-in-out`}>Registration</Link>
            <Link to="/publications" className={`${isActive('/publications') ? 'text-secondary' : 'hover:text-secondary'} transition duration-300 ease-in-out`}>Publications</Link>
            <Link to="/speakers" className={`${isActive('/speakers') ? 'text-secondary' : 'hover:text-secondary'} transition duration-300 ease-in-out`}>Speakers</Link>
            <Link to="/gallery" className={`${isActive('/gallery') ? 'text-secondary' : 'hover:text-secondary'} transition duration-300 ease-in-out`}>Gallery</Link>
            <Link to="/nearby-attractions" className={`${isActive('/nearby-attractions') ? 'text-secondary' : 'hover:text-secondary'} transition duration-300 ease-in-out`}>Nearby Attractions</Link>
            <Link to="/contact-us" className={`${isActive('/contact-us') ? 'text-secondary' : 'hover:text-secondary'} transition duration-300 ease-in-out`}>Contact Us</Link>
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
              {/* <Link to="/call-for-papers" className="hover:text-secondary transition duration-300 ease-in-out" onClick={toggleMenu}>Call for Papers</Link> */}
             <Dropdown 
              name={'Paper'} 
              items={[
                {itemName:"Call For Papers",link:"/call-for-papers"},
                { itemName: "Call For special Sessions", link: "/call-for-special-sessions" },
                
              ]} 
            />
              <Link to="/important-dates" className="hover:text-secondary transition duration-300 ease-in-out" onClick={toggleMenu}>Important Dates</Link>
              <Dropdown 
                name={'Committee'} 
                items={[
                  {itemName:"Steering Committee",link:"/steering-committee"},
                  { itemName: "Advisory Committee", link: "/advisorycommittee" },
                  { itemName: "Technical Committee", link: "technical-program-committee" }, 
                ]} 
              />
              <Dropdown 
                name={'Author Info'} 
                items={[
                  { itemName: "CRC Info", link: "/crc-guidelines" }, 
                  { itemName: "Submission Guideline", link: "/submission-guidelines" }
                ]} 
              />
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
