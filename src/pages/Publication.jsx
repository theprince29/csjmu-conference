import React from "react";
import Book3D from "../components/card/Book3D";
import * as Images from "../assets";

const publications = [
  {
    title: "CURRENT MEDICAL IMAGING",
    issn: "1573-4056 / 1875-6603",
    publisher: "BENTHAM SCIENCE PUBLISHER",
    indexing: "SCIE Indexed Journal",
    coverImage: "https://i.ibb.co/rR4r1t7C/Computer-Aided-Drug-Design.jpg",
    journalLink: "https://www.benthamscience.com/journal/33/indexing-agency"
  },
  {
    title: "CURRENT COMPUTER-AIDED DRUG DESIGN ",
    issn: "1573-4099 / 1875-6697",
    publisher: "BENTHAM SCIENCE PUBLISHER",
    indexing: "SCIE Indexed Journal",
    coverImage: "https://i.ibb.co/k2RCJj46/CURRENT-MEDICAL-IMAGING.jpg",
    journalLink: "https://www.benthamscience.com/journal/33/indexing-agency"
  },

];

const Publication = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="flex flex-col items-center justify-center w-full  mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-third mb-6 md:mb-8">
          PUBLICATIONS
        </h1>

        <div className="container p-4 md:p-8 lg:p-12 w-full">
          <p className="text-left mb-4 text-xl">High-quality selected extended papers of the ICRAECCT 2025 will be invited to submit for publication in the special issues of the following journals: </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="max-w-sm w-full flex flex-col justify-between bg-gray-100 shadow-md rounded-md overflow-hidden transition hover:shadow-lg"
              >

                {/* Title */}
                <div className="p-4 text-center mt-2">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight">
                    {pub.title}
                  </h2>
                </div>

                {/* Book Cover & Details */}
                <div>
                  <div className="p-4 md:p-6 flex flex-col items-center">
                    <div className="flex justify-center my-2 md:my-4">
                      <Book3D
                        className="w-full max-w-[150px] object-cover h-auto max-h-60"
                        coverImage={pub.coverImage}
                        altText={pub.title}
                      />
                    </div>
                    <p className="text-gray-600 text-sm md:text-base text-center">
                      (ISSN / eISSN: {pub.issn})
                    </p>
                    <p className="text-gray-600 text-sm md:text-base text-center">
                      ({pub.publisher}) {pub.indexing}
                    </p>
                  </div>

                  {/* Journal Link */}
                  <div className="p-4 text-center bg-gray-100">
                    <a
                      className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-third transition text-sm md:text-base"
                      href={pub.journalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Journal
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4">
            <p className="text-left text-lg text-gray-600 mb-2">
              Selected papers of ICRAECCT-2025 will be published as a Book Chapters in *Scopus Indexed Edited Books with IGI Global, Bentham Science, CRC Press, Wiley-Scrivener Publishers.
              (Exact Edited Book Details and Guidelines will be shared via mail to selected paper ids.)
            </p>
            <img src={Images.BKComing} alt="" />
          </div>
          <div className="mt-4 p-4">
            <img src={Images.BOKComing} alt="" />
            <p className="text-left text-lg text-gray-600 mt-2">
              Selected papers will be published as Conference Proceedings with Elsevier SSRN (Will be notified via mail to the selected paper ids.)
            </p>
            <p className="text-left text-lg text-gray-600">
              Selected papers will be published as conference proceedings with ISBN. (Will be notified via mail to the selected paper ids.)
            </p>

          </div>
        </div>
        <p className="text-left text-sm">*NOTE: Inclusion in Scopus depends on paper quality and various evaluation criteria by the Scopus.</p>
      </div>
    </div>
  );
};

export default Publication;



{/* <div className="max-w-lg text-center bg-white shadow-lg rounded-lg p-8 pb-0">
<p className="text-gray-700 mb-2">
  All accepted and presented papers will be published in a
  Scopus-indexed conference proceeding.**
</p>
<p className="text-primary text-4xl">Details will be shared soon</p>
<div class="flex justify-start w-full mt-4 mb-2">
  <p class="text-left text-gray-700 text-xs w-full">
    **subject to approval
  </p>
</div>
</div> */}