/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useAnimesQuery } from "../../store/service/endpoints/animes.endpoints";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../loader/Loading";
import { Alert, Spin } from "antd";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { data, isLoading, error } = useAnimesQuery({
    page: currentPage,
    limit: 20,
  });
  const tenAnimes = data?.data.slice(0, 10);

  const handleNavigate = (anime) => {
    navigate(`/anime-detail/${anime.mal_id}`);
  };

  if (isLoading) return <Loading />;

  if (error)
    return (
      <Alert
        message={`Error : ${error.status}`}
        className="w-fit mx-auto my-4"
        type="error"
      />
    );
  return (
    <div className="h-[70vh]">
      <Splide
        tag="section"
        options={{
          type: "loop",
          autoplay: true,
          interval: 3500,
        }}
      >
        {tenAnimes?.map((anime) => (
          <SplideSlide key={anime.mal_id}>
            <div className="w-full h-[70vh] relative">
              <img
                src={anime.images.webp.large_image_url}
                className="w-full h-full object-cover"
                alt="Image"
              />

              <div className="bg-opacity-50 bg-black w-full h-full top-0 left-0 absolute z-10 "></div>
              <div className="text-white absolute z-20 w-1/2 sm:top-16 bottom-20 left-20">
                <h1 className="sm:text-3xl text-lg text-center font-bold mb-3">
                  {anime.title}
                </h1>
                <p className="text-lg font-medium mb-6 hidden sm:block">
                  {anime.synopsis.slice(0, 200)}...
                </p>
                <button
                  onClick={() => handleNavigate(anime)}
                  className="btn w-full sm:w-fit"
                >
                  Detail
                </button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
