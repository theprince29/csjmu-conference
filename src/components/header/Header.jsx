import React from "react";
import * as Images from "../../assets";

const Header = () => {
  return (
    <header className="header bg-white text-dark py-6 px-2 sm:py-8 sm:px-4 pb-0">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center gap-4">
          <img
            src="images/icraecct-logo.png"
            alt="University Logo 1"
            className="w-20 h-20 object-contain"
          />
          <img
            src="images/logo_csjmu.png"
            alt="University Logo 2"
            className="w-24 h-24 object-contain"
          />
          <img
            src="images/logo_naac.jpg"
            alt="NAAC Logo"
            className="w-28 h-28 object-contain"
          />
          <img src={Images.FEFUlogo} alt="FEFU-logo" className="w-28 h-28 object-contain" />
          <img
            src={Images.ARADlogo}
            alt="ARAD Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
        <div className="mt-6 sm:mt-4">
          <h1 className="text-2xl font-bold my-4 sm:text-3xl">
            International Conference on Recent Advances in Emerging Computing
            and Communication Technologies
            <br />
            <span className="text-primary text-lg sm:text-xl">
              (ICRAECCT) - 2025 Hybrid Mode
            </span>
            <br />
          </h1>
          <p className="font-semibold text-third text-md sm:text-lg">
            Jointly organized by:
          </p>
          <ul className="list-none list-inside mt-4 text-gray-700 font-semibold text-sm sm:text-base">
            <li>Department of Computer Application</li>
            <li>Department of Computer Science & Engineering</li>
            <li>Department of Electronics and Communication Engineering</li>
            <li>
              <span className="text-lg sm:text-2xl mb-2 text-primary">
                School of Engineering and Technology (UIET) ,
              </span>
              <h2 className="text-2xl font-bold text-primary">
                Chhatrapati Shahu Ji Maharaj University, Kanpur (Venue partner)
              </h2>

              <p className="text-gray-600 text-base">
                UGC Category - I <br />
                Uttar Pradesh State University (Formerly Kanpur University,
                Kanpur, India)
              </p>
              
              <p className="text-primary font-semibold text-sm sm:text-base">
                in association with
              </p>
              <h2 className="text-2xl font-bold text-primary">
                Far Eastern Federal University, Russia
              </h2>
              <p>&</p>
              <h2 className="text-2xl font-bold text-primary">
                Aurel Vlaicu University of Arad, Romania
              </h2>


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
