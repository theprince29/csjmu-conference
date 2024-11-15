import React from "react";
import { Helmet } from "react-helmet-async";
import { DocumentArrowDownIcon } from '@heroicons/react/20/solid';
const CallForSpecialSessions = () => {
  return (
    <div className="bg-gray-100 p-8 text-justify mt-4 rounded-lg shadow-md  list-inside">
      <Helmet>
        <title>Call for Special Sessions - ICRAECCT'2025 Conference</title>
        <meta name="description" content="ICRAECCT-2025 invites experts to conduct special sessions at the conference, focusing on emerging computing and communication technologies. Submit proposals by January 30, 2025." />
        <meta name="keywords" content="ICRAECCT 2025, Special Sessions, Emerging Technologies, Computing, Communication, Call for Proposals" />
      </Helmet>
      <h1 className="text-2xl text-center font-semibold mb-8 text-third uppercase">
        Call for Special Sessions
      </h1>
      <div className="mt-4 px-16 text-md text-gray-700">
        <h3 className="text-200 font-semibold mb-4">
          Invitation to Conduct Special Session in ICRAECCT-2025.
        </h3>
        <h3 className="text-200 font-semibold mb-4">Dear Sir/ Mam</h3>
        <h3 className="text-200 font-semibold mb-4">
          Greeting from ICRAECCT-2025!!!!!!!
        </h3>
        <p className="mb-4">
          The organizers of ICRAECCT-2025 are pleased to invite you to lead a
          special session at the International Conference on Recent Advances in
          Emerging Computing and Communication Technologies (ICRAECCT-2025),
          Jointly organized by: Department of Computer Application, Department
          of Computer Science & Engineering and Department of Electronics and
          Communication Engineering, School of Engineering and Technology (UIET)
          at Chhatrapati Shahu Ji Maharaj University, Kanpur, scheduled for
          April 11-12, 2025. This event aims to bring together leading
          researchers from around the world alongside industry experts to delve
          into significant and cutting-edge topics within the field.
        </p>

        <p className="mb-4">
          We would be honored to have you enhance the prestige of this
          conference as a session chair. Your expertise in identifying
          high-quality research and fostering valuable connections would greatly
          contribute to the event’s success. We look forward to your leadership
          in organizing a session that reflects the forward-thinking and
          scholarly rigor of ICRAECCT-2025.
        </p>
        <h3 className="text-200 font-semibold mb-4">
          Highlights of the conference and Special Session Benefits:
        </h3>
        <p>
          1. All accepted papers will be published in the proceedings of
          ICRAECCT-2025 (Scopus Indexed)
        </p>
        <p> 2. The minimum number of registration should be 8.</p>
        <p> 3. Opportunity to be Session Chair at the conference.</p>
        <p>
          4. Special discount for your personal paper if above conditions are
          met. (If minimum number of papers get registered in your session).
        </p>
        <p>
          5. Many international and national key note speakers will be
          delivering their lectures on latest innovative technologies in the
          conference.
        </p>
        <p className="mb-4">
          {" "}
          6. Easy accessibility of the well-connected conference venue.
        </p>
        <p className="mb-4">
          If you are interested to conduct a special session, kindly mail us the
          special session proposal at icraecct@csjmu.ac.in latest by 30th
          January 2025 as per the format attached with this mail.
        </p>

        <p className="mb-4 font-semibold">
          All the accepted papers (after double blinded peer review) will be
          published in a Scopus Indexed Conference Proceedings.
        </p>
        <p className="mb-4 font-semibold ">
          Looking to see you in ICRAECCT-2025.
        </p>
        <p className="mb-4 font-semibold "> Sincerely,</p>
        <p className="mb-4 font-semibold "> Organizer and Convener</p>
        <p className="font-semibold "> ICRAECCT-2025 </p>
      </div>
      <div className="px-16 mt-2">
        <a
          href="/docs/Special-session-CFP-Template-(ICRAECCT-2025).docx"
          download
          className="inline-block px-4 py-2 bg-third text-white rounded hover:bg-third-600 transition duration-300"
        >
          <span className="flex">Special session CFP Template
          <DocumentArrowDownIcon className="h-5 w-5 ml-2" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default CallForSpecialSessions;
