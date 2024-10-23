import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <a href="/" className="hover:underline">HOME</a>
          <a href="/call-for-papers" className="hover:underline">CALL FOR PAPERS</a>
          <a href="/important-dates" className="hover:underline">IMPORTANT DATES</a>
          <a href="/committee" className="hover:underline text-yellow-500 underline">COMMITTEE</a> {/* Highlighted in orange/yellow */}
          <a href="/author-info" className="hover:underline">AUTHOR INFO</a>
          <a href="/program" className="hover:underline">PROGRAM</a>
          <a href="/publications" className="hover:underline">PUBLICATIONS</a>
          <a href="/speakers" className="hover:underline">SPEAKERS</a>
          <a href="/gallery" className="hover:underline">GALLERY</a>
          <a href="/nearby-attractions" className="hover:underline">NEARBY ATTRACTIONS</a>
          <a href="/contact-us" className="hover:underline">CONTACT US</a>
        </div>
        <div className="text-sm italic">Technical Partner</div>
      </div>
    </nav>
  );
};

export default Navbar;
