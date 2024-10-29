import React from "react";

const Contactus = () => {
  return (
    <div className="mb-4">
      <div className="max-w-4xl mx-auto mt-12 text-center px-4">
        <h1 className="text-4xl font-bold text-third mb-8">CONTACT - US</h1>

        <h3 className="text-lg sm:text-xl">Conference Email: <a href="mailto:icraecct@csjmu.ac.in" className="text-primary underline">icraecct@csjmu.ac.in</a></h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-center bg-white border-collapse shadow-lg">
            <thead className="bg-third text-white">
              <tr>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-base sm:text-xl font-semibold border border-gray-300">
                  Sr.
                </th>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-base sm:text-xl font-semibold border border-gray-300">
                  NAME
                </th>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-base sm:text-xl font-semibold border border-gray-300">
                  E-MAIL
                </th>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-base sm:text-xl font-semibold border border-gray-300">
                  MOBILE NO.
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-sm sm:text-lg">
                1.
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  Prof. Rabins Porwal
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  Rabins@csjmu.ac.in
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  +91 936 988 4977
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-sm sm:text-lg">
                2.
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  Dr. Alok Kumar
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  alok@csjmu.ac.in
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  +91 700 771 3064
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-sm sm:text-lg">
                3.
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  Dr. Ajeet Kumar Srivastava
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  ajeet@csjmu.ac.in
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  +91 831 632 2800
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
