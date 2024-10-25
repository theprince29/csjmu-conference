import React from "react";

const Registration = () => {
  return (
    <div className="mb-4">
      <div className="max-w-4xl mx-auto mt-12 text-center px-4">
        <h1 className="text-4xl font-bold text-third mb-8">REGISTRATION</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-center bg-white border-collapse shadow-lg">
            <thead className="bg-third text-white">
              <tr>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-base sm:text-xl font-semibold border border-gray-300">
                  CATEGORY
                </th>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-base sm:text-xl font-semibold border border-gray-300">
                  EARLY BIRD REGISTRATION
                </th>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-base sm:text-xl font-semibold border border-gray-300">
                  REGISTRATION AFTER DUE DATE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-sm sm:text-lg">
                  Industry Experts
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  INR 10,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  INR 12,000
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-sm sm:text-lg">
                  Academician
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  INR 8,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  INR 10,000
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-sm sm:text-lg">
                  Research scholars
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  INR 7,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  INR 9,000
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-sm sm:text-lg">
                  Students
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  INR 7,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  INR 9,000
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-sm sm:text-lg">
                  Foreign Participant
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  USD $200
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-sm sm:text-lg">
                  USD $250
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <a
            href="https://forms.gle/Gz7WHUXZuiW1Snnk6"
            className="text-2xl underline"
            target="_blank"
          >
            Click here to submit registration details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
