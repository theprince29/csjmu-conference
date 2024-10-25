import React from "react";
import banner from '../../assets/CSJMU.png'
const Header = () => {
  return (
    <header className=" header bg-white text-dark py-8 px-4 pb-0">
      <div className="max-w-4xl mx-auto text-center">
      <div className="flex justify-center items-center">
          <img src={banner} alt="" className="h-full w-full object-contain rounded-xl" />
      </div>
        <h1 className="text-3xl font-bold mb-4">
          "International Conference on Recent Advances in Emerging Computing and
          Communication Technologies"
          <br />
          <span className="text-primary"> (ICRAECCT) - 2025 Hybrid Mode</span>
          <br />
        </h1>
        <div>
          {/* <h2 className="italic pb-4 text-purple-800 font-bold">
            <span className="text-lg">International Conference</span> <br />
             on 
             <br />
             <span className="text-lg">Recent Advances in Emerging Computing</span>
            <span className="text-lg">and Communication Technologies</span>
          </h2> */}

          <p className="font-semibold text-purple-700 text-lg">
            Jointly organized by:
          </p>
          <ul className="list-none list-inside mt-4 text-gray-700 font-semibold">
            <li>Department of Computer Application</li>
            <li>Department of Computer Science & Engineering</li>
            <li>Department of Electronics and Communication Engineering</li>
            <li>
              <span className="text-2xl">
                School of Engineering and Technology (UIET)
              </span>
            </li>
          </ul>
          <div className="text-2xl  bg-primary">
            <p className="text-md text-white ">
              Conference Date: 11th & 12th April, 2025
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
