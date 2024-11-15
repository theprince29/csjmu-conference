import React from "react";
import Carousel from "../components/crousels/Carousel";
import AboutUniversity from "../components/sections/about/AboutUniversity";
import AboutConference from "../components/sections/about/AboutConference";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - ICRAECCT'2025 Conference</title>
        <meta
          name="description"
          content="Join us at the ICRAECCT 2025 Conference hosted by Chhatrapati Shahu Ji Maharaj University, Kanpur. Discover pioneering advancements in computing and communication technologies."
        />
      </Helmet>
      <Carousel />
      <AboutConference />
      <AboutUniversity />
    </>
  );
};

export default Home;
