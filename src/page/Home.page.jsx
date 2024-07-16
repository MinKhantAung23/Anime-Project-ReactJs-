/* eslint-disable no-unused-vars */
import React from "react";
import Carousel from "../components/home/Carousel";
import HorizonalScroll from "../components/home/HorizonalScroll";
import RandomCard from "../components/home/RandomCard";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <HorizonalScroll />
      <RandomCard />
    </div>
  );
};

export default HomePage;
