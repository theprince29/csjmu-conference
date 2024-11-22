import React from 'react'

import * as Images from "../assets";



const SpeakerCard = ({ name, title, description, image }) => {

  const renderDescription = (description) => {
    return description.split("\n").map((line, index) => (
      <p key={index} className="text-gray-500 text-xs mt-2">
        {line}
      </p>
    ));
  };

    return (
      <div className="bg-white shadow-lg rounded-lg p-4 text-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 mx-auto rounded-full object-cover"
        />
        <h3 className="text-lg font-bold text-primary mt-4">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{title}</p>
        <p className="text-gray-500  text-xs mt-2">{renderDescription(description)}</p>
      </div>
    );
  };
  
  const speakers = [
    {
      name: "Prof. Alvaro Rocha",
      title:  "Professor of Information Systems, ISEG, University of Lisbon, Portugal",
      description:"World's Top 1% Scientist, according to Stanford University and Elsevier \n ISEM's Book Series Scientific Manager at Springer Nature \n Chair of ITMA - Information and Technology Management Association \n Founder and Vice-Chair of IEEE SMC Portugal Chapter \n Invited Professor at University of Calabria, Italy \n CEO at AMARITS Consulting, Dubai",
      image: Images.ProfAlvaroRocha,
    },
    {
      name: "Prof. Sergei Levashkin",
      title: "Professor",
      description: "Director at Artificial Intelligence Lab, Russia",
      image: Images.ProfSergeiLevashkin,
    },
    {
      name: "Dr. Hari Mohan Pandey",
      title: "Associate Professor (Sr. Lecturer) Data Science and Artificial Intelligence Bournemouth University, U.K.",
      description: "Top 2% scientist (2022 World Ranking list by Stanford University)",
      image: Images.DrHariMohanPandey,
    },
    {
      name: "Er. Abhinav Tripathi",
      title: "Senior Director",
      description: "Smarsh Inc., UK",
      image: Images.ErAbhinavTripathi,
    },
    {
      name: "Er. Anupama Aggarwal",
      title: "Lead Data Scientist / Product Owner",
      description: "ZeroG Lufthansa Group, Germany",
      image: Images.ErAnupamaAggarwal,
    },
    {
      name: "Er. Himani Fnu",
      title: "Cloud solution architect",
      description: "Wipro Ltd. USA",
      image: Images.ErHimaniFnu,
    },
    {
      name: "Er. Nirav Narendra kumar Modh",
      title: "Consultant",
      description: "Infosys Limited, USA",
      image: Images.ErNiravNarendrakumarModh,
    },
    {
      name: "Dr. Govind P Gupta",
      title: "NIT Raipur",
      description: "Enlisted in Global AD (Alper-Doger) Scientific Index 2024 list.\nRanked within the 'Top 2% Global Scientists/Researchers in the World' (Published by Elsevier, on October 4, 2023)",
      image: Images.DrGovindPGupta,
    },
    
  ];
















const Speakers = () => {
  return (
    <div className="bg-gray-100 p-8 text-left mt-4 rounded-lg shadow-md list-inside">
    <h1 className="text-4xl font-bold text-center text-third mb-8 uppercase">Keynote Speakers</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {speakers.map((speaker, index) => (
        <SpeakerCard
          key={index}
          name={speaker.name}
          title={speaker.title}
          description={speaker.description}
          image={speaker.image}
        />
      ))}
    </div>
  </div>
  )
}

export default Speakers
