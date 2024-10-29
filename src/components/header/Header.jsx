import React from "react";
import banner from "../../assets/CSJMU.png";

const Header = () => {
  return (
    <header className="header bg-white text-dark py-6 px-2 sm:py-8 sm:px-4 pb-0">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center flex-col sm:flex-row sm:justify-between">
          <img
            src="images/logo_csjmu.png"
            alt="University Logo 1"
            className="w-20 h-20 object-contain mb-4 sm:mb-0 sm:mr-4"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-black">
              Chhatrapati Shahu Ji Maharaj University, Kanpur
            </h1>
            <p className="text-gray-600 text-base">
              Uttar Pradesh State University (Formerly Kanpur University, Kanpur)
            </p>
          </div>
          <img
            src="images/logo_naac.jpg"
            alt="NAAC Logo"
            className="w-20 h-20 object-contain mt-4 sm:mt-0 sm:ml-4"
          />
        </div>
        <div className="mt-6 sm:mt-4">
          <h1 className="text-2xl font-bold my-4 sm:text-3xl">
            International Conference on Recent Advances in Emerging Computing and
            Communication Technologies
            <br />
            <span className="text-primary text-lg sm:text-xl">
              (ICRAECCT) - 2025 Hybrid Mode
            </span>
            <br />
          </h1>
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
