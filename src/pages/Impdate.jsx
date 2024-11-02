import React from 'react';

const Impdate = () => {
  return (
    <div className='mb-4'>
      <div className="max-w-4xl mx-auto mt-4 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-third mb-8">IMPORTANT DATES</h1>
        <table className="table-auto w-full text-left py-4 mb-8 bg-white border-collapse shadow-lg">
          <thead className="bg-third text-white">
            <tr>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-lg sm:text-xl font-semibold border border-gray-300">EVENTS</th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-lg sm:text-xl font-semibold border border-gray-300">DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-4 border border-gray-300 text-base sm:text-lg">Last Date For Abstract Submission:</td>
              <td className="px-4 py-4 border border-gray-300 text-base sm:text-lg">10 December 2024</td>
            </tr>
            <tr className='bg-gray-200'>
              <td className="px-4 py-4 border border-gray-300 text-base sm:text-lg">Notification of Tentative Acceptance:</td>
              <td className="px-4 py-4 border border-gray-300 text-base sm:text-lg">20  December 2024</td>
            </tr>
            <tr>
              <td className="px-4 py-4 border border-gray-300 text-base sm:text-lg">Last Date for Final Paper Submission:</td>
              <td className="px-4 py-4 border border-gray-300 text-base sm:text-lg">15 January 2025</td>
            </tr>
            <tr className='bg-gray-200'>
              <td className="px-4 py-4 border border-gray-300 text-base sm:text-lg">Notification of Acceptance:</td>
              <td className="px-4 py-4 border border-gray-300 text-base sm:text-lg">15 February 2025</td>
            </tr>
            <tr>
              <td className="px-4 py-4 border border-gray-300 text-base sm:text-lg">Last Date for Registration:</td>
              <td className="px-4 py-4 border border-gray-300 text-base sm:text-lg">15 March 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Impdate;
