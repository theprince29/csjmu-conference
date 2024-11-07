import React, { useState } from 'react';

const AboutConference = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <section className="bg-gray-100 p-8 mt-4 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-primary">About the Conference</h2>
      
      <div className="text-md text-gray-700 text-justify">
        {/* Always visible content */}
        <p className="mb-2">
          Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur, is delighted to announce it's 
          <strong><em> First International Conference on Recent Advances in Emerging Computing and Communication 
          Technologies (IC-RAECCT 2025)</em></strong>, to be held on April 11th-12th, 2025, at our campus.
        </p>
        
          <p className="mb-2">
            Jointly organized by the Department of Computer Applications, the Department of Computer 
            Science and Engineering, and the Department of Electronics and Communication Engineering, 
            IC-RAECCT 2025 aims to create an international platform for researchers, academics, industry 
            professionals, and students to showcase and discuss pioneering developments in computing and 
            communication technologies.
          </p>
        {/* Conditionally rendered content */}
        <div className={`${showFullContent ? 'block' : 'hidden'} md:block`}>
          <p className="mb-2">
            As technology rapidly advances, this conference offers a unique opportunity to explore 
            critical areas shaping the future, such as artificial intelligence, machine learning, IoT, 
            cybersecurity, 5G and beyond, data science, and embedded systems.
          </p>
          <p className="mb-2">
            Attendees can look forward to a dynamic lineup, featuring keynote addresses from leading 
            experts, technical presentations, hands-on workshops, and thought-provoking panel discussions. 
            Designed to foster interdisciplinary collaboration and encourage the exchange of knowledge, 
            IC-RAECCT 2025 will dive into both academic and industry-relevant challenges and solutions.
          </p>
          <p className='mb-2'>
            Join us for an enriching experience at IC-RAECCT 2025, where innovation, networking, and 
            learning converge to drive the future of computing and communication technologies forward.
          </p>
        </div>

        {/* Read More / Show Less button */}
        <button
          onClick={() => setShowFullContent(!showFullContent)}
          className="text-primary font-semibold hover:underline mt-2 md:hidden"
        >
          {showFullContent ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </section>
  );
};

export default AboutConference;
