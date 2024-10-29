import React from "react";

const Registration = () => {
  return (
    <div className="mb-4">
      <div className="max-w-4xl mx-auto mt-12 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-third mb-8">REGISTRATION</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-center bg-white border-collapse shadow-lg">
            <thead className="bg-third text-white">
              <tr>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold border border-gray-300">
                  CATEGORY
                </th>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold border border-gray-300">
                  EARLY BIRD REGISTRATION
                </th>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold border border-gray-300">
                  REGISTRATION AFTER DUE DATE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-xs sm:text-sm">
                  Industry Experts
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 10,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 12,000
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-xs sm:text-sm">
                  Academician
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 8,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 10,000
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-xs sm:text-sm">
                  Research Scholars
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 7,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 9,000
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-xs sm:text-sm">
                  Students
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 7,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 9,000
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-xs sm:text-sm">
                  Foreign Participant (offline mode)
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  USD $300
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  USD $350
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-xs sm:text-sm">
                  Foreign Participant (online mode)
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  USD $100
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  USD $150
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-100 border-4 border-third p-6 rounded-lg text-dark mt-10">
          <div className="bg-third text-center text-white py-3 text-lg sm:text-xl font-bold rounded-md">
            Mode of Payment
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start mt-6">
            <div className="text-left space-y-2">
              <p>
                <strong>
                  Registration fee can be paid through Google Pay.
                </strong>
              </p>
              <p>
                Name of Account Holder: <strong>ICRAECCT</strong>
              </p>
              <p>
                Account Number: <strong>xxxx xxxx xxxx xxxx</strong>
              </p>
              <p>
                Bank Name: <strong>Bank of Broada</strong>
              </p>
              <p>
                Branch: <strong>CSJM University</strong>
              </p>
              <p>
                IFSC: <strong>BARBOCSUKAN</strong>
              </p>
            </div>
            <div className="text-center flex flex-col items-center mt-4 md:mt-0 md:ml-4">
              <p>Scan to pay</p>
              <img
                className="mt-2 h-48"
                src="/images/qr-code.jpg"
                alt="QR Code"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <a
            href="https://forms.gle/Gz7WHUXZuiW1Snnk6"
            className="text-lg sm:text-2xl underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to submit registration details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
