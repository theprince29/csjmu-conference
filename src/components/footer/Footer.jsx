import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center space-y-4 md:space-y-2">
        <div className="flex flex-wrap justify-center space-x-4  md:space-y-0">
          <a href="#terms" className="hover:underline text-xs md:text-base">Terms & Conditions</a>
          <a href="#payment" className="hover:underline text-xm md:text-base" >Payment Policy</a>
          <a href="#refund" className="hover:underline text-xm md:text-base">Refund Policy</a>
          <a href="#privacy" className="hover:underline text-xm md:text-base">Privacy Policy</a>
          <a href="#publication" className="hover:underline text-xm md:text-base">Publication Policy</a>
        </div>
        <p className="text-xs md:text-sm">
          Copyright © ICRAECCT 2025 - All Rights Reserved.
        </p>
        <p className="text-xs md:text-sm">
          Maintained by UIET CSJM University.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
