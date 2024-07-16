/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useGetAnimeRecommendationsQuery } from "../../store/service/endpoints/animes.endpoints";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "antd";
import Loading from "../loader/Loading";

const AnimeRecommendation = ({ animeId }) => {
  const { data, isLoading, error } = useGetAnimeRecommendationsQuery(animeId);

  const navigate = useNavigate();
  const topTen = data?.data.slice(0, 10);

  const handleNavigate = (anime) => {
    navigate(`/anime-detail/${anime.entry.mal_id}`);
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
    <Splide
      options={{
        type: "slide",
        perPage: 4,
        perMove: 1,
        gap: "0.5rem",
        pagination: false,
        arrows: true,
        breakpoints: {
          1200: {
            perPage: 4,
          },
          800: {
            perPage: 3,
          },
          600: {
            perPage: 2,
          },
        },
      }}
    >
      {topTen?.map((anime) => (
        <SplideSlide
          key={anime?.entry.mal_id}
          className="mx-2 cursor-pointer "
          onClick={() => handleNavigate(anime)}
        >
          <img
            src={anime?.entry.images.jpg.image_url}
            alt={anime?.entry.title}
            className="h-52 sm:h-72 w-full "
          />
          <h3 className="text-base">{anime?.entry.title}</h3>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default AnimeRecommendation;
