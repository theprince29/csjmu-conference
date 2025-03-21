import React from "react";
import { Helmet } from "react-helmet-async";
const CallForSponsor = () => {
  return (
    <div className="bg-gray-100 p-8 text-left mt-4 rounded-lg shadow-md">
      <Helmet>
        <title>Call for Sponsorship - ICRAECCT'2025 Conference</title>
        <meta 
          name="description" 
          content="ICRAECCT-2025 invites sponsorship for its international conference focused on emerging computing and communication technologies, AI, IoT, 5G, and machine learning. Join us as a sponsor and enhance your brand visibility." 
        />
        <meta 
          name="keywords" 
          content="ICRAECCT 2025, Sponsorship, AI, IoT, 5G, Machine Learning, Emerging Technologies, Conference Sponsorship, CSJM University Kanpur" 
        />
      </Helmet>
      <h1 className="text-3xl text-center font-semibold mb-6 text-third">
        CALL FOR SPONSORSHIP
      </h1>

      <div className="text-md text-left text-gray-700">
        <p className="mb-2">
          With Greetings from the Department of Computer Application, Department
          of CSE & Department of ECE, UIET, CSJM University Kanpur, and Chairs
          of ICRAECCT - 2025.
        </p>
        <p className="mb-2 text-justify">
          This conference will be one of the prominent meetings of international
          experts in the field exclusively dedicated to the advances and
          innovations in emerging computing and communication technologies,
          artificial intelligence, robotics, automation, signal processing and
          many more. International Conference on Recent Advances in Emerging
          Computing and Communication Technologies (ICRAECCT-2025) brings
          together global experts to discuss advancements in fields like AI,
          IoT, 5G and machine learning. This conference emphasizes the role of
          emerging technologies in reshaping industries, enhancing operational
          efficiency, and tackling real-world challenges.Participants, including
          researchers, practitioners, and industry professionals, will explore
          breakthroughs in data security, network reliability, and computational
          scalability—essential aspects for next-generation solutions in sectors
          such as healthcare, finance, and urban infrastructure. In addition to
          technical sessions and workshops, the conference encourages
          interdisciplinary collaborations, aiming to develop technology that is
          both impactful and ethically sound. Attendees will gain insights into
          the social implications of technological advancements, fostering
          discussions that look beyond theoretical achievements to prioritize
          accessible, real-world applications. This conference is designed to
          facilitate networking, innovation, and actionable knowledge-sharing,
          setting the foundation for future advancements in computing and
          communication.
        </p>
        <p className="mb-2 text-justify">
          This conference involves contributions in inter-disciplinary fields
          such as Role of Artificial Intelligence, Machine Learning, Emerging
          computing and communication technologies in different areas involving
          education, healthcare, management, business, agriculture and so on.
          ICRAECCT-2025 program comprises state of art keynote addresses,
          industry-led presentations as well as extensive networking
          opportunities, creating a global networking platform for researchers,
          industrialists and start-up companies to expand valuable opinion and
          insight from distinguished experts and other attendees.
        </p>
        <p>
          We invite sponsorship for the said conference; interested sponsors are
          requested to be a part of this conference and kindly intimate us via{" "}
        </p>

        <ul className="list-inside list-disc mb-2">
          <li>
            Email:{" "}
            <a
              href="mailto:icraecct@csjmu.ac.in"
              className="text-primary underline"
            >
              icraecct@csjmu.ac.in
            </a>
            ,{" "}
            <a
              href="mailto:rabins@csjmu.ac.in"
              className="text-primary underline"
            >
              rabins@csjmu.ac.in
            </a>
            ,{" "}
            <a
              href="mailto:alok@csjmu.ac.in"
              className="text-primary underline"
            >
              alok@csjmu.ac.in
            </a>
            ,{" "}
            <a
              href="mailto:ajeetsrivastava@csjmu.ac.in"
              className="text-primary underline"
            >
              ajeetsrivastava@csjmu.ac.in
            </a>
          </li>
          <li>
            Phone: Prof. Rabins Porwal +91 93698 84977, Dr. Alok Kumar +91 70077
            13064, Dr. Ajeet Srivastava +91 93075 11919
          </li>
        </ul>
        <p className="mb-2">
          <a
            href="https://forms.gle/gcBN42ZiQGmLfUDh7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 text-xl underline"
          >
            Fill the sponsorship form here
          </a>
        </p>
        <SponsorshipIntro />
        
        
        <h2 className="text-2xl text-center font-semibold mb-6 text-third mt-4 uppercase">
          Sponsorship Categories
        </h2>
        <p>
          <strong>Details of sponsorship categories are as follows:</strong>
        </p>
        <p>
          <strong>
            There are currently five types of sponsorships available for
            ICRAECCT-2025
          </strong>
        </p>
         <SponsorshipCategory
          type="A) Platinum"
          amount="Rupees 4 Lakhs and above"
          benefits={[
            "3 Complimentary conference registrations",
            "Complimentary Lunch, Coffee Break, and Dinner",
            "Acknowledgement during the opening and closing ceremony",
            "Company logo on website with hyperlink",
            "Logo in social media publications for the event",
            "Logo in booklets, flyers, and proceedings",
            "20 Minutes presentation opportunity about company’s products/services",
          ]}
        />
        <SponsorshipCategory
          type="B) Diamond"
          amount="Rupees 2 Lakhs and above"
          benefits={[
            "2 Complimentary conference registrations",
            "Complimentary Lunch, Coffee Break, and Dinner",
            "Acknowledgement during the opening and closing ceremony",
            "Company logo on website with hyperlink",
            "Logo in social media publications for the event",
            "Logo in booklets, flyers, and proceedings",
            "10 Minutes presentation opportunity about company’s products/services",
          ]}
        />
        <SponsorshipCategory
          type="C) Gold"
          amount="Rupees 1.5 lakh and above"
          benefits={[
            "2 Complimentary conference registrations",
            "Complimentary Lunch, Coffee Break, and Dinner",
            "Acknowledgement during the opening and closing ceremony",
            "Company logo on website with hyperlink",
            "Logo in social media publications for the event",
            "Logo in booklets, flyers, and proceedings",
          ]}
        />
        <SponsorshipCategory
          type="D) Silver"
          amount="Rupees 1 lakh and above"
          benefits={[
            "Acknowledgement during the opening and closing ceremony",
            "Complimentary Lunch, Coffee Break, and Dinner",
            "Company logo on website with hyperlink",
            "Logo in social media publications for the event",
            "Logo in booklets, flyers, and proceedings",
          ]}
        />
        {/* <SponsorshipCategory
          type="E) Bronze"
          amount="Less than Rupees 10,000"
          benefits={[
            "Acknowledgement during the opening and closing ceremony",
            "Complimentary Lunch, Coffee Break, and Dinner",
            "Company logo on website with hyperlink",
            "Logo in social media publications for the event",
            "Logo in booklets, flyers, and proceedings",
          ]}
        /> */}
        <SponsorshipForm />
        {/* <p>
          <strong>Payment Link:</strong>
          <a
            href="https://paytm.me/PYTMPS/mLHf14E"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline ml-2"
          >
            Pay Here
          </a>
        </p> */}
      </div>
    </div>
  );
};

const SponsorshipIntro = () => (
  <div className="text-md text-gray-700 mb-6">
    <p>
      With Greetings from the Department of Computer Application, Department of
      CSE & Department of ECE, UIET, CSJM University Kanpur, and Chairs of
      ICRAECCT - 2025.
    </p>

    <p>
      The International Conference on Recent Advances in Emerging Computing and
      Communication Technologies (ICRAECCT-2025) will be a premier meeting of
      global experts in fields such as AI, IoT, 5G, and machine learning. It
      emphasizes how emerging technologies are reshaping industries, enhancing
      operational efficiency, and addressing real-world challenges.
    </p>

    <p className="mt-4 font-semibold">
      With best regards,
      <br />
      Chairs of ICRAECCT-2025
    </p>
  </div>
);

const SponsorshipForm = () => (
  <div className="mt-8  text-md text-gray-700">
    <h2 className="text-2xl text-center font-semibold mb-6 text-third mt-4 uppercase">
      Form for Sponsorship Statement
    </h2>
    <p>
      I, the undersigned, representing the company/organization indicated below,
      declare that we are willing to sponsor the Conference with the following
      specifications.
    </p>
    <p className="mt-2 ">
      Information about the Sponsor Name of the company/organization:
      __________________
    </p>
    <ul className="list-none list-inside ">
      <li>Address: __________________</li>
      <li>Website: __________________</li>
      <li>Name of contact person: __________________</li>
      <li>Email of contact person: __________________</li>
      <li>Telephone number of contact person: __________________</li>
      <li>Amount: __________________</li>
      <li>
        Sponsorship Type: Diamond: ✷ | Platinum: ✷ | Gold: ✷ | Silver: ✷ 
      </li>
      <li>
        <strong>Date:</strong> __________________
      </li>
      <li>
        <strong>Signature:</strong> __________________
      </li>
    </ul>
    <p className="mt-4">
      Important: You must include your payment confirmation. • Reference of
      payment
    </p>
    <p>
      <strong>Payment Link:</strong>
      <a
        href="https://paytm.me/PYTMPS/mLHf14E"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline ml-2"
      >
        Pay Here
      </a>
    </p>
  </div>
);

const SponsorshipCategory = ({ type, amount, benefits }) => (
  <div className="mt-4">
    <h3 className="text-xl font-bold">
      {type} Sponsorship: {amount}
    </h3>
    <ul className="list-disc list-inside">
      {benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>
  </div>
);

export default CallForSponsor;
