import React from "react";
import Carousel from "../components/crousels/Carousel";
import AboutUniversity from "../components/sections/about/AboutUniversity";
import AboutConference from "../components/sections/about/AboutConference";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ICRAECCT'2025 Conference</title>
        <meta
          name="description"
          content="Join the 1st International Conference on Recent Advances in Emerging Computing and Communication Technologies (IC-RAECCT 2025) at Chhatrapati Shahu Ji Maharaj University, Kanpur. Held on April 11-12, 2025, this hybrid event is organized by the Departments of Computer Applications, Computer Science & Engineering, and Electronics & Communication Engineering. Explore advancements in AI, IoT, cybersecurity, 5G, data science, and more. Engage with experts, attend workshops, and network with industry leaders at CSJMU's esteemed campus."
        />
        <meta
          name="keywords"
          content="CSJMU conference 2025, CSJM university upcoming conferences,  ICRAECCT 2025, ICRAECCT, UIET conference,CSE conference,CSE Department UIET CSJM University kanpur ,ICRAECCT 2025, computing conference, communication technologies,csjmu conference, CSJMU, Kanpur, technology advancements, academic conference, research, computing, communication"
        />
      </Helmet>
      <Carousel />
      <AboutConference />
      <AboutUniversity />
    </>
  );
};

export default Home;
