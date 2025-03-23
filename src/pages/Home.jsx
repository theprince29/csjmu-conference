import React, { useState } from "react";
import Carousel from "../components/crousels/Carousel";
import AboutUniversity from "../components/sections/about/AboutUniversity";
import AboutConference from "../components/sections/about/AboutConference";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>ICRAECCT'2025 Conference</title>
        <meta
          name="description"
          content="Welcome to International Conference on Recent Advances in Emerging Computing and Communication Technologies (IC-RAECCT 2025) at Chhatrapati Shahu Ji Maharaj University, Kanpur. Held on April 11-12, 2025, this hybrid event is organized by the Departments of Computer Applications, Computer Science & Engineering, and Electronics & Communication Engineering. Explore advancements in AI, IoT, cybersecurity, 5G, data science, and more. Engage with experts, attend workshops, and network with industry leaders at CSJMU's esteemed campus."
        />
        <meta
          name="keywords"
          content="CSJMU conference 2025, CSJM university upcoming conferences,  ICRAECCT 2025, ICRAECCT, UIET conference,CSE conference,CSE Department UIET CSJM University kanpur ,ICRAECCT 2025, computing conference, communication technologies,csjmu conference, CSJMU, Kanpur, technology advancements, academic conference, research, computing, communication"
        />
      </Helmet>
      {/* Announcements Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-3 top-1/3 transform -translate-y-1/2 rotate-90 origin-left 
             px-4 py-2 bg-third text-white font-semibold rounded-r-lg shadow-md 
             hover:bg-third transition z-10"
      >
        Announcements
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-6xl w-full sm:max-w-lg sm:w-auto md:max-w-2xl lg:max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg sm:text-xl font-semibold">Announcements</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-lg"
              >
                ✖
              </button>
            </div>
            <div className="mt-4 text-gray-700 text-left text-sm sm:text-base">
              <p className="mb-2">
                1. High-quality selected extended papers of the conference will be invited to submit for publication in the special issues of the following *journals:
              </p>
              <p className="mb-2">
                CURRENT MEDICAL IMAGING (ISSN / eISSN: 1573-4056 / 1875-6603) <br />
                (BENTHAM SCIENCE PUBLISHER) SCIE Indexed Journal
              </p>
              <p className="mb-2">
                CURRENT COMPUTER-AIDED DRUG DESIGN (ISSN / eISSN: 1573-4099 / 1875-6697) <br />
                (BENTHAM SCIENCE PUBLISHER) SCIE Indexed Journal
              </p>
              <p className="mb-2">
                2. Selected quality papers of ICRAECCT-2025 will be published as a Book Chapters in **Scopus Indexed Edited Books with IGI Global, Bentham Science, CRC Press, Wiley-Scrivener Publishers.
                (Exact Edited Book Details and Guidelines will be shared via mail to selected paper ids.)
              </p>
              <p className="mb-4">
                3. Selected papers will be published as Conference Proceedings with Elsevier SSRN (Will be notified via mail to the selected paper ids.)
              </p>
              <p className="mb-2">
                More details available about publications on:
                <span className="text-primary-600 underline break-words">
                  https://csjmu-conference.vercel.app/publications
                </span>
              </p>
              <p className="text-xs text-third-600 mt-8 sm:mt-16">
                NOTE: <br /> *Journals are Open Access and have Article Processing Charges, Authors have to bear the journal APC (or they can refer to fee waiver policy of journal) <br />
                **Inclusion in Scopus depends on paper quality and various evaluation criteria by Scopus.
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-third text-white rounded-lg hover:bg-gray-600 transition text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Carousel />
      <AboutConference />
      <AboutUniversity />
    </>
  );
};

export default Home;
