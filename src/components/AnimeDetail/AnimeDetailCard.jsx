/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";
import Information from "./Information";
import AnimeCharacters from "./AnimeCharacters";
import AnimeTheme from "./AnimeTheme";
import AnimeEpisodes from "./AnimeEpisodes";
import AnimeRecommendation from "./AnimeRecommendation";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmark,
  removeBookmark,
} from "../../store/features/bookmark/bookmarkSlice";

const AnimeDetailCard = ({ anime }) => {
  // console.log(anime);
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);
  const bgImage = anime?.images?.jpg.image_url;

  const handleBookmark = (anime) => {
    if (bookmarks.find((item) => item.mal_id === anime.mal_id)) {
      dispatch(removeBookmark(anime.mal_id));
    } else {
      dispatch(addBookmark(anime));
    }
  };

  return (
    <div className="bg-gray-50">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative max-h-[300px] w-full bg-cover bg-center  shadow hover:shadow-md"
      >
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="relative z-10 flex justify-center items-center p-4">
          <img
            src={anime?.images?.jpg.image_url}
            alt=""
            className="hover:rotate-6 transition-all w-40"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mx-8 my-4 ">
        <h1 className="text-2xl font-bold font-serif text-center">
          {anime?.title}
        </h1>
        <h4 className="text-base font-medium mt-3">{anime?.title_english}</h4>
        <div className="mb-2">
          <small className="inline">
            {anime?.season}-{anime?.year} | {anime?.type}
          </small>
          <small className="ms-4">
            <StarFilled className="text-yellow-400 me-1" />
            {anime?.score}
          </small>
        </div>

        <button onClick={() => handleBookmark(anime)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 ${
              bookmarks.find((item) => item.mal_id === anime.mal_id)
                ? "fill-red-500"
                : "fill-blue-500"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </button>

        <Information anime={anime} />

        <div>
          <h4 className="text-lg font-bold text-center sm:text-start">
            Synopsis
          </h4>
          <p className="text-gray-600 mt-2 mb-4 text-justify">
            {anime?.synopsis}
          </p>
        </div>
        <div>
          <AnimeCharacters aniId={anime?.mal_id} />
        </div>
        <div className="mt-4">
          <AnimeTheme animeId={anime?.mal_id} />
        </div>

        <div className="my-4">
          <h1 className="mb-4 text-lg font-bold mx-4">Recommendation</h1>
          <AnimeRecommendation animeId={anime?.mal_id} />
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailCard;
