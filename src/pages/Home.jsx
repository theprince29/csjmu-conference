import React from "react";
import Carousel from '../components/crousels/Carousel'
import AboutUniversity from "../components/sections/about/AboutUniversity";
import AboutConference from "../components/sections/about/AboutConference";


const Home = () => {
  return (
    <>
      <Carousel />
      <AboutConference />
      <AboutUniversity />
    </>
  );
};

export default Home;
