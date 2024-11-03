import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Dropdown from "../dropdown/Dropdown";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isSticky }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isPaperOpen, setIsPaperOpen] = useState(false);
  const [isCommitteeOpen, setIsCommitteeOpen] = useState(false);
  const [isAuthorInfoOpen, setIsAuthorInfoOpen] = useState(false);
  const toggleDropdown = (setDropdownState) => {
    setDropdownState((prev) => !prev);
  };

  const isActive = (path) => location.pathname === path;
  return (
    <>
      <nav
        className={`${
          isSticky ? "fixed top-0 left-0 z-50" : ""
        } bg-primary text-white w-full py-3 shadow-md rounded transition duration-300`}
      >
        <div className="container mx-auto flex lg:justify-center items-center px-4">
          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden ">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
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
          <div
            className={`hidden lg:flex space-x-4 justify-around text-base font-semibold ${
              isOpen ? "hidden" : "block"
            }`}
          >
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-secondary" : "hover:text-secondary"
              } transition duration-300 ease-in-out`}
            >
              Home
            </Link>
            {/* <Link to="/call-for-papers" className={`${isActive('/call-for-papers') ? 'text-secondary' : 'hover:text-secondary'} transition duration-300 ease-in-out`}>Call for Papers</Link> */}
            <Dropdown
              name={"Calls"}
              items={[
                { itemName: "Call For Papers", link: "/call-for-papers" },
                {
                  itemName: "Call For Special Sessions",
                  link: "/call-for-special-sessions",
                },
                {
                  itemName: "Call for Sponsorship",
                  link: "#",
                },
              ]}
            />
            <Link
              to="/important-dates"
              className={`${
                isActive("/important-dates")
                  ? "text-secondary"
                  : "hover:text-secondary"
              } transition duration-300 ease-in-out`}
            >
              Important Dates
            </Link>
            <Dropdown
              name={"Committee"}
              items={[
                { itemName: "Steering Committee", link: "/steering-committee" },
                { itemName: "Advisory Committee", link: "/advisorycommittee" },
                {
                  itemName: "Technical Committee",
                  link: "technical-program-committee",
                },
              ]}
            />
            <Dropdown
              name={"Author Info"}
              items={[
                { itemName: "CRC Info", link: "/crc-guidelines" },
                {
                  itemName: "Submission Guideline",
                  link: "/submission-guidelines",
                },
              ]}
            />
            <Link
              to="/registration"
              className={`${
                isActive("/registration")
                  ? "text-secondary"
                  : "hover:text-secondary"
              } transition duration-300 ease-in-out`}
            >
              Registration
            </Link>
            <Link
              to="/publications"
              className={`${
                isActive("/publications")
                  ? "text-secondary"
                  : "hover:text-secondary"
              } transition duration-300 ease-in-out`}
            >
              Publications
            </Link>
            <Link
              to="/speakers"
              className={`${
                isActive("/speakers")
                  ? "text-secondary"
                  : "hover:text-secondary"
              } transition duration-300 ease-in-out`}
            >
              Speakers
            </Link>
            <Link
              to="/gallery"
              className={`${
                isActive("/gallery") ? "text-secondary" : "hover:text-secondary"
              } transition duration-300 ease-in-out`}
            >
              Gallery
            </Link>
            <Link
              to="/nearby-attractions"
              className={`${
                isActive("/nearby-attractions")
                  ? "text-secondary"
                  : "hover:text-secondary"
              } transition duration-300 ease-in-out`}
            >
              Nearby Attractions
            </Link>
            <Link
              to="/contact-us"
              className={`${
                isActive("/contact-us")
                  ? "text-secondary"
                  : "hover:text-secondary"
              } transition duration-300 ease-in-out`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      {/* Sidebar for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleMenu}
        >
          <div
            className="bg-primary text-white w-64 h-full absolute top-0 left-0 p-4 transition transform"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-white focus:outline-none mb-4 float-right "
              onClick={toggleMenu}
            >
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

            <div className="flex flex-col space-y-4 text-md text-left mt-4 p-4 ">
              <Link
                to="/"
                className={`${
                  isActive("/") ? "text-secondary" : "hover:text-secondary"
                } transition duration-300 ease-in-out`}
                onClick={toggleMenu}
              >
                Home
              </Link>

              {/* Manually controlled dropdowns in the sidebar */}
              <div>
                <button
                  onClick={() => toggleDropdown(setIsPaperOpen)}
                  className="hover:text-secondary flex justify-between transition duration-300"
                >
                  <span>Calls</span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="ml-4 h-5 w-5 text-white-400"
                  />
                </button>

                {isPaperOpen && (
                  <ul className="list bg-primary-600 p-2 rounded ml-4 text-sm">
                    <li className="pb-2"><Link
                      to="/call-for-papers"
                      className="hover:text-secondary  transition duration-300"
                      onClick={toggleMenu}
                    >
                      Call For Papers
                    </Link></li>
                    <li className="pb-2"><Link
                      to="/call-for-special-sessions"
                      className="hover:text-secondary  transition duration-300"
                      onClick={toggleMenu}
                    >
                      Call For Special Sessions
                    </Link></li>
                    <li><Link
                      to="#"
                      className="hover:text-secondary  transition duration-300"
                      onClick={toggleMenu}
                    >
                      Call for Sponsorship
                    </Link></li>
                  </ul>
                )}
              </div>

              <Link
                to="/important-dates"
                className={`${
                  isActive("/important-dates")
                    ? "text-secondary"
                    : "hover:text-secondary"
                } transition duration-300 ease-in-out`}
                onClick={toggleMenu}
              >
                Important Dates
              </Link>

              <div>
                <button
                  onClick={() => toggleDropdown(setIsCommitteeOpen)}
                  className="hover:text-secondary flex justify-between transition duration-300"
                >
                  <span>Committee</span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="ml-4 h-5 w-5 text-white-400"
                  />
                </button>
                {isCommitteeOpen && (
                  <ul className="list ml-4 bg-primary-600 p-2 rounded  text-sm">
                    <li className="pb-2">
                    <Link
                      to="/steering-committee"
                      className="hover:text-secondary transition duration-300 "
                      onClick={toggleMenu}
                    >
                      Steering Committee
                    </Link>
                    </li>
                    <li className="pb-2">
                    <Link
                      to="/advisory-committee"
                      className="hover:text-secondary transition duration-300"
                      onClick={toggleMenu}
                    >
                      Advisory Committee
                    </Link>
                    </li>
                    <li>
                    <Link
                      to="/technical-program-committee"
                      className="hover:text-secondary transition duration-300"
                      onClick={toggleMenu}
                    >
                      Technical Committee
                    </Link>
                    </li>
                  </ul>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown(setIsAuthorInfoOpen)}
                  className="hover:text-secondary flex justify-between transition duration-300"
                >
                  <span>Author Info</span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="ml-4 h-5 w-5 text-white-400"
                  />
                </button>
                {isAuthorInfoOpen && (
                  <ul className="list bg-primary-600 ml-4 rounded p-2 text-sm">
                    <li className="pb-2">
                    <Link
                      to="/crc-guidelines"
                      className="hover:text-secondary transition duration-300"
                      onClick={toggleMenu}
                    >
                    CRC Info
                    </Link>
                    </li>
                   <li> <Link
                      to="/submission-guidelines"
                      className={"hover:text-secondary transition duration-300"}
                      onClick={toggleMenu}
                    >
                      Submission Guideline
                    </Link></li>
                  </ul>
                )}
              </div>

              <Link
                to="/registration"
                className={`${
                  isActive("/registeration")
                    ? "text-secondary"
                    : "hover:text-secondary"
                } transition duration-300 ease-in-out`}
                onClick={toggleMenu}
              >
                Registration
              </Link>
              <Link
                to="/publications"
                className={`${
                  isActive("/publications")
                    ? "text-secondary"
                    : "hover:text-secondary"
                } transition duration-300 ease-in-out`}
                onClick={toggleMenu}
              >
                Publications
              </Link>
              <Link
                to="/speakers"
                className={`${
                  isActive("/speakers")
                    ? "text-secondary"
                    : "hover:text-secondary"
                } transition duration-300 ease-in-out`}
                onClick={toggleMenu}
              >
                Speakers
              </Link>
              <Link
                to="/gallery"
                className={`${
                  isActive("/gallery")
                    ? "text-secondary"
                    : "hover:text-secondary"
                } transition duration-300 ease-in-out`}
                onClick={toggleMenu}
              >
                Gallery
              </Link>
              <Link
                to="/nearby-attractions"
                className={`${
                  isActive("/nearby-attractions")
                    ? "text-secondary"
                    : "hover:text-secondary"
                } transition duration-300 ease-in-out`}
                onClick={toggleMenu}
              >
                Nearby Attractions
              </Link>
              <Link
                to="/contact-us"
                className={`${
                  isActive("/contact-us")
                    ? "text-secondary"
                    : "hover:text-secondary"
                } transition duration-300 ease-in-out`}
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
