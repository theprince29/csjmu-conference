import React from "react";

const Header = () => {
  return (
    <header className="bg-white text-dark py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">
          International Conference on Recent Advances in Emerging Computing and
          Communication Technologies
          <br />
          <span className="text-primary"> (ICRAECCT) - 2025 </span>
          <br />
          School of Engineering and Technology (UIET)
        </h1>
        <div>
          <h2 className="italic pb-4 text-purple-800 font-bold">
            <span className="text-lg">International Conference</span> <br />
             on 
             <br />
             <span className="text-lg">Recent Advances in Emerging Computing</span>
            <span className="text-lg">and Communication Technologies</span>
          </h2>
          <p className="text-md text-purple-700 underline mb-4">
            Conference Date: 11th & 12th April, 2025
          </p>
          <p className="font-semibold text-purple-700 text-lg">
            Jointly organized by:
          </p>
          <ul className="list-none list-inside mt-4 space-y-2">
            <li>Department of Computer Application</li>
            <li>Department of Computer Science & Engineering</li>
            <li>Department of Electronics and Communication Engineering</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
