/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTopAnimesQuery } from "../../store/service/endpoints/animes.endpoints";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { StarFilled } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../loader/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmark,
  removeBookmark,
} from "../../store/features/bookmark/bookmarkSlice";
import { Alert } from "antd";

const HorizonScrollCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);

  const { data, isLoading, error } = useTopAnimesQuery({
    page: currentPage,
    limit: 20,
  });
  const topFifteen = data?.data.slice(0, 15);

  const handleNavigate = (anime) => {
    navigate(`/anime-detail/${anime.mal_id}`);
  };

  const handleBookmarkClick = (anime) => {
    if (bookmarks.find((item) => item.mal_id === anime.mal_id)) {
      dispatch(removeBookmark(anime.mal_id));
    } else {
      dispatch(addBookmark(anime));
    }
  };
  // console.log(topFifteen);

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
      {topFifteen?.map((anime) => (
        <SplideSlide
          key={anime.mal_id}
          className="mx-2 cursor-pointer"
          onClick={() => handleNavigate(anime)}
        >
          <img
            src={anime.images.jpg.image_url}
            alt={anime.title}
            className="h-52 sm:h-72 w-full"
          />
          <div className="absolute inset-0 bg-transparent hover:bg-black/85 px-3 py-4 flex flex-col justify-between items-start transform  transition-all duration-300 ease-in-out  text-gray-100 opacity-0 hover:opacity-100">
            <div>
              <h3 className="text-xs sm:text-lg font-semibold mb-2">
                {anime.title.slice(0, 50)}
              </h3>
              <small className="p-1 font-semibold bg-white text-black rounded-full border">
                <StarFilled className="text-yellow-400 me-1" />
                {anime.score}
              </small>
              <h4 className="text-xs mt-2">{anime.episodes} Episodes </h4>
              <small className="text-xs mt-1">{anime.status}</small>
              <small className="text-xs mt-1 hidden sm:block">
                {anime.aired.string}
              </small>
            </div>

            <div className="sm:flex justify-evenly items-center w-full hidden ">
              <Link to={anime.trailer.embed_url} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 hover:fill-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              </Link>
              <Link to={"/bookmark"} onClick={() => handleBookmarkClick(anime)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 hover:fill-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </Link>
              <Link to={anime.url} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default HorizonScrollCard;
