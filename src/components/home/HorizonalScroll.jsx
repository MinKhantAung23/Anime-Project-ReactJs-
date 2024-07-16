/* eslint-disable no-unused-vars */
import React from "react";

import HorizonScrollCard from "../AnimeCard/HorizonScrollCard";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const HorizonalScroll = () => {
  return (
    <div className="mx-4 my-5">
      <div className="flex justify-between items-center px-2 pb-4">
        <h1 className="text-2xl font-bold">Top Animes</h1>
        <Link to={"/animes"} className="underline text-blue-500">
          see all
        </Link>
      </div>
      <div>
        <HorizonScrollCard />
      </div>
    </div>
  );
};

export default HorizonalScroll;
