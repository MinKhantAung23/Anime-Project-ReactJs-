/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useGetMangaRecommandationsQuery } from "../../store/service/endpoints/manga.endpoints";
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Loading from "../loader/Loading";
import { Alert } from "antd";

const MangaDetailRecommandation = ({ mangaDetail }) => {
  const id = mangaDetail?.mal_id;

  const { data, isLoading, error } = useGetMangaRecommandationsQuery(id);

  const navigate = useNavigate();
  const topTen = data?.data.slice(0, 10);

  const handleNavigate = (manga) => {
    navigate(`/manga-detail/${manga.entry.mal_id}`);
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
        perPage: 5,
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
      {topTen?.map((manga) => (
        <SplideSlide
          key={manga?.entry.mal_id}
          className="mx-2 cursor-pointer"
          onClick={() => handleNavigate(manga)}
        >
          <img
            src={manga?.entry.images.jpg.image_url}
            alt={manga?.entry.title}
            className="h-52 sm:h-72 w-full"
          />
          <h3 className="text-base">{manga?.entry.title}</h3>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default MangaDetailRecommandation;
