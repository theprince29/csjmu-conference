import React from "react";
import banner from "../../assets/CSJMU.png";
const Header = () => {
  return (
<header className="header bg-white text-dark py-6 px-2 sm:py-8 sm:px-4 pb-0">
  <div className="max-w-4xl mx-auto text-center">
    <div className="flex justify-center items-center">
      <img
        src={banner}
        alt="Conference Banner"
        className="h-40 w-full object-contain rounded-xl sm:h-full"
      />
    </div>
    <h1 className="text-2xl font-bold my-4 sm:text-3xl">
      "International Conference on Recent Advances in Emerging Computing and Communication Technologies"
      <br />
      <span className="text-primary text-lg sm:text-xl"> (ICRAECCT) - 2025 Hybrid Mode</span>
      <br />
    </h1>
    <div>
      <p className="font-semibold text-purple-700 text-md sm:text-lg">
        Jointly organized by:
      </p>
      <ul className="list-none list-inside mt-4 text-gray-700 font-semibold text-sm sm:text-base">
        <li>Department of Computer Application</li>
        <li>Department of Computer Science & Engineering</li>
        <li>Department of Electronics and Communication Engineering</li>
        <li>
          <span className="text-lg sm:text-2xl mb-2">
            School of Engineering and Technology (UIET)
          </span>
        </li>
      </ul>
      <div className="flex justify-center mt-4">
        <div className="text-lg sm:text-2xl p-2 bg-secondary rounded">
          <p className="text-sm sm:text-sm text-dark font-semibold">
            Conference Date: 11<sup>th</sup> & 12<sup>th</sup> April, 2025
          </p>
        </div>
      </div>
    </div>
  </div>
</header>
  );
};

export default Header;
