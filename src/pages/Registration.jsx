import React from "react";
import { Helmet } from "react-helmet-async";
const Registration = () => {
  return (
    <div className="mb-4">
      <Helmet>
        <title>Registration - ICRAECCT'2025 Conference</title>
        <meta
          name="description"
          content="Register for ICRAECCT 2025 and participate in the technical program, get a certificate, and access to keynotes and networking sessions."
        />
        <meta
          name="keywords"
          content="ICRAECCT 2025, registration, technical conference, India conference, research conference, online registration, conference fee, Scopus indexed conference, keynote speakers, networking sessions"
        />
      </Helmet>
      <div className="max-w-4xl mx-auto mt-12 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-third mb-8">
          REGISTRATION
        </h1>
        <div className="text-left mb-6">
          <div
            className="mb-2 w-100 border"
            style={{ height: "1px", borderColor: "#1B305C" }}
          ></div>

          <p className="font-semibold text-sm">
            Author/Co-Author Registration Fee Includes:
          </p>
          <p className="text-sm font-semibold">
            Participation in the technical program, participation certificate to
            the presenter, and Pre-Proceeding e-copy.
          </p>
          <div
            className="mt-2 w-100 border"
            style={{ height: "1px", borderColor: "#1B305C" }}
          ></div>

          <p className="mt-4 font-semibold">Registration Process:</p>
          <p className="text-sm">
            Once your paper is accepted, the registration process begins. You
            have to complete the following steps:
          </p>

          <ol className="list-decimal list-inside mt-2 text-sm">
            <li>
              <strong>Step 1 - Registration Fee:</strong> It is mandatory for at
              least one author of an accepted paper to register in order for the
              paper to appear in the proceedings and be included in the
              Technical Program. If an author has more than one accepted paper,
              there will be a discount on additional paper registration. Fee
              includes listing the papers online in Scopus indexed conference
              proceedings, lunch, and morning and evening snacks.
            </li>
          </ol>

          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Access to Keynote talks</li>
            <li>Access to paper presentation sessions</li>
            <li>Networking sessions</li>
            <li>Conference lunch and refreshment*</li>
            <li>Tea and Coffee Breaks*</li>
            <li>Conference kit*</li>
            <li>Pre-Proceeding (collection of Abstracts only)*</li>
            <li>Participation Certificate</li>
          </ul>

          <p className="mt-4 text-sm">
            Note: The conference will be in Hybrid Mode.
          </p>

          <p className="mt-4 font-semibold text-lg">
            Discount for Women Researchers:
          </p>
          <p className="text-sm">
            ICRAECCT 2025 is committed to empowering women researchers. If the
            paper includes a female author/coauthor, the paper is eligible for a
            10% discount on total registration fees.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-center bg-white border-collapse shadow-lg">
            <thead className="bg-third text-white">
              <tr>
                <th
                  rowSpan="2"
                  className="px-2 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold border border-gray-300"
                >
                  CATEGORY
                </th>
                <th
                  colSpan="2"
                  className="px-2 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold border border-gray-300"
                >
                  EARLY BIRD REGISTRATION
                </th>
                <th
                  colSpan="2"
                  className="px-2 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold border border-gray-300"
                >
                  REGISTRATION AFTER DUE DATE
                </th>
              </tr>
              <tr>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold border border-gray-300">
                  Offline Mode
                </th>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold border border-gray-300">
                  Online Mode
                </th>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold border border-gray-300">
                  Offline Mode
                </th>
                <th className="px-2 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold border border-gray-300">
                  Online Mode
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-xs sm:text-sm">
                  Industry Experts
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 12,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 10,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 14,000
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
                  INR 10,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 8,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 12,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 10,000
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-xs sm:text-sm">
                  Research Scholars/Students
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 9,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 7,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 11,000
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  INR 9,000
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-xs sm:text-sm">
                  Foreign participant (Industry Expert/ Academician)
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  USD $300
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  USD $200
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  USD $350
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  USD $250
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 sm:px-6 sm:py-4 text-left border border-gray-300 text-xs sm:text-sm">
                  Foreign Participant (research scholar/student)
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  USD $200
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  USD $100
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  USD $250
                </td>
                <td className="px-2 py-3 sm:px-6 sm:py-4 border border-gray-300 text-xs sm:text-sm">
                  USD $150
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-sm mx-auto bg-gray-100 border-4 border-third p-6 rounded-lg text-dark mt-10">
          <a
            href="https://paytm.me/PYTMPS/mLHf14E"
            className="px-6 py-2 bg-third text-white font-semibold rounded-lg inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pay Your Registration Fee
          </a>

          {/* <div className="bg-third text-center text-white py-3 text-lg sm:text-xl font-bold rounded-md">
            Mode of Payment
          </div> */}
          {/* <div className="flex flex-col md:flex-row justify-between items-start mt-6">
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
          </div> */}
          <p className="mt-4 text-sm text-gray-500">
            * You will be redirected to the Paytm website to complete your
            payment.
          </p>
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
