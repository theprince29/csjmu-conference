import React from 'react'

const Impdate = () => {
  return (
    <div className='mb-4'>
      <div className="max-w-4xl mx-auto mt-4 text-center">
        <h1 className="text-4xl font-bold text-third mb-8">IMPORTANT DATES</h1>
        <table className="table-auto w-full text-left bg-white border-collapse shadow-lg">
            <thead className="bg-third text-white">
                <tr>
                    <th className="px-6 py-4 text-xl font-semibold border border-gray-300">EVENTS</th>
                    <th className="px-6 py-4 text-xl font-semibold border border-gray-300">DATE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-6 py-4 border border-gray-300 text-lg">Last Date Fot Abstract Submission: </td>
                    <td className="px-6 py-4 border border-gray-300 text-lg">
                       
                        10 December 2024
                    </td>
                </tr>
                <tr className='bg-gray-200'>
                    <td className="px-6 py-4 border border-gray-300 text-lg">Notification of tentative acceptance: </td>
                    <td className="px-6 py-4 border border-gray-300 text-lg"> 20 November 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 border border-gray-300 text-lg">Last date for final paper submission: </td>
                    <td className="px-6 py-4 border border-gray-300 text-lg">15 January 2025</td>
                </tr>
                <tr className='bg-gray-200'>
                    <td className="px-6 py-4 border border-gray-300 text-lg">Notification of acceptance :</td>
                    <td className="px-6 py-4 border border-gray-300 text-lg">15 Febuary 2025</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 border border-gray-300 text-lg">Last date for registration :</td>
                    <td className="px-6 py-4 border border-gray-300 text-lg">15 March 2025</td>
                </tr>
              
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Impdate
