import React,{useState} from 'react';

const AboutUniversity = () => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [showFullContentuiet, setShowFullContentuiet] = useState(false);
  return (
    <section className="bg-gray-100 p-8 text-left mt-4 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-left mb-6 text-primary">
        About the University
      </h2>
      <div className="text-md text-justify text-gray-700">
        <p className='mb-2'>
          Chhatrapati Shahu Ji Maharaj University Kanpur, a premier landmark of higher education in 
          Uttar Pradesh, is named after the great social reformer Chhatrapati Shahu Maharaj, 
          also known as Rajarshi Shahu. It is a well-established and respected educational community 
          where students of all backgrounds study and work together in a congenial and encouraging 
          academic atmosphere. The university is geared to provide maximum scholastic benefit to 
          each individual student and nurture them to achieve their full potential and evolve as 
          a responsible global citizen.
        </p>
        <div className={`${showFullContent ? 'block' : 'hidden'} md:block`}>
        <p className='mb-2'>
          Chhatrapati Shahu Ji Maharaj University (CSJM University), also known as Kanpur University, 
          is a prominent public state university located in Kanpur, Uttar Pradesh. Established in 1966, 
          the university offers a variety of undergraduate, postgraduate, and doctoral programs across 
          disciplines like arts, science, commerce, law, engineering, education, and medicine. The 
          campus is large, equipped with modern infrastructure, academic buildings, hostels, a central 
          library, laboratories, and sports facilities.
        </p>
        <p className='mb-2'>
          CSJM University has many affiliated colleges spread across the state, offering courses under 
          its guidance. Programs range from traditional degrees like B.A., B.Sc., and B.Com to 
          professional degrees such as B.Tech, MBA, MCA, and medical courses like MBBS and BDS. The 
          university promotes research in various fields, encouraging innovation among both students 
          and faculty.
        </p>
        <p className='mb-2'>
          Accredited by the University Grants Commission (UGC), CSJM University is recognized for its 
          role in higher education in the region. The university organizes cultural festivals, seminars, 
          and workshops, fostering an environment where students can participate in extracurricular 
          activities. Located in Kanpur, a major industrial hub, the university benefits from its 
          proximity to industries, providing students with ample opportunities for internships and 
          practical experience.
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

      <h3 className="text-3xl text-left font-semibold text-primary mt-8 mb-4">About UIET</h3>
      <div className="text-md text-gray-700 text-justify ">
        <p className='mb-2'>
          The University Institute of Engineering & Technology (UIET) at Chhatrapati Shahu Ji 
          Maharaj University, Kanpur, is a prominent institution dedicated to producing skilled 
          engineers and technologists. UIET offers a dynamic academic environment with modern facilities. 
          It provides six Bachelor of Technology (B.Tech) programs in fields such as Chemical Engineering, 
          Computer Science & Engineering, Electronics & Communication Engineering, Information Technology, 
          and Mechanical Engineering. It also offers career-oriented courses like Bachelor of Computer 
          Application (BCA), Master of Computer Application (MCA), and various diploma and vocational programs.
        </p>
        <div className={`${showFullContentuiet ? 'block' : 'hidden'} md:block`}>
        <p className='mb-2'>
          The institute’s curriculum is designed to meet industry standards, with regular updates and a 
          focus on practical skills. Its qualified faculty ensures that students receive both theoretical 
          knowledge and hands-on experience. UIET promotes innovation and entrepreneurship, preparing students 
          for real-world challenges. In addition to academics, UIET encourages participation in extracurricular 
          activities such as cultural festivals (Spandan) and technical fests (Techmart), fostering well-rounded 
          personal development. With excellent infrastructure, including specialized labs and a dedicated library 
          section, UIET prepares its students to excel in the rapidly evolving field of engineering and technology.
        </p>
        </div>
        {/* Read More / Show Less button */}
        <button
          onClick={() => setShowFullContentuiet(!showFullContentuiet)}
          className="text-primary font-semibold hover:underline mt-2 md:hidden"
        >
          {showFullContentuiet ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </section>
  );
};

export default AboutUniversity;
