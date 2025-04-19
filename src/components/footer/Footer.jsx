import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center space-y-4 md:space-y-2">
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-8">
          {/* <ul className="space-y-2 sm:space-y-0 flex flex-col sm:flex-row sm:space-x-6">
            <li>
              <a href="#terms" className="hover:underline text-sm md:text-base">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#payment" className="hover:underline text-sm md:text-base">
                Payment Policy
              </a>
            </li>
            <li>
              <a href="#refund" className="hover:underline text-sm md:text-base">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:underline text-sm md:text-base">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#publication" className="hover:underline text-sm md:text-base">
                Publication Policy
              </a>
            </li>
          </ul> */}
        </div>
        <p className="text-xs">
          &copy; ICRAECCT 2025 - All Rights Reserved.
        </p>
        <p className="text-xs">
          Maintained by UIET CSJM University.
        </p>
        <p className="text-xs text-gray-300">
          Developed By <a href="https://theprince29.netlify.app" target="_blank">theprince29</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
